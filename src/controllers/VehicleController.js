const Vehicle = require("../models/VehicleModel");
const LoggerObserver = require("../services/observer/loggerObserver")

class VehicleController {
    constructor(brand, model, releaseYear = null, salesNumber = null){
        this.brand = brand,
        this.model = model,
        this.releaseYear = releaseYear,
        this.salesNumber = salesNumber

        // Create an instance of LoggerObserver
        this.loggerObserver = new LoggerObserver();
    }
     
    createVehicle = async (req, res) => {
        try {
            // const vehicleData = req.body;
            const newVehicle = new Vehicle({...req.body});
            await newVehicle.save();
    
            if (res && res.status) {
                res.status(200).json('ok');

                // Notify the logger observer with the response message
                this.loggerObserver.update('Vehicle created successfully');
            }
        } catch (error) {
            // if (res && res.status) {
                console.log
                res.status(500).json("Error creating the vehicle");

                // Notify the logger observer with the error message
                this.loggerObserver.update('Error creating the vehicle');
            // }

        } 
    };
    
    
    updateVehicle = async (req, res) => {
        try {
            const vehicle = await Vehicle.findByIdAndUpdate(req.params.vehicle_id, { $set: req.body }, { new: true });
            if (!vehicle) {
                this.loggerObserver.update('Vehicle not found');
                return res.status(404).json({ message: 'Vehicle not found' });
                
            }
            res.status(200).json({ message: `Vehicle updated with id: ${vehicle.id}`, vehicle });
            this.loggerObserver.update(`Vehicle updated with id: ${vehicle.id}`, vehicle);

        } catch (error) {
            res.status(500).json({ message: 'Error updating the vehicle' });
            this.loggerObserver.update('Error updating the vehicle');

        }
    };
    listenAllVehicles = async(_req, res) =>{
        try{
            const vehicles = await Vehicle.find({})
            res.status(200).json({vehicles})
        } catch(error){
            console.log(error);
            res.status(500).json({message: "Error server."})
            this.loggerObserver.update('Error server.');

        }
    }
    
    oneVehicle = async(req, res)=>{
        try{
            const vehicle = await Vehicle.findById(req.params.vehicle_id);
            if(!vehicle){
                res.status(404).json({message: "Vehicle not found"})
                this.loggerObserver.update('Vehicle not found.');

                res.end()
            }
            res.status(200).json(vehicle)
        }catch(error){
            console.log(error);
            res.status(500).json({message: "Error server."})
            this.loggerObserver.update('Error server.');

        }
    }
    // Controller method to delete a vehicle
    deleteAVehicle = async (req,res) => {
        try {
            // Deleting a vehicle based on the provided vehicle ID
            await Vehicle.findByIdAndDelete(req.params.vehicle_id);
            res.status(202);
            res.json({message: "Vehicle deleted"});
            this.loggerObserver.update('Vehicle deleted.');

        } catch (error) {
            res.status(500);
            res.json({message: "Server error."});
            this.loggerObserver.update('Server error.');

        }
    };
};

module.exports = VehicleController;



