const CsvParser = require('../utils/CsvParser');
const Vehicle = require('../models/VehicleModel');

class CsvAdapter {
    constructor(fileName) {
        this.fileName = fileName;
    }
    
    async readCsv() {
        try{
            const csvData = await CsvParser.readCsvFile(this.fileName);
            return this.convertToVehicles(csvData);
        }catch(error){
            console.log(error)
        }
    }
    
    convertToVehicles(csvData) {
        return csvData.map(data => new Vehicle({
            brand: data.brand,
            model: data.model,
            releaseYear: data.releaseYear,
            salesNumber: data.salesNumber,
        }));
    }
}

module.exports = CsvAdapter;   
