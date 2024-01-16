const Vehicle = require("../models/VehicleModel")
class VehicleController {
    constructor(brand, model, releaseYear = null, salesNumber = null){
        this.brand = brand,
        this.model = model,
        this.releaseYear = releaseYear,
        this.salesNumber = salesNumber
    }
     
    createVehicle = async (req, res) => {
        console.log(req.body, res.body);
        res.status(200).json('ok');
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

    uploadCsvData = async (req, res) => {
        try {
            const adapter = new CsvAdapter('../data/data.csv');
            const csvData = await adapter.readCsv();
            const vehicles = await adapter.convertToVehicles(csvData);

            for (const vehicle of vehicles) {
                await vehicle.save();
            }

            res.status(200).json({ message: 'Véhicules importés avec succès' });
        } catch (error) {
            res.status(500).json({ message: 'Erreur lors de l\'importation des données CSV', error: error.message });
        }
    }
};

module.exports = VehicleController;



