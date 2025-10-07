const mongoose = require('mongoose');

const tripSchema = new mongoose.Schema({
  transportMode: { type: String, required: true },
  locations: { type: [String], required: true },
  trips: [
    {
      from: String,
      to: String,
      distance_km: Number,
      co2_kg: Number
    }
  ],
  total_co2_kg: Number,
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Trip', tripSchema);
