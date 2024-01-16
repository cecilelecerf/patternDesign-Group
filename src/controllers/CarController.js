const Car =  require("../models/CarModel");
const VehicleController = require("./VehicleController");
class CarController extends VehicleController {
    constructor(brand, model, releaseYear, salesNumber, doors) {
        super(brand, model, releaseYear, salesNumber);
        this.doors = doors;
    }

    // Method to return the number of doors
    numberOfDoors = async (req,res) => {
        try{
            const car = await Car.findById(req.params.car_id);
            if(!car){
                res.status(404).json({message: "Car not found"})
                res.end()
            }
            res.status(200).json(`The number of doors in this car is : ${car.doorsNumber}`)
        } catch(error){
            res.status(500);
            res.json({message: "Server error."});
        }
    }
};

module.exports = new CarController();

