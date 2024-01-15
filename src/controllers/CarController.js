import Car from "../models/CarModel";

exports.listenAllCars = async(_req, res) =>{
    try{
        const cars = await Car.find({})
        res.status(200).json({cars})
    } catch(error){
        console.log(error);
        res.status(500).json({message: "Error server."})
    }
}
exports.oneCar = async(req, res)=>{
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
// Controller function to delete a car
exports.deleteACar = async (req,res) => {
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
