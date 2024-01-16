const Motorcycle =  require("../models/MotorcycleModel");
class MotorcycleController {

    createMotorcycle = async (req, res) => {
        console.log(req.body, res.body);
        res.status(200).json('ok');
    };
    
    updateMotorcycle = async (req, res) => {
        const motorcycleId = req.params.motorcycle_id;
        try {
            const motorcycle = await Motorcycle.findByIdAndUpdate(motorcycleId, { $set: req.body }, { new: true });
            if (!motorcycle) {
                return res.status(404).json({ message: 'Motorcycle not found' });
            }
            res.status(200).json({ message: `Motorcycle updated with id: ${motorcycle.id}`, motorcycle });
        } catch (error) {
            res.status(500).json({ message: 'Error updating the motorcycle' });
        }
    };
    listenAllMotorcycles = async(_req, res) =>{
        try{
            const motorcycles = await Motorcycle.find({})
            res.status(200).json({motorcycles})
        } catch(error){
            console.log(error);
            res.status(500).json({message: "Error server."})
        }
    }
    
    oneMotorcycle = async(req, res)=>{
        try{
            const motorcycle = await Motorcycle.findById(req.params.motorcycle_id);
            if(!motorcycle){
                res.status(404).json({message: "Motorcycle not found"})
                res.end()
            }
            res.status(200).json(motorcycle)
        }catch(error){
            console.log(error);
            res.status(500).json({message: "Error server."})
        }
    }
    // Controller method to delete a motorcycle
    deleteAMotorcycle = async (req,res) => {
        try {
            // Deleting a motorcycle based on the provided motorcycle ID
            await Motorcycle.findByIdAndDelete(req.params.motorcycle_id);
            res.status(202);
            res.json({message: "Motorcycle deleted"});
        } catch (error) {
            res.status(500);
            res.json({message: "Server error."});
        }
    };

};

module.exports = new MotorcycleController();

