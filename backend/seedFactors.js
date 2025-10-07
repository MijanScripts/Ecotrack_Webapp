const { MongoClient } = require("mongodb");
require("dotenv").config();

const uri = process.env.MONGODB_URI;
const dbName = "carbonTracker";
const collectionName = "factors";

// DEFRA 2025 transport emission factors (kgCO2e per km)
// Adjusted for Nigerian conditions
const factors = [
  { 
    mode: "car", 
    factor: 0.0594, // DEFRA base ~0.0495 → +20% for older fleet
    unit: "kgCO2e/km", 
    source: "DEFRA Nigeria adapted" 
  },
  { 
    mode: "bus", 
    factor: 0.00844, // DEFRA base ~0.0065 => +30% for diesel dominance
    unit: "kgCO2e/km", 
    source: "DEFRA Nigeria adapted" 
  },
  { 
    mode: "plane", 
    factor: 0.25, // long-haul average
    unit: "kgCO2e/km", 
    source: "DEFRA 2025" 
  },
  { 
    mode: "train", 
    factor: 0.05, // conservative, given limited electrification
    unit: "kgCO2e/km", 
    source: "DEFRA 2025 (adapted for Nigeria)" 
  },
  { 
    mode: "bike", 
    factor: 0.0, // no direct emissions
    unit: "kgCO2e/km", 
    source: "DEFRA 2025" 
  }
];

async function seedFactors() {
  const client = new MongoClient(uri);

  try {
    await client.connect();
    const db = client.db(dbName);
    const collection = db.collection(collectionName);

    // Clear existing factors
    await collection.deleteMany({});
    // Insert new factors
    await collection.insertMany(factors);

    console.log("Emission factors uploaded successfully!");
  } catch (error) {
    console.error("Error uploading emission factors:", error.message);
  } finally {
    await client.close();
  }
}

seedFactors();
