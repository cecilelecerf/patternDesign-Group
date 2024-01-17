const express = require('express');
const router = express.Router();
const Car = require ("../controllers/CarController")

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
 *           description: Car model name
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
 *   post:
 *     summary: Create a car
 *     tags: [Cars]
 *     parameters:
 *         - in: path
 *           name: car_id
 *           required: true
 *           schema:
 *             type: string
 *           description: Create a car
 *     responses:
 *       204:
 *         description: Create a car
 *       500:
 *         description: Some server error
 *         content:
 *           application/json:
 *             example:
 *               message: "Error server."
 *
 */ 

    app.route("/cars")
        .post(Car.createVehicle);

        
/**
 * @swagger
 * /cars/{car_id}:
 *   patch:
 *     summary: Update a car
 *     tags: [Cars]
 *     parameters:
 *         - in: path
 *           name: car_id
 *           required: true
 *           schema:
 *             type: string
 *           description: Update a car
 *     responses:
 *       204:
 *         description: Update a car
 *       500:
 *         description: Some server error
 *         content:
 *           application/json:
 *             example:
 *               message: "Error server."
 *
 */ 
    app.route("/cars/:car_id")
    .patch(Car.updateVehicle);

/**
 * @swagger
 * /cars:
 *   get:
 *     summary: Get all cars
 *     tags: [Cars]
 *     parameters:
 *         - in: path
 *           name: car_id
 *           required: true
 *           schema:
 *             type: string
 *           description: Get all cars
 *     responses:
 *       204:
 *         description: Get all cars
 *       500:
 *         description: Some server error
 *         content:
 *           application/json:
 *             example:
 *               message: "Error server."
 *
 */ 
    app.route("/cars")
        .get(Car.listenAllVehicles);

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
    app.route("/cars/:car_id")
        .get(Car.oneVehicle);


/**
 * @swagger
 * /car/{car_id}:
 *   delete:
 *     summary: Delete
 *     tags: [Cars]
 *     parameters:
 *         - in: path
 *           name: car_id
 *           required: true
 *           schema:
 *             type: string
 *           description: Car ID to retrieve
 *     responses:
 *       204:
 *         description: Delete a car
 *       500:
 *         description: Some server error
 *         content:
 *           application/json:
 *             example:
 *               message: "Error server."
 *
 */ 


app.route("/cars/:car_id")
    .delete(Car.deleteAVehicle);
}