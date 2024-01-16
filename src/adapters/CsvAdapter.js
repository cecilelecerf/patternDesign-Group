const DataAdapter = require('./DataAdapter');
const CsvParser = require('../utils/CsvParser');
const Vehicle = require('../models/VehicleModel');

class CsvAdapter {
    constructor(fileName) {
        super();
        this.fileName = fileName;
    }
    
    async readCsv() {
        const csvData = await CsvParser.readCsvFile(this.fileName);
        return this.convertToVehicles(csvData);
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
