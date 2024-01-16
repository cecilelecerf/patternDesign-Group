const mongoose = require("mongoose");

const Schema = mongoose.Schema;
let motorcycleSchema = new Schema ({

    hasSideCar:{
        type : Boolean,
        required : true,
        default : false
    },
});

const Motorcycle = Vehicle.discriminator("Motorcycle", motorcycleSchema)
module.exports = { Motorcycle }
