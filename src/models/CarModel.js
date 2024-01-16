const mongoose = require("mongoose");
const Vehicle = require("./VehicleModel")

const Schema = mongoose.Schema;
let carSchema = new Schema ({
    doorsNumber:{
        type : Number,
        required : true
    },

});
const Car = Vehicle.discriminator("Car", carSchema)
module.exports = { Car }