const request = require("supertest");
const app = require("../server");

// mock geocoding service
jest.mock("../services/geocodingService", () => ({
  getCoordinates: jest.fn().mockResolvedValue({ lat: 6.5244, lng: 3.3792 }), // Lagos coords
}));

// mock ORS service
jest.mock("../services/orsService", () => ({
  calculateCarbon: jest.fn().mockResolvedValue({
    co2_kg: 24,       // example emission
    distance_km: 120, // fake distance
    source: "mocked ORS",
  }),
}));

// mock factor service (if calculateCarbon internally calls it)
jest.mock("../services/factorService", () => ({
  getFactorForTransport: jest.fn().mockImplementation(async (mode) => {
    const factors = {
      car: { factor: 0.2 },
      bus: { factor: 0.1 },
      plane: { factor: 0.25 },
      train: { factor: 0.05 },
      bike: { factor: 0 },
    };
    return factors[mode] || null;
  }),
}));

describe("Carbon Routes", () => {
  it("calculates emissions for valid trip data", async () => {
    const response = await request(app)
      .post("/api/carbon")
      .send({ from: "Lagos", to: "Ibadan", meansOfTransport: "car" });

    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty("emissions");
    expect(response.body).toHaveProperty("unit");
    expect(response.body.emissions).toBeGreaterThan(0);
  });

  it("returns 400 if input is missing", async () => {
    const response = await request(app).post("/api/carbon").send({});
    expect(response.status).toBe(400);
  });

  it("handles unsupported transport mode", async () => {
    const response = await request(app)
      .post("/api/carbon")
      .send({ from: "Lagos", to: "Ibadan", meansOfTransport: "spaceship" });

    expect(response.status).toBe(400);
    expect(response.body).toHaveProperty("error");
  });
});
