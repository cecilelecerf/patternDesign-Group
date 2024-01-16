const express = require('express');
const router = express.Router();
const VehicleController = require('../controllers/VehicleController');
const vehicleController = new VehicleController();

router.post('/upload-csv', vehicleController.uploadCsvData);

module.exports = router;
