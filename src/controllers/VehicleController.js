const Car = require('../models/CarModel');
const Motorcycle = require('../models/MotorcycleModel');

exports.createVehicle = async (req, res) => {
    try {
        let vehicle;
        const { type, ...vehicleData } = req.body;

        if (type ==='Car') {
            vehicle = new Car(vehicleData);
        } else if (type === 'Motorcycle') {
            vehicle = new Motorcycle(vehicleData);
        } else {
            throw new Error('Invalid vehicle type');
        }
    const savedVehicle = await vehicle.save();
    res.status(201).json({ message: `Vehicle created with id: ${savedVehicle.id}` });
} catch (error) {
    res.status(500).json({ message: error.message || 'Error creating the vehicle' });
}

};

exports.getAllVehicles = async (req, res) => {
    try {
        const vehicles = await Vehicle.find();
        res.status(200).json(vehicles);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.getVehicleById = async (req, res) => {
    try {
        const vehicle = await Vehicle.findById(req.params.id);
        if (!vehicle) {
            return res.status(404).json({ message: 'Vehicle not found' });
        }
        res.status(200).json(vehicle);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.updateVehicle = async (req, res) => {
    try {
        const updatedVehicle = await Vehicle.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedVehicle) {
            return res.status(404).json({ message: 'Vehicle not found' });
        }
        res.status(200).json(updatedVehicle);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


exports.deleteVehicle = async (req, res) => {
    try {
        const vehicle = await Vehicle.findByIdAndDelete(req.params.id);
        if (!vehicle) {
            return res.status(404).json({ message: 'Vehicle not found' });
        }
        res.status(200).json({ message: 'Vehicle deleted' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


