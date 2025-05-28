const express = require('express');
const router = express.Router();
const vehicleController = require('../controllers/vehicleController');

/**
 * @swagger
 * tags:
 *   - name: Vehicles
 *     description: API endpoints for managing vehicles.
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
 *     description: Adds a new vehicle to BatmanDB.
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
 *                 example: Batmobile
 *               type:
 *                 type: string
 *                 example: Car
 *               manufacturer:
 *                 type: string
 *                 example: Wayne Enterprises
 *               features:
 *                 type: string
 *                 example: Armor, Jet Engine
 *     responses:
 *       201:
 *         description: Vehicle created successfully.
 */
router.post('/', vehicleController.createVehicle);

/**
 * @swagger
 * /vehicles/{id}:
 *   put:
 *     summary: Update a vehicle by ID
 *     description: Modify details of a specific vehicle.
 *     tags: [Vehicles]
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: integer
 *         description: The ID of the vehicle to update.
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
 *     responses:
 *       200:
 *         description: Vehicle updated successfully.
 */
router.put('/:id', vehicleController.updateVehicle);

/**
 * @swagger
 * /vehicles/{id}:
 *   delete:
 *     summary: Delete a vehicle by ID
 *     description: Removes a vehicle from BatmanDB.
 *     tags: [Vehicles]
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: integer
 *         description: The ID of the vehicle to delete.
 *     responses:
 *       200:
 *         description: Vehicle deleted successfully.
 *       404:
 *         description: Vehicle not found.
 */
router.delete('/:id', vehicleController.deleteVehicle);

module.exports = router;
