const { mockCarbonEstimate } = require("./climatiqService");
const { getMockDistance } = require("./distanceService");

function getCarbonEstimate(from, to, meansOfTransport) {
  if (!from || !to || !meansOfTransport) {
    throw new Error("Please provide from, to, and means of transport");
  }

  const distance = getMockDistance(from, to);
  const result = mockCarbonEstimate(meansOfTransport, distance);

  return {
    co2e: result.co2e,
    unit: result.unit,
    source: result.source
  };
}

module.exports = { getCarbonEstimate };
