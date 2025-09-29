const { getCoordinates } = require("../services/geocodingService");
const { calculateCarbon } = require("../services/orsService");
const Trip = require("../models/Trip");

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

// Helper: smart unit conversion for CO2 values
function getSmartUnit(co2_kg) {
  if (co2_kg < 1) return { unit: "gCO2e", value: co2_kg * 1000 };
  if (co2_kg >= 1000) return { unit: "tCO2e", value: co2_kg * 0.001 };
  return { unit: "kgCO2e", value: co2_kg };
}

exports.calculateCarbon = async (req, res) => {
  try {
    let { from, to, meansOfTransport, locations, transportMode } = req.body;

    /**
     * INPUT MAPPING:
     * If user gives { from, to, meansOfTransport },
     * only use it if locations array is not already provided
     */
    if ((!locations || !Array.isArray(locations) || locations.length < 2) && from && to && meansOfTransport) {
      locations = [from, to];
      transportMode = meansOfTransport;
    }

    // VALIDATION: check if required fields are present
    if (!locations || !Array.isArray(locations) || locations.length < 2 || !transportMode) {
      return res.status(400).json({
        error: "Please provide from, to, and means of transport",
      });
    }

    // Normalize transport mode
    transportMode = transportMode.trim().toLowerCase();
    if (!VALID_MODES.includes(transportMode)) {
      return res.status(400).json({
        error: `Invalid transportMode. Allowed values: ${VALID_MODES.join(", ")}`,
      });
    }

    // Step 1: Get coordinates for each location
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

    // Step 2: Calculate emissions for each trip
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

      if (typeof result.co2_kg !== "number") {
        return res.status(500).json({
          error: `Emission calculation failed for trip: ${start} → ${end}`,
        });
      }

      totalCO2 += result.co2_kg;

      // Apply smart unit for each trip
      const { unit, value } = getSmartUnit(result.co2_kg);

      trips.push({
        from: start,
        to: end,
        co2: parseFloat(value.toFixed(2)),
        unit,
        distance_km: result.distance_km ?? null,
        source: result.source ?? "DEFRA adjusted for Nigeria",
      });
    }

    // Step 3: Smart unit for total CO2
    const { unit: totalUnit, value: totalValue } = getSmartUnit(totalCO2);

    // Step 4: Save trip record in MongoDB
    const tripRecord = new Trip({
      transportMode,
      locations,
      trips,
      total_co2_kg: parseFloat(totalCO2.toFixed(2)),
    });
    await tripRecord.save();

    // Step 5: Return response
    res.json({
      transportMode,
      trips,
      emissions: parseFloat(totalValue.toFixed(2)),
      unit: totalUnit,
      source: trips[0]?.source ?? "DEFRA adjusted for Nigeria",
    });
  } catch (error) {
    console.error("Unexpected error:", error);
    res.status(500).json({
      error: "Something went wrong while calculating carbon emissions",
    });
  }
};
