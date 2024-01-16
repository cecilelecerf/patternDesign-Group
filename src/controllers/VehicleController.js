class VehicleController {

    createCar = async (req, res) => {
        console.log(req.body, res.body);
        res.status(200).json('ok');
    };
    
    updateCar = async (req, res) => {
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
    listenAllVehicles = async(_req, res) =>{
        try{
            const vehicles = await Car.find({})
            res.status(200).json({cars})
        } catch(error){
            console.log(error);
            res.status(500).json({message: "Error server."})
        }
    }
    
    oneCar = async(req, res)=>{
        try{
            const car = await Car.findById(req.params.car_id);
            if(!car){
                res.status(404).json({message: "Car not found"})
                res.end()
            }
            res.status(200).json(car)
        }catch(error){
            console.log(error);
            res.status(500).json({message: "Error server."})
        }
    }
    // Controller method to delete a car
    deleteACar = async (req,res) => {
        try {
            // Deleting a car based on the provided car ID
            await Car.findByIdAndDelete(req.params.car_id);
            res.status(202);
            res.json({message: "Car deleted"});
        } catch (error) {
            res.status(500);
            res.json({message: "Server error."});
        }
    };
};

module.exports = new CarController();

