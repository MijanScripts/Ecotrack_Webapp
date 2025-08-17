function mockCarbonEstimate(meansOfTransport, distance) {
  const rates = {
    car: 0.25,
    bus: 0.1,
    plane: 0.5,
    train: 0.06
  };

  const rate = rates[meansOfTransport] || 0.2;
  const co2e = parseFloat((rate * distance).toFixed(2));

  return {
    co2e,
    unit: "kg",
    source: "mock"
  };
}
module.exports = { mockCarbonEstimate };