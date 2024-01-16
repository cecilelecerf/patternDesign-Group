const mongoose = require("mongoose");

const Schema = mongoose.Schema;
let motorcycleSchema = new Schema ({
    releaseYear: {
        type: Date,
    },
    salesNumber: {
        type: Number,
    },
    brand : {
        type : String,
        required : true
    },
    model:{
        type: String,
        required : true,
    },
    createdAt : {
        type : Date,
        default : Date.now()
    },

});

module.exports = mongoose.model("Motorcycle", motorcycleSchema)