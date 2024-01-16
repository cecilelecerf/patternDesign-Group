const CsvParser = require('../utils/CsvParser');
const Vehicle = require('../models/VehicleModel');

class CsvAdapter {
    constructor(fileName) {
        this.fileName = fileName;
    }
    
    async importCsvToVehicles() {
        try {
            const csvData = await CsvParser.readCsvFile(this.fileName);
            const vehicles = csvData.map(data => new Vehicle({
                brand: data.brand,
                model: data.model,
                releaseYear: data.releaseYear,
                salesNumber: data.salesNumber,
            }));

            for (const vehicle of vehicles) {
                await vehicle.save();
            }
            return { success: true, message: 'Véhicules importés avec succès' };
        } catch (error) {
            return { success: false, message: 'Erreur lors de l\'importation', error: error.message };
        }
    }
}

module.exports = CsvAdapter;
