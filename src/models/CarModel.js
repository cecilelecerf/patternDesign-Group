const mongoose = require('mongoose');
const Vehicle = require('./VehicleModel');

const carSchema = new mongoose.Schema({
    doorsNumber: { type: Number, required: true }
});

const Car = Vehicle.discriminator('Car', carSchema);

module.exports = Car;
