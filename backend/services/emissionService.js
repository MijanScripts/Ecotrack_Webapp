const { getFactorForTransport } = require("./factorService");

async function calculateEmissions(mode, distanceKm) {
  // Get factor (throws if not found in MongoDB or JSON)
  const factorDoc = await getFactorForTransport(mode);

  const co2e = distanceKm * factorDoc.factor;

  return {
    co2e: parseFloat(co2e.toFixed(2)),
    unit: "kgCO2e",
    source: factorDoc.source || "DEFRA Nigeria adjusted"
  };
}

module.exports = { calculateEmissions };
