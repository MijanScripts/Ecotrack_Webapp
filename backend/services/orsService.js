const axios = require("axios");

// This will pull my ORS API key from the .env file for security
const ORS_API_KEY = process.env.ORS_API_KEY;

/**
 * Get distance between two coordinates using ORS
 * @param {Object} from - { lat, lng }
 * @param {Object} to - { lat, lng }
 * @param {string} mode - ORS mode e.g. "driving-car", "cycling-regular", "foot-walking"
 */
async function getDistanceFromORS(from, to, mode = "driving-car") {
  try {
    // ORS endpoint requires the mode in the URL
    const url = `https://api.openrouteservice.org/v2/directions/${mode}`;

    // Send request with coordinates
    const response = await axios.post(
      url,
      {
        coordinates: [
          [from.lng, from.lat], // ORS expects [lng, lat]
          [to.lng, to.lat]
        ]
      },
      {
        headers: {
          Authorization: ORS_API_KEY,
          "Content-Type": "application/json"
        }
      }
    );

    // ORS returns distance in meters, then convert to km
    const distanceMeters = response.data.routes[0].summary.distance;
    const distanceKm = distanceMeters / 1000;

    return distanceKm;
  } catch (error) {
    console.error("Error fetching distance from ORS:", error.message);
    throw new Error("ORS distance fetch failed");
  }
}

module.exports = { getDistanceFromORS };
