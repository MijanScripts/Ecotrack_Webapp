const { getFactorForTransport } = require("./factorService");

async function calculateEmissions(mode, distanceKm) {
  let factorDoc = await getFactorForTransport(mode); // { mode, factor }

  // Fallback if no factor found → use default
  if (!factorDoc) {
    factorDoc = { mode: "default", factor: 0.2 }; // default 0.2 kg/km
  }

  const co2e = distanceKm * factorDoc.factor;

  return {
    co2e: parseFloat(co2e.toFixed(2)),
    unit: "kgCO2e",
    source: "DEFRA (adjusted for Nigeria)"
  };
}

module.exports = { calculateEmissions };
