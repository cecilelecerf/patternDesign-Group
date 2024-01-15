import Car from "../models/CarModel";

exports.createCar = async (req, res) => {
    try {
        const newCar = new Car({ ...req.body });
        try {
            const car = await newCar.save();
            res.status(201).json({ message: `Car created with id: ${car.id}` });
        } catch (error) {
            res.status(500).json({ message: 'Error saving the car' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Car not created' });
    }
};

exports.updateCar = async (req, res) => {
    const carId = req.params.car_id;
    try {
        const car = await Car.findByIdAndUpdate(carId, { $set: req.body }, { new: true });
        if (!car) {
            return res.status(404).json({ message: 'Car not found' });
        }
        res.status(200).json({ message: `Car updated with id: ${car.id}`, car });
    } catch (error) {
        res.status(500).json({ message: 'Error updating the car' });
    }
};
