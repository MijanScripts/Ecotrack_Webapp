const axios = require("axios");

const ORS_API_KEY = process.env.ORS_API_KEY;

/**
 * Convert a plain text location into coordinates (lat/lng)
 * Priority: ORS => fallback Nominatim (OpenStreetMap).
 *
 * @param {string} location
 * @returns {Promise<{ lat: number, lng: number }>}
 */
async function getCoordinates(location) {
  // Try ORS first
  try {
    if (ORS_API_KEY) {
      const response = await axios.get(
        `https://api.openrouteservice.org/geocode/search`,
        {
          params: {
            api_key: ORS_API_KEY,
            text: location,
            size: 1,
            "boundary.country": "NG",
          },
        }
      );

      if (
        response.data?.features &&
        response.data.features.length > 0
      ) {
        const coords = response.data.features[0].geometry.coordinates;
        return { lng: coords[0], lat: coords[1] }; // ORS => [lng, lat]
      }
    }
  } catch (error) {
    console.warn(`ORS geocoding failed for "${location}":`, error.message);
  }

  // Fallback: Nominatim (OpenStreetMap)
  try {
    const response = await axios.get(
      `https://nominatim.openstreetmap.org/search`,
      {
        params: {
          q: location,
          format: "json",
          limit: 1,
          countrycodes: "NG", // restrict to Nigeria
        },
      }
    );

    if (response.data && response.data.length > 0) {
      const coords = response.data[0];
      return { lat: parseFloat(coords.lat), lng: parseFloat(coords.lon) };
    }
  } catch (error) {
    console.error(`Nominatim failed for "${location}":`, error.message);
  }

  throw new Error(`Failed to fetch coordinates for "${location}"`);
}

module.exports = { getCoordinates };
