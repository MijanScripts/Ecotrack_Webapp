const { MongoClient } = require("mongodb");
const fs = require("fs");
const path = require("path");
require("dotenv").config();

const uri = process.env.MONGODB_URI;
const dbName = "carbonTracker";
const collectionName = "factors";

// Load DEFRA-adjusted Nigeria fallback dataset (JSON file in data folder)
const fallbackPath = path.join(__dirname, "../data/factors.json");
const fallbackFactors = JSON.parse(fs.readFileSync(fallbackPath, "utf-8"));

async function getFactorForTransport(transportMode) {
  if (!transportMode) throw new Error("Transport mode is required");

  const client = new MongoClient(uri);

  try {
    await client.connect();
    const db = client.db(dbName);
    const collection = db.collection(collectionName);

    // Try MongoDB first
    const factor = await collection.findOne({ mode: transportMode });
    if (factor) return factor;
  } catch (error) {
    console.error("MongoDB error – falling back to local factors:", error.message);
  } finally {
    await client.close();
  }

  // Fall back to local JSON dataset
  const fallback = fallbackFactors.find(f => f.mode === transportMode);
  if (fallback) return fallback;

  // If not found in either Mongo or JSON → throw
  throw new Error(
    `Transport mode '${transportMode}' not supported in DEFRA Nigeria dataset`
  );
}

module.exports = { getFactorForTransport };
