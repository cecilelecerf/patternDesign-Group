const fs = require('fs');
const parse = require('csv-parse');

class CsvParser {
    static async readCsvFile(filePath) {
        const results = [];
        const parser = fs.createReadStream(filePath)
            .pipe(parse({
                columns: true, 
                trim: true, 
            }));

        for await (const record of parser) {
            results.push(record);
        }

        return results;
    }
}

module.exports = CsvParser;
