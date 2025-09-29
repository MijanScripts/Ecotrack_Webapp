const axios = require('axios');

const ORS_API_KEY = process.env.ORS_API_KEY;

/**
 * Convert a plain text location into coordinates (lat/lng)
 * using OpenRouteService geocoding API.
 *
 * @param {string} location - The plain text location (e.g. "Lagos")
 * @returns {Promise<{ lat: number, lng: number }>}
 */
async function getCoordinates(location) {
  try {
    const response = await axios.get(
      `https://api.openrouteservice.org/geocode/search`,
      {
        params: {
          api_key: ORS_API_KEY,
          text: location,
          size: 1, // just return the best match
          "boundary.country": "NG" // optional: restrict results to Nigeria
        }
      }
    );

    if (
      response.data &&
      response.data.features &&
      response.data.features.length > 0
    ) {
      const coords = response.data.features[0].geometry.coordinates;
      return { lng: coords[0], lat: coords[1] }; // ORS gives [lng, lat]
    } else {
      throw new Error(`No coordinates found for ${location}`);
    }
  } catch (error) {
    console.error(`Error geocoding location "${location}":`, error.message);
    throw new Error(`Failed to fetch coordinates for "${location}"`);
  }
}

module.exports = { getCoordinates };
