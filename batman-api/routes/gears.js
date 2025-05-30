const express = require('express');
const router = express.Router();
const gearsController = require('../controllers/gearsController');

/**
 * @swagger
 * tags:
 *   - name: Gears
 *     description: API endpoints for retrieving and managing gears.
 */

/**
 * @swagger
 * /gears:
 *   get:
 *     summary: Retrieve all gears
 *     description: Fetch a list of all gears in BatmanDB.
 *     tags: [Gears]
 *     responses:
 *       200:
 *         description: Successfully retrieved gears.
 */
router.get('/', gearsController.getAllGears);  // FIX: Changed `getAllGear` to `getAllGears`

/**
 * @swagger
 * /gears/{id}:
 *   get:
 *     summary: Get a gear by ID
 *     description: Fetch details of a specific gear by ID.
 *     tags: [Gears]
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: integer
 *         description: The ID of the gear to retrieve.
 *     responses:
 *       200:
 *         description: Successfully retrieved the gear.
 *       404:
 *         description: Gear not found.
 */
router.get('/:id', gearsController.getGearById);

/**
 * @swagger
 * /gears:
 *   post:
 *     summary: Create a new gear
 *     description: Add a new gear to BatmanDB.
 *     tags: [Gears]
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
 *               description:
 *                 type: string
 *               owner:
 *                 type: string
 *             required:
 *               - name
 *     responses:
 *       201:
 *         description: Gear created successfully.
 *       400:
 *         description: Invalid input.
 */
router.post('/', gearsController.createGear);

module.exports = router;
