const express = require('express');
const dotenv = require('dotenv');
const carbonRoutes = require('./routes/carbon');

dotenv.config();
const app = express();

// Allows the app to understand JSON in request bodies
app.use(express.json());

// Use the carbon routes for any request starting with /api/carbon
app.use('/api/carbon', carbonRoutes);

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
