const { getDistanceFromORS } = require("./orsService");

/* Haversine formula to calculate distance between 2 coordinates (km) */
function haversineDistance(coord1, coord2) {
  const toRad = (val) => (val * Math.PI) / 180;
  const R = 6371; // Earth radius in km

  const dLat = toRad(coord2.lat - coord1.lat);
  const dLon = toRad(coord2.lng - coord1.lng);

  const lat1 = toRad(coord1.lat);
  const lat2 = toRad(coord2.lat);

  const a =
    Math.sin(dLat / 2) ** 2 +
    Math.sin(dLon / 2) ** 2 * Math.cos(lat1) * Math.cos(lat2);

  return R * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
}

// Mock distance table for last fallback
const routes = {
  "ojota-yaba": 10,
  "lagos-ibadan": 130,
  "lagos-abuja": 760,
  "yaba-unilag": 4,
  "ikeja-sango": 30,
};

/**
 Get distance between two locations
 Priority: ORS → Haversine → Mock table
 
 @param {Object|string} from - coords {lat,lng} or plain string
 @param {Object|string} to   - coords {lat,lng} or plain string
 @param {string} mode - ORS travel mode (default driving-car)
 @returns {Promise<{distance_km: number, distance_source: string}>}
 */
async function getDistance(from, to, mode = "driving-car") {
  // 1. ORS distance
  try {
    if (from.lat && from.lng && to.lat && to.lng) {
      const orsDistance = await getDistanceFromORS(from, to, mode);
      if (orsDistance) {
        return { distance_km: orsDistance, distance_source: "ORS" };
      }
      console.warn("ORS returned null, using Haversine fallback...");
    }
  } catch (err) {
    console.warn("ORS failed, trying Haversine:", err.message);
  }

  // 2. Haversine fallback
  try {
    if (from.lat && from.lng && to.lat && to.lng) {
      return {
        distance_km: haversineDistance(from, to),
        distance_source: "Haversine"
      };
    }
  } catch (err) {
    console.warn("Haversine failed, trying mock table:", err.message);
  }

  // 3. Mock fallback
  try {
    const key = `${from.toLowerCase?.() || from}-${to.toLowerCase?.() || to}`;
    return {
      distance_km: routes[key] || 50, // default 50km if nothing matches
      distance_source: routes[key] ? "Mock table" : "Default 50km"
    };
  } catch (err) {
    console.error("Mock table lookup failed:", err.message);
    return { distance_km: 50, distance_source: "Default 50km" };
  }
}

module.exports = { getDistance };
