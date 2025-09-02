// server.js
const express = require('express');
const dotenv = require('dotenv');
const carbonRoutes = require('./routes/carbon');

dotenv.config();
const app = express();

// Parse JSON request bodies
app.use(express.json());

// Mount carbon routes
app.use('/api/carbon', carbonRoutes);

// Export app for testing
module.exports = app;

// Start server only if this file is run directly
if (require.main === module) {
  const PORT = process.env.PORT || 5000;
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
}
