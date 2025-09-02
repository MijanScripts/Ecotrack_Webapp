const express = require('express');
const router = express.Router();
const { calculateCarbon } = require('../controllers/carbonController');

router.post('/calculate', calculateCarbon);

module.exports = router;
