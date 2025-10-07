const axios = require("axios");
const { MongoClient } = require("mongodb");

const uri = process.env.MONGODB_URI;
const dbName = "carbonTracker";
const collectionName = "factors";

// Utility: fetch factor by mode
async function getFactor(mode) {
  const client = new MongoClient(uri);
  try {
    await client.connect();
    const db = client.db(dbName);
    const collection = db.collection(collectionName);
    return await collection.findOne({ mode });
  } finally {
    await client.close();
  }
}

/**
 * Get carbon estimate for either:
 * 1. Single trip: (from, to, mode)
 * 2. Multi-stop trip: (locations[], null, mode)
 */
async function getCarbonEstimate(fromOrLocations, to, mode) {
  // Fetch factor for mode
  const factor = await getFactor(mode);
  if (!factor) {
    throw new Error(`Emission factor for mode '${mode}' not found`);
  }

  // Case 1: Single trip
  if (typeof fromOrLocations === "string" && typeof to === "string") {
    const distance = await getDistance(fromOrLocations, to, mode);
    return {
      mode,
      distance,
      emissions: distance * factor.value,
    };
  }

  // Case 2: Multi-stop trip
  if (Array.isArray(fromOrLocations)) {
    let totalDistance = 0;

    for (let i = 0; i < fromOrLocations.length - 1; i++) {
      const start = fromOrLocations[i];
      const end = fromOrLocations[i + 1];
      const segment = await getDistance(start, end, mode);
      totalDistance += segment;
    }

    return {
      mode,
      distance: totalDistance,
      emissions: totalDistance * factor.value,
    };
  }

  throw new Error("Invalid parameters for getCarbonEstimate");
}

// Mock or real API call to get distance between locations
async function getDistance(from, to, mode) {
  // Example: using OpenRouteService or Mapbox API
  // Replace this with actual API call
  // For now we mock a constant distance to make tests predictable
  return 10; // kilometers
}

module.exports = { getCarbonEstimate };
