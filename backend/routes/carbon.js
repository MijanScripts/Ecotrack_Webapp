const express = require("express");
const router = express.Router();
const { getCoordinates } = require("../services/geocodingService");
const { calculateCarbon } = require("../services/orsService");

// Supported transport modes
const VALID_MODES = [
  "car",
  "bus",
  "plane",
  "train",
  "keke",
  "shuttle",
  "okada",
  "korope",
  "bike",
];

// POST /api/carbon
router.post("/", async (req, res) => {
  try {
    let { from, to, meansOfTransport, locations, transportMode } = req.body;

    // Map single trip to locations array if needed
    if ((!locations || locations.length < 2) && from && to && meansOfTransport) {
      locations = [from, to];
      transportMode = meansOfTransport;
    }

    // Validation
    if (!locations || locations.length < 2 || !transportMode) {
      return res
        .status(400)
        .json({ error: "Please provide from, to, and means of transport" });
    }

    transportMode = transportMode.trim().toLowerCase();
    if (!VALID_MODES.includes(transportMode)) {
      return res.status(400).json({
        error: `Invalid transportMode. Allowed values: ${VALID_MODES.join(", ")}`,
      });
    }

    // Get coordinates
    const coordsArray = [];
    for (let loc of locations) {
      const coord = await getCoordinates(loc.trim());
      if (!coord) {
        return res
          .status(400)
          .json({ error: `Could not find coordinates for location: ${loc}` });
      }
      coordsArray.push(coord);
    }

    // Calculate emissions
    let totalCO2 = 0;
    const trips = [];

    for (let i = 0; i < coordsArray.length - 1; i++) {
      const start = locations[i].trim();
      const end = locations[i + 1].trim();

      const result = await calculateCarbon(
        coordsArray[i],
        coordsArray[i + 1],
        transportMode
      );

      totalCO2 += result.co2_kg;

      trips.push({
        from: start,
        to: end,
        co2: parseFloat(result.co2_kg.toFixed(2)),
        unit: "kgCO2e",
        distance_km: result.distance_km,
        distance_source: result.distance_source,   // distance source
        emission_source: result.emission_source    // emission factor source
      });
    }

    res.status(200).json({
      transportMode,
      trips,
      emissions: parseFloat(totalCO2.toFixed(2)),
      unit: "kgCO2e",
      distance_source: trips[0]?.distance_source,   // show main source
      emission_source: trips[0]?.emission_source    // show factor source
    });
  } catch (err) {
    console.error("Error in /api/carbon:", err.message || err);
    res.status(500).json({ error: "Internal server error" });
  }
});

module.exports = router;
