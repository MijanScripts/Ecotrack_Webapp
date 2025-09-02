const request = require("supertest");
const app = require("../server"); // import the real Express app

describe("POST /api/carbon/calculate", () => {

  test("should return CO2e for a car trip", async () => {
    const response = await request(app)
      .post("/api/carbon/calculate")
      .send({
        from: "Lagos",
        to: "Ibadan",
        meansOfTransport: "car"
      });

    expect(response.statusCode).toBe(200);
    expect(response.body).toEqual({
      from: "Lagos",
      to: "Ibadan",
      meansOfTransport: "car",
      distance: {
        value: 130,
        unit: "km"
      },
      co2e: 32.5,
      unit: "kg",
      source: "mock"
    });
  });

  test("should return error if data is missing", async () => {
    const response = await request(app)
      .post("/api/carbon/calculate")
      .send({ from: "Lagos" });

    expect(response.statusCode).toBe(400);
    expect(response.body).toEqual({
      error: "Please provide from, to, and means of transport"
    });
  });

});
