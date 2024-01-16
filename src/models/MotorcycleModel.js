const mongoose = require('mongoose');
const Vehicle = require('./VehicleModel');

const motorcycleSchema = new mongoose.Schema({
    hasSidecar: { type: Boolean, default: false }
});

const Motorcycle = Vehicle.discriminator('Motorcycle', motorcycleSchema);

module.exports = Motorcycle;
