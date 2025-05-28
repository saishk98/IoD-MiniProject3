const express = require('express');
const router = express.Router();
const gearsController = require('../controllers/gearsController');

/**
 * @swagger
 * tags:
 *   - name: Gears
 *     description: API endpoints for managing gears.
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
router.get('/', gearsController.getAllGear);

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
 *     description: Adds a new gear to BatmanDB.
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
 *                 example: Batarang
 *               type:
 *                 type: string
 *                 example: Weapon
 *               description:
 *                 type: string
 *                 example: A bat-shaped throwing weapon.
 *               owner:
 *                 type: string
 *                 example: Batman
 *     responses:
 *       201:
 *         description: Gear created successfully.
 */
router.post('/', gearsController.createGear);

/**
 * @swagger
 * /gears/{id}:
 *   put:
 *     summary: Update a gear by ID
 *     description: Modify details of a specific gear.
 *     tags: [Gears]
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: integer
 *         description: The ID of the gear to update.
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
 *     responses:
 *       200:
 *         description: Gear updated successfully.
 */
router.put('/:id', gearsController.updateGear);

/**
 * @swagger
 * /gears/{id}:
 *   delete:
 *     summary: Delete a gear by ID
 *     description: Removes a gear from BatmanDB.
 *     tags: [Gears]
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: integer
 *         description: The ID of the gear to delete.
 *     responses:
 *       200:
 *         description: Gear deleted successfully.
 *       404:
 *         description: Gear not found.
 */
router.delete('/:id', gearsController.deleteGear);

module.exports = router;
