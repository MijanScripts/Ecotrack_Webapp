const request = require("supertest");
const app = require("../server"); // adjust if your entry file is different

// Mock the services
jest.mock("../services/geocodingService", () => ({
  getCoordinates: jest.fn()
}));
jest.mock("../services/orsService", () => ({
  calculateCarbon: jest.fn()
}));

const { getCoordinates } = require("../services/geocodingService");
const { calculateCarbon } = require("../services/orsService");

describe("Carbon Calculator API", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test("should calculate emissions for a single trip (from/to/meansOfTransport)", async () => {
    // Mock geocoding
    getCoordinates
      .mockResolvedValueOnce({ lat: 6.5244, lng: 3.3792 }) // Lagos
      .mockResolvedValueOnce({ lat: 9.0579, lng: 7.4951 }); // Abuja

    // Mock ORS calculation
    calculateCarbon.mockResolvedValueOnce({
      co2_kg: 50,
      distance_km: 700,
      source: "mocked"
    });

    const res = await request(app)
      .post("/api/carbon")
      .send({
        from: "Lagos",
        to: "Abuja",
        meansOfTransport: "bus"
      });

    expect(res.status).toBe(200);
    expect(res.body.transportMode).toBe("bus");
    expect(res.body.emissions).toBeCloseTo(50);
    expect(res.body.trips).toHaveLength(1);
    expect(res.body.trips[0]).toMatchObject({
      from: "Lagos",
      to: "Abuja"
    });
  });

  test("should calculate emissions for a multi-stop trip (locations + transportMode)", async () => {
    // Mock geocoding
    getCoordinates
      .mockResolvedValueOnce({ lat: 6.5244, lng: 3.3792 }) // Lagos
      .mockResolvedValueOnce({ lat: 7.3775, lng: 3.9470 }) // Ibadan
      .mockResolvedValueOnce({ lat: 9.0579, lng: 7.4951 }); // Abuja

    // Mock ORS calculation for Lagos → Ibadan and Ibadan → Abuja
    calculateCarbon
      .mockResolvedValueOnce({
        co2_kg: 20,
        distance_km: 130,
        source: "mocked"
      })
      .mockResolvedValueOnce({
        co2_kg: 40,
        distance_km: 570,
        source: "mocked"
      });

    const res = await request(app)
      .post("/api/carbon")
      .send({
        locations: ["Lagos", "Ibadan", "Abuja"],
        transportMode: "bus"
      });

    expect(res.status).toBe(200);
    expect(res.body.transportMode).toBe("bus");
    expect(res.body.emissions).toBeCloseTo(60); // 20 + 40
    expect(res.body.trips).toHaveLength(2);

    // Check first leg
    expect(res.body.trips[0]).toMatchObject({
      from: "Lagos",
      to: "Ibadan"
    });

    // Check second leg
    expect(res.body.trips[1]).toMatchObject({
      from: "Ibadan",
      to: "Abuja"
    });
  });
});
