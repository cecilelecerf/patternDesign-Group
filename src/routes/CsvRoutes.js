const CsvAdapter = require('../adapters/CsvAdapter');

/**
 * @swagger
 * components:
 *   schemas:
 *     Motorcycles:
 *       type: object
 *       required:
 *         - brand
 *         - model
 *         - createAt
 *         - _id
 *       properties:
 *         _id:
 *             type: string
 *             description: Vehicle id 
 *         releaseYear:
 *           type: Date
 *           description: Date of the Release vehicle
 *         salesNumber:
 *           type: Number
 *           description: Number of vehicle sold
 *         brand:
 *           type: String
 *           description: Brand name
 *         model:
 *           type: String
 *           description: Vehicle model name
 *         createdAt:
 *           type: Data
 *           description : Date of creation
 */


module.exports = (app) => {
    /**
 * @swagger
 * /upload-csv:
 *   get:
 *     summary: Create a vehicle from csv file
 *     tags: [Car]
 *     responses:
 *       200:
 *         description: Create a vehicle from csv file.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                  $ref: '#/components/schemas/Vehicles'
 *       500:
 *         description: Some server error
 *         content:
 *           application/json:
 *             example:
 *               message: "Error server."
 *
 */
    app.route("/upload-csv").post(async (req, res) => {
        const adapter = new CsvAdapter('../data/data.csv');
        const result = await adapter.importCsvToVehicles();

        if (result.success) {
            res.status(200).json({ message: result.message });
        } else {
            res.status(500).json({ message: result.message, error: result.error });
        }
    });
};
