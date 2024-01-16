const mongoose = require('mongoose');

const vehicleSchema = new mongoose.Schema({
    releaseYear: Date,
    salesNumber: Number,
    brand: { type: String, required: true },
    model: { type: String, required: true },
    createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Vehicle', vehicleSchema);
