const { getCarbonEstimate } = require("../services/carbonCalculator");

describe("getCarbonEstimate", () => {

  test("calculates CO2e correctly for a car trip", () => {
    const result = getCarbonEstimate("Lagos", "Ibadan", "car");

    expect(result).toEqual({
      co2e: 32.5, // 130 km * 0.25
      unit: "kg",
      source: "mock"
    });
  });

  test("calculates CO2e correctly for a bus trip", () => {
    const result = getCarbonEstimate("Lagos", "Ibadan", "bus");

    expect(result).toEqual({
      co2e: 13, // 130 km * 0.1
      unit: "kg",
      source: "mock"
    });
  });

  test("uses default rate for unknown transport", () => {
    const result = getCarbonEstimate("Lagos", "Ibadan", "bicycle");

    expect(result).toEqual({
      co2e: 26, // 130 km * 0.2 (default)
      unit: "kg",
      source: "mock"
    });
  });

});
