const express = require('express');
const router = express.Router();
const vehicleController = require('../controllers/vehicleController');

/**
 * @swagger
 * tags:
 *   - name: Vehicles
 *     description: API endpoints for retrieving vehicles.
 */

/**
 * @swagger
 * /vehicles:
 *   get:
 *     summary: Retrieve all vehicles
 *     description: Fetch a list of all vehicles in BatmanDB.
 *     tags: [Vehicles]
 *     responses:
 *       200:
 *         description: Successfully retrieved vehicles.
 */
router.get('/', vehicleController.getAllVehicles);

/**
 * @swagger
 * /vehicles/{id}:
 *   get:
 *     summary: Get a vehicle by ID
 *     description: Fetch details of a specific vehicle by ID.
 *     tags: [Vehicles]
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: integer
 *         description: The ID of the vehicle to retrieve.
 *     responses:
 *       200:
 *         description: Successfully retrieved the vehicle.
 *       404:
 *         description: Vehicle not found.
 */
router.get('/:id', vehicleController.getVehicleById);

/**
 * @swagger
 * /vehicles:
 *   post:
 *     summary: Create a new vehicle
 *     description: Add a new vehicle to BatmanDB.
 *     tags: [Vehicles]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               type:
 *                 type: string
 *               manufacturer:
 *                 type: string
 *               features:
 *                 type: string
 *             required:
 *               - name
 *     responses:
 *       201:
 *         description: Vehicle created successfully.
 *       400:
 *         description: Invalid input.
 */
router.post('/', vehicleController.createVehicle);

module.exports = router;
