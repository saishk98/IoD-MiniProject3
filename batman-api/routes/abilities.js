const express = require('express');
const router = express.Router();
const abilityController = require('../controllers/abilityController');

/**
 * @swagger
 * tags:
 *   - name: Abilities
 *     description: API endpoints for managing abilities.
 */

/**
 * @swagger
 * /abilities:
 *   get:
 *     summary: Retrieve all abilities
 *     description: Fetch a list of all abilities in BatmanDB.
 *     tags: [Abilities]
 *     responses:
 *       200:
 *         description: Successfully retrieved abilities.
 */
router.get('/', abilityController.getAllAbilities);

/**
 * @swagger
 * /abilities/{id}:
 *   get:
 *     summary: Get an ability by ID
 *     description: Fetch details of a specific ability by ID.
 *     tags: [Abilities]
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: integer
 *         description: The ID of the ability to retrieve.
 *     responses:
 *       200:
 *         description: Successfully retrieved the ability.
 *       404:
 *         description: Ability not found.
 */
router.get('/:id', abilityController.getAbilityById);

/**
 * @swagger
 * /abilities:
 *   post:
 *     summary: Create a new ability
 *     description: Adds a new ability to BatmanDB.
 *     tags: [Abilities]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 example: Martial Arts
 *               description:
 *                 type: string
 *                 example: Mastery of various fighting styles.
 *     responses:
 *       201:
 *         description: Ability created successfully.
 */
router.post('/', abilityController.createAbility);

/**
 * @swagger
 * /abilities/{id}:
 *   put:
 *     summary: Update an ability by ID
 *     description: Modify details of a specific ability.
 *     tags: [Abilities]
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: integer
 *         description: The ID of the ability to update.
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
 *     responses:
 *       200:
 *         description: Ability updated successfully.
 */
router.put('/:id', abilityController.updateAbility);

/**
 * @swagger
 * /abilities/{id}:
 *   delete:
 *     summary: Delete an ability by ID
 *     description: Removes an ability from BatmanDB.
 *     tags: [Abilities]
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: integer
 *         description: The ID of the ability to delete.
 *     responses:
 *       200:
 *         description: Ability deleted successfully.
 *       404:
 *         description: Ability not found.
 */
router.delete('/:id', abilityController.deleteAbility);

module.exports = router;