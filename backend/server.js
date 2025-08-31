const express = require('express');
const distanceRoute = require('./routes/distance');
require('dotenv').config();

const app = express();
app.use(express.json());

app.use('/api/distance', distanceRoute);

app.get('/', (req, res) => {
	res.send('Welcome to the Carbon Tracker API');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
	console.log(`🚀 Server is running on http://localhost:${PORT}`);
});
