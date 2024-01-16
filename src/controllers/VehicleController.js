const Vehicle = require("../models/VehicleModel");
const CsvAdapter = require('../adapters/CsvAdapter');

class VehicleController {
    constructor(brand, model, releaseYear = null, salesNumber = null){
        this.brand = brand,
        this.model = model,
        this.releaseYear = releaseYear,
        this.salesNumber = salesNumber
    }
     
    createVehicle = async (req, res) => {
        try {
            const vehicleData = req.body;
            const newVehicle = new Vehicle(vehicleData);
            await newVehicle.save();
    
            if (res && res.status) {
                res.status(200).json('ok');
            }
        } catch (error) {
            if (res && res.status) {
                res.status(500).json({ message: error.message });
            }
        }
    };
    
    
    updateVehicle = async (req, res) => {
        try {
            const vehicle = await Vehicle.findByIdAndUpdate(req.params.vehicle_id, { $set: req.body }, { new: true });
            if (!vehicle) {
                return res.status(404).json({ message: 'Vehicle not found' });
            }
            res.status(200).json({ message: `Vehicle updated with id: ${vehicle.id}`, vehicle });
        } catch (error) {
            res.status(500).json({ message: 'Error updating the vehicle' });
        }
    };
    listenAllVehicles = async(_req, res) =>{
        try{
            const vehicles = await Vehicle.find({})
            res.status(200).json({vehicles})
        } catch(error){
            console.log(error);
            res.status(500).json({message: "Error server."})
        }
    }
    
    oneVehicle = async(req, res)=>{
        try{
            const vehicle = await Vehicle.findById(req.params.vehicle_id);
            if(!vehicle){
                res.status(404).json({message: "Vehicle not found"})
                res.end()
            }
            res.status(200).json(vehicle)
        }catch(error){
            console.log(error);
            res.status(500).json({message: "Error server."})
        }
    }
    // Controller method to delete a vehicle
    deleteAVehicle = async (req,res) => {
        try {
            // Deleting a vehicle based on the provided vehicle ID
            await Vehicle.findByIdAndDelete(req.params.vehicle_id);
            res.status(202);
            res.json({message: "Vehicle deleted"});
        } catch (error) {
            res.status(500);
            res.json({message: "Server error."});
        }
    };
};

module.exports = VehicleController;



