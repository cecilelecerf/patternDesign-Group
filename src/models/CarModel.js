const mongoose = require("mongoose");

const Schema = mongoose.Schema;
let carSchema = new Schema ({
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
    doorsNumber:{
        type : Number,
        required : true
    },
    createdAt : {
        type : Date,
        default : Date.now()
    },

});

module.exports = mongoose.model("Car", carSchema)