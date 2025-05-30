const express = require('express');
const router = express.Router();
const abilityController = require('../controllers/abilityController');

/**
 * @swagger
 * tags:
 *   - name: Abilities
 *     description: API endpoints for retrieving and managing abilities.
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
 *     description: Add a new ability to BatmanDB.
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
 *               description:
 *                 type: string
 *             required:
 *               - name
 *     responses:
 *       201:
 *         description: Ability created successfully.
 *       400:
 *         description: Invalid input.
 */
router.post('/', abilityController.createAbility);

module.exports = router;