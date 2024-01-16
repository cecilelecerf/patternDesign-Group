// src/routes/CsvRoutes.js
const express = require('express');
const router = express.Router();
const VehicleController = require('../controllers/VehicleController');

router.post('/upload-csv', VehicleController.uploadCsvData);

module.exports = router;
