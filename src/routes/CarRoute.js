
import carController from "../controllers/CarController"
/**
 * @swagger
 * components:
 *   schemas:
 *     Cars:
 *       type: object
 *       required:
 *         - brand
 *         - model
 *         - doorsNumber
 *         - createAt
 *         - _id
 *       properties:
 *         _id:
 *             type: string
 *             description: Car Id (unique)
 *         releaseYear:
 *           type: Date
 *           description: Date of the Release car
 *         salesNumber:
 *           type: Number
 *           description: Number of cars sold
 *         brand:
 *           type: String
 *           description: Brand name
 *         model:
 *           type: String
 *           description:Car model name
 *         doorsNumber:
 *           type: String
 *           description: Number of doors in the car
 *         createdAt:
 *           type: Data
 *           description : Date of created
 */

module.exports = (app) => {

/**
 * @swagger
 * /cars:
 *   get:
 *     summary: List all of Cars
 *     tags: [Cars]
 *     responses:
 *       200:
 *         description: The list Car.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                  $ref: '#/components/schemas/Cars'
 *       500:
 *         description: Some server error
 *         content:
 *           application/json:
 *             example:
 *               message: "Error server."
 *
 */
    app.route("/cars")
        .get(carController.listenAllCars);

/**
 * @swagger
 * /car/{car_id}:
 *   get:
 *     summary: One Car
 *     tags: [Cars]
 *     parameters:
 *         - in: path
 *           name: car_id
 *           required: true
 *           schema:
 *             type: string
 *             description: Car ID
 *     responses:
 *       200:
 *         description: One Car.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Cars'
 *       500:
 *         description: Some server error
 *         content:
 *           application/json:
 *             example:
 *               message: "Error server."
 *
 */
    app.route("/car/:car_id")
        .get(carController.oneCar);

}