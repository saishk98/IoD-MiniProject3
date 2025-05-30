const express = require('express');
const router = express.Router();
const locationController = require('../controllers/locationController');

/**
 * @swagger
 * tags:
 *   - name: Locations
 *     description: API endpoints for retrieving locations.
 */

/**
 * @swagger
 * /locations:
 *   get:
 *     summary: Retrieve all locations
 *     description: Fetch a list of all locations in BatmanDB.
 *     tags: [Locations]
 *     responses:
 *       200:
 *         description: Successfully retrieved locations.
 */
router.get('/', locationController.getAllLocations);

/**
 * @swagger
 * /locations/{id}:
 *   get:
 *     summary: Get a location by ID
 *     description: Fetch details of a specific location by ID.
 *     tags: [Locations]
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: integer
 *         description: The ID of the location to retrieve.
 *     responses:
 *       200:
 *         description: Successfully retrieved the location.
 *       404:
 *         description: Location not found.
 */
router.get('/:id', locationController.getLocationById);

/**
 * @swagger
 * /locations:
 *   post:
 *     summary: Create a new location
 *     description: Add a new location to BatmanDB.
 *     tags: [Locations]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               description:
 *                 type: string
 *               type:
 *                 type: string
 *             required:
 *               - name
 *     responses:
 *       201:
 *         description: Location created successfully.
 *       400:
 *         description: Invalid input.
 */
router.post('/', locationController.createLocation);

module.exports = router;
