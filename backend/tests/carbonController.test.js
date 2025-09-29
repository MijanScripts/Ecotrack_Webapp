const { calculateCarbon } = require("../controllers/carbonController");

// mock Trip model
jest.mock("../models/Trip", () => {
  return jest.fn().mockImplementation(() => ({
    save: jest.fn(),
  }));
});

// mock services
jest.mock("../services/geocodingService", () => ({
  getCoordinates: jest.fn().mockResolvedValue([3.3792, 6.5244]), // fake Lagos coords
}));

jest.mock("../services/orsService", () => ({
  calculateCarbon: jest.fn().mockResolvedValue({
    co2_kg: 7.72,
    distance_km: 130,
    source: "mocked ORS",
  }),
}));

describe("Carbon Controller", () => {
  it("returns emissions when given valid data", async () => {
    const req = {
      body: { from: "Lagos", to: "Ibadan", meansOfTransport: "car" },
    };
    const res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    };

    await calculateCarbon(req, res);

    expect(res.json).toHaveBeenCalledWith(
      expect.objectContaining({
        emissions: expect.any(Number),
        unit: expect.any(String),
      })
    );
  });
});
