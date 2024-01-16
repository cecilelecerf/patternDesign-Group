const express = require('express');
const router = express.Router();
const Motorcycle = require ("../controllers/MotorcycleController")

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
 *             description: Motorcycle Id (unique)
 *         releaseYear:
 *           type: Date
 *           description: Date of the Release motorcycle
 *         salesNumber:
 *           type: Number
 *           description: Number of motorcycles sold
 *         brand:
 *           type: String
 *           description: Brand name
 *         model:
 *           type: String
 *           description: Motorcycle model name
 *         createdAt:
 *           type: Data
 *           description : Date of created
 */

module.exports = (app) => {

/**
 * @swagger
 * /motorcycles:
 *   get:
 *     summary: Create a Motorcycle
 *     tags: [Motorcycle]
 *     responses:
 *       200:
 *         description: Create a Motorcycle.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                  $ref: '#/components/schemas/motorcycles'
 *       500:
 *         description: Some server error
 *         content:
 *           application/json:
 *             example:
 *               message: "Error server."
 *
 */
    app.route("/motorcycles")
        .post(Motorcycle.createVehicle);

        /**
 * @swagger
 * /motorcycles:
 *   get:
 *     summary: Update a Motorcycle
 *     tags: [Motorcycles]
 *     responses:
 *       200:
 *         description: Update a Motorcycle.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                  $ref: '#/components/schemas/motorcycles'
 *       500:
 *         description: Some server error
 *         content:
 *           application/json:
 *             example:
 *               message: "Error server."
 *
 */
    app.route("/motorcycles/:car_id")
    .patch(Motorcycle.updateVehicle);

/**
 * @swagger
 * /motorcycles:
 *   get:
 *     summary: List all of Motorcycles
 *     tags: [Motorcycles]
 *     responses:
 *       200:
 *         description: The list Motorcycle.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                  $ref: '#/components/schemas/motorcycles'
 *       500:
 *         description: Some server error
 *         content:
 *           application/json:
 *             example:
 *               message: "Error server."
 *
 */
    app.route("/motorcycles")
        .get(Motorcycle.listenAllVehicles);

/**
 * @swagger
 * /motorcycle/{car_id}:
 *   get:
 *     summary: One Motorcycle
 *     tags: [Motorcycles]
 *     parameters:
 *         - in: path
 *           name: car_id
 *           required: true
 *           schema:
 *             type: string
 *             description: Motorcycle ID
 *     responses:
 *       200:
 *         description: One Motorcycle.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/motorcycles'
 *       500:
 *         description: Some server error
 *         content:
 *           application/json:
 *             example:
 *               message: "Error server."
 *
 */
    app.route("/motorcycle/:car_id")
        .get(Motorcycle.oneVehicle);


/**
 * @swagger
 * /motorcycle/{car_id}:
 *   delete:
 *     summary: Delete
 *     tags: [Motorcycles]
 *     parameters:
 *         - in: path
 *           name: car_id
 *           required: true
 *           schema:
 *             type: string
 *           description: Motorcycle ID to retrieve
 *     responses:
 *       204:
 *         description: Delete a motorcycle
 *       500:
 *         description: Some server error
 *         content:
 *           application/json:
 *             example:
 *               message: "Error server."
 *
 */ 


app.route("/motorcycle/:car_id")
    .delete(Motorcycle.deleteAVehicle);
}