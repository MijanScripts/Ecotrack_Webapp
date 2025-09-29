// routes/carbon.js
const express = require("express");
const router = express.Router();
const { getCoordinates } = require("../services/geocodingService");
const { calculateCarbon } = require("../services/orsService");

// POST /api/carbon
router.post("/", async (req, res) => {
  try {
    let trips = [];
    let totalEmissions = 0;
    let transportMode;

    // Case 1: Single trip (from, to, meansOfTransport)
    if (req.body.from && req.body.to && req.body.meansOfTransport) {
      transportMode = req.body.meansOfTransport;

      // Get coordinates
      const fromCoords = await getCoordinates(req.body.from);
      const toCoords = await getCoordinates(req.body.to);

      // Calculate emissions
      const result = await calculateCarbon(fromCoords, toCoords, transportMode);
      totalEmissions = result.co2_kg;

      trips.push({
        from: req.body.from,
        to: req.body.to,
        emissions: result.co2_kg,
        distance: result.distance_km,
        source: result.source,
      });
    }

    // Case 2: Multi-stop trip (locations array, transportMode)
    else if (Array.isArray(req.body.locations) && req.body.locations.length > 1) {
      transportMode = req.body.transportMode;

      for (let i = 0; i < req.body.locations.length - 1; i++) {
        const from = req.body.locations[i];
        const to = req.body.locations[i + 1];

        const fromCoords = await getCoordinates(from);
        const toCoords = await getCoordinates(to);

        const result = await calculateCarbon(fromCoords, toCoords, transportMode);
        totalEmissions += result.co2_kg;

        trips.push({
          from,
          to,
          emissions: result.co2_kg,
          distance: result.distance_km,
          source: result.source,
        });
      }
    } else {
      return res.status(400).json({
        error: "Invalid input. Provide either {from, to, meansOfTransport} or {locations[], transportMode}",
      });
    }

    return res.status(200).json({
      transportMode,
      emissions: totalEmissions,
      trips,
    });
  } catch (err) {
    console.error("Error in /api/carbon:", err);
    res.status(500).json({ error: "Internal server error" });
  }
});

module.exports = router;
