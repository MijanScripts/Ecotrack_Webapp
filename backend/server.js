const express = require("express");
const dotenv = require("dotenv");

// Load env vars
dotenv.config();

const app = express();

// Middleware: parse JSON request bodies
app.use(express.json());

// Routes
app.use("/api/carbon", require("./routes/carbon"));

// Export app for testing
module.exports = app;

// Start server only if this file is run directly
if (require.main === module) {
  const PORT = process.env.PORT || 5000;
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
}
