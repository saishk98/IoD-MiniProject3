const express = require('express');
const router = express.Router();
const locationController = require('../controllers/locationController');

/**
 * @swagger
 * tags:
 *   - name: Locations
 *     description: API endpoints for managing locations.
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
 *     description: Adds a new location to BatmanDB.
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
 *                 example: Gotham City
 *               description:
 *                 type: string
 *                 example: The primary setting for Batman stories.
 *               type:
 *                 type: string
 *                 example: City
 *     responses:
 *       201:
 *         description: Location created successfully.
 */
router.post('/', locationController.createLocation);

/**
 * @swagger
 * /locations/{id}:
 *   put:
 *     summary: Update a location by ID
 *     description: Modify details of a specific location.
 *     tags: [Locations]
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: integer
 *         description: The ID of the location to update.
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
 *     responses:
 *       200:
 *         description: Location updated successfully.
 */
router.put('/:id', locationController.updateLocation);

/**
 * @swagger
 * /locations/{id}:
 *   delete:
 *     summary: Delete a location by ID
 *     description: Removes a location from BatmanDB.
 *     tags: [Locations]
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: integer
 *         description: The ID of the location to delete.
 *     responses:
 *       200:
 *         description: Location deleted successfully.
 *       404:
 *         description: Location not found.
 */
router.delete('/:id', locationController.deleteLocation);

module.exports = router;
