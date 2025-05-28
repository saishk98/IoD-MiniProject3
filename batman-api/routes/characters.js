const express = require('express');
const router = express.Router();
const characterController = require('../controllers/characterController');

/**
 * @swagger
 * tags:
 *   - name: Characters
 *     description: API endpoints for managing characters.
 */

/**
 * @swagger
 * /characters:
 *   get:
 *     summary: Retrieve all characters
 *     description: Fetch a list of all characters in BatmanDB.
 *     tags: [Characters]
 *     responses:
 *       200:
 *         description: Successfully retrieved characters.
 */
router.get('/', characterController.getAllCharacters);

/**
 * @swagger
 * /characters/{id}:
 *   get:
 *     summary: Get a character by ID
 *     description: Fetch details of a specific character by ID.
 *     tags: [Characters]
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: integer
 *         description: The ID of the character to retrieve.
 *     responses:
 *       200:
 *         description: Successfully retrieved the character.
 *       404:
 *         description: Character not found.
 */
router.get('/:id', characterController.getCharacterById);

/**
 * @swagger
 * /characters:
 *   post:
 *     summary: Create a new character
 *     description: Adds a new character to BatmanDB.
 *     tags: [Characters]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 example: Batman
 *               alias:
 *                 type: string
 *                 example: Bruce Wayne
 *               role:
 *                 type: string
 *                 example: Hero
 *               base_of_operations:
 *                 type: string
 *                 example: Batcave
 *     responses:
 *       201:
 *         description: Character created successfully.
 */
router.post('/', characterController.createCharacter);

/**
 * @swagger
 * /characters/{id}:
 *   put:
 *     summary: Update a character by ID
 *     description: Modify details of a specific character.
 *     tags: [Characters]
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: integer
 *         description: The ID of the character to update.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               alias:
 *                 type: string
 *               role:
 *                 type: string
 *               base_of_operations:
 *                 type: string
 *     responses:
 *       200:
 *         description: Character updated successfully.
 */
router.put('/:id', characterController.updateCharacter);

/**
 * @swagger
 * /characters/{id}:
 *   delete:
 *     summary: Delete a character by ID
 *     description: Removes a character from BatmanDB.
 *     tags: [Characters]
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: integer
 *         description: The ID of the character to delete.
 *     responses:
 *       200:
 *         description: Character deleted successfully.
 *       404:
 *         description: Character not found.
 */
router.delete('/:id', characterController.deleteCharacter);

module.exports = router;