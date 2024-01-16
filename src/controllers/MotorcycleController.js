// const Motorcycle =  require("../models/MotorcycleModel");
const VehicleController = require("./VehicleController");
class MotorcycleController extends VehicleController{
    constructor(brand, model, releaseYear, salesNumber) {
        super(brand, model, releaseYear, salesNumber);
    }
};

module.exports = new MotorcycleController();

