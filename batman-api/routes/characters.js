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
 *         content:
 *           application/json:
 *             example:
 *               - id: 11
 *                 name: "Batman"
 *                 alias: "Bruce Wayne"
 *               - id: 12
 *                 name: "Batgirl"
 *                 alias: "Barbara Gordon"
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
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: The ID of the character to retrieve.
 *     responses:
 *       200:
 *         description: Successfully retrieved the character.
 *         content:
 *           application/json:
 *             example:
 *               id: 11
 *               name: "Batman"
 *               alias: "Bruce Wayne"
 *               base_of_operations: "Batcave"
 *       404:
 *         description: Character not found.
 */
router.get('/:id', characterController.getCharacterById);

/**
 * @swagger
 * /characters/{id}/full-profile:
 *   get:
 *     summary: Get full character profile (multi-table data)
 *     description: Fetch all related data for a specific character, including games, abilities, gear, and missions.
 *     tags: [Characters]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: The ID of the character to retrieve.
 *     responses:
 *       200:
 *         description: Successfully retrieved character profile.
 *         content:
 *           application/json:
 *             example:
 *               id: 11
 *               name: "Batman"
 *               alias: "Bruce Wayne"
 *               base_of_operations: "Batcave"
 *               games:
 *                 - id: 1
 *                   title: "Batman: Arkham Asylum"
 *               abilities:
 *                 - id: 1
 *                   name: "Stealth Takedown"
 *               gears:
 *                 - id: 1
 *                   name: "Batarang"
 *               missions:
 *                 - id: 301
 *                   title: "Save Gotham"
 *       404:
 *         description: Character not found.
 */
router.get('/:id/full-profile', characterController.getCharacterFullProfile);

/**
 * @swagger
 * /characters:
 *   post:
 *     summary: Create a new character
 *     description: Add a new character to BatmanDB.
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
 *               alias:
 *                 type: string
 *               alignment:
 *                 type: string
 *               description:
 *                 type: string
 *             required:
 *               - name
 *     responses:
 *       201:
 *         description: Character created successfully.
 *       400:
 *         description: Invalid input.
 */
router.post('/', characterController.createCharacter);

module.exports = router;
