const mongoose = require("mongoose");

const Schema = mongoose.Schema;
let motorcycleSchema = new Schema ({
});

const Motorcycle = Vehicle.discriminator("Motorcycle", motorcycleSchema)
module.exports = { Motorcycle }