const VehicleController = require('../controllers/VehicleController');
const vehicleController = new VehicleController();
module.exports= (app) =>{
    app.route("/upload-csv").post(vehicleController.uploadCsvData);
}
