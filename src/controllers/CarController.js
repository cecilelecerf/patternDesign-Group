import Car from "../models/CarModel";

exports.listenAllCars = async(_req, res) =>{
    try{
        const groups = await Car.find({})
        res.status(200).json({groups})
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
