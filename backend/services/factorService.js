const { MongoClient } = require("mongodb");
require("dotenv").config(); // Load environment variables from .env

const uri = process.env.MONGODB_URI; // MongoDB connection string
const dbName = "carbonTracker";
const collectionName = "factors"; // where emission factors are stored

async function getFactorForTransport(transportMode) {
  if (!transportMode) throw new Error("Transport mode is required");

  const client = new MongoClient(uri);

  try {
    await client.connect();
    const db = client.db(dbName);
    const collection = db.collection(collectionName);

    // Find factor by transport mode
    const factor = await collection.findOne({ mode: transportMode });

    return factor;
  } catch (error) {
    console.error("Error fetching factor from MongoDB:", error.message);
    throw error;
  } finally {
    await client.close();
  }
}

module.exports = { getFactorForTransport };
