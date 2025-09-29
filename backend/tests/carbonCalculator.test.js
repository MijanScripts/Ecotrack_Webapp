const { calculateEmissions } = require("../services/emissionService");

describe("Carbon Calculator Service", () => {
  it("calculates car emissions", async () => {
    const result = await calculateEmissions("car", 130);
    expect(result.co2e).toBeCloseTo(7.72, 2); // 130 * 0.0594
  });

  it("calculates bus emissions", async () => {
    const result = await calculateEmissions("bus", 130);
    expect(result.co2e).toBeCloseTo(1.10, 2); // 130 * 0.00844
  });

  it("calculates train emissions", async () => {
    const result = await calculateEmissions("train", 130);
    expect(result.co2e).toBeCloseTo(6.5, 2); // 130 * 0.05
  });

  it("calculates plane emissions", async () => {
    const result = await calculateEmissions("plane", 130);
    expect(result.co2e).toBeCloseTo(32.5, 1); // 130 * 0.25
  });

  it("returns 0 for bike", async () => {
    const result = await calculateEmissions("bike", 130);
    expect(result.co2e).toBe(0);
  });

  it("returns default emission for unknown transport mode", async () => {
    const result = await calculateEmissions("canoe", 1000);
    expect(result.co2e).toBeCloseTo(200, 2); // 1000 * 0.2
  });
});
