// const Motorcycle =  require("../models/MotorcycleModel");
const VehicleController = require("./VehicleController");
class MotorcycleController extends VehicleController{
    constructor(brand, model, releaseYear, salesNumber, hasASideCar) {
        super(brand, model, releaseYear, salesNumber);
        this.hasASideCar = hasASideCar;
    }
};

module.exports = new MotorcycleController();

