const express = require('express');
const axios = require('axios');
require('dotenv').config();

const router = express.Router();
const MAPBOX_TOKEN = process.env.MAPBOX_TOKEN;

// Converted place name to coordinates
async function getCoordinates(place) {
	const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(
		place
	)}.json?access_token=${MAPBOX_TOKEN}`;
	const response = await axios.get(url);
	const data = response.data;
	if (!data.features.length) throw new Error(`No results for "${place}"`);
	return data.features[0].center; // [lon, lat]
}

router.post('/', async (req, res) => {
	const { origin, destination, mode = 'driving' } = req.body;

	try {
		const [originCoord, destCoord] = await Promise.all([
			getCoordinates(origin),
			getCoordinates(destination),
		]);

		const coords = `${originCoord.join(',')};${destCoord.join(',')}`;
		const matrixUrl = `https://api.mapbox.com/directions-matrix/v1/mapbox/${mode}/${coords}?annotations=distance,duration&access_token=${MAPBOX_TOKEN}`;

		const response = await axios.get(matrixUrl);
		const data = response.data;

		const distanceInMeters = data.distances[0][1];
		const durationInSeconds = data.durations[0][1];

		const totalKm = distanceInMeters / 1000;
		const km = Math.floor(totalKm);
		const meters = Math.round((totalKm - km) * 1000);

		const totalMin = durationInSeconds / 60;
		const hours = Math.floor(totalMin / 60);
		const minutes = Math.round(totalMin % 60);

		res.json({
			origin,
			destination,
			mode,
			distance: {
				km,
				meters,
			},
			duration: {
				hours,
				minutes,
			},
		});
	} catch (err) {
		res.status(500).json({ error: err.message });
	}
});

module.exports = router;
