const { getDistance: getRealDistance } = require("./orsService");

// Mock distance table for backup (when ORS fails or offline testing)
const routes = {
  "ojota-yaba": 10,
  "lagos-ibadan": 130,
  "lagos-abuja": 760,
  "yaba-unilag": 4,
  "ikeja-sango": 30
};

// Function that first tries ORS, then falls back to mock
async function getDistance(from, to, mode = "driving-car") {
  try {
    // Try real API call (expects {lat, lng} objects)
    if (from.lat && from.lng && to.lat && to.lng) {
      const distance = await getRealDistance(from, to, mode);
      return distance;
    }
  } catch (err) {
    console.error("ORS failed, falling back to mock data:", err.message);
  }

  // Fallback: look up in mock table
  const key = `${from.toLowerCase?.() || from}-${to.toLowerCase?.() || to}`;
  return routes[key] || 50; // default to 50km if not found
}

module.exports = { getDistance };

