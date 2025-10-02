const { getFactorForTransport } = require("./factorService");
const { getDistance } = require("./distanceService");

/**
 Calculate carbon emissions for a trip
 Uses distanceService (ORS => Haversine => Mock)
 *
 @param {Object|string} from - coordinates {lat,lng} or plain string
 @param {Object|string} to   - coordinates {lat,lng} or plain string
 @param {string} transportMode - e.g., car, bus
 */
async function calculateCarbon(from, to, transportMode) {
  // Get distance with full fallback logic
  const { distance_km, distance_source } = await getDistance(from, to);

  // Fetch factor for transport mode
  const factorDoc = await getFactorForTransport(transportMode);
  if (!factorDoc) throw new Error(`No factor found for transport mode: ${transportMode}`);

  // CO2 = distance × factor
  const co2_kg = distance_km * factorDoc.factor;

  return {
    co2_kg: parseFloat(co2_kg.toFixed(2)),
    distance_km,
    distance_source, // tells if ORS / Haversine / Mock
    emission_source: factorDoc.source || "DEFRA Nigeria adjusted" // emission factor source only
  };
}

module.exports = { calculateCarbon };
