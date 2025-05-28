const express = require('express');
const router = express.Router();
const gameController = require('../controllers/gameController');

/**
 * @swagger
 * tags:
 *   - name: Games
 *     description: API endpoints for managing games.
 */

/**
 * @swagger
 * /games:
 *   get:
 *     summary: Retrieve all games
 *     description: Fetch a list of all games in BatmanDB.
 *     tags: [Games]
 *     responses:
 *       200:
 *         description: Successfully retrieved games.
 */
router.get('/', gameController.getAllGames);

/**
 * @swagger
 * /games/{id}:
 *   get:
 *     summary: Get a game by ID
 *     description: Fetch details of a specific game by ID.
 *     tags: [Games]
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: integer
 *         description: The ID of the game to retrieve.
 *     responses:
 *       200:
 *         description: Successfully retrieved the game.
 *       404:
 *         description: Game not found.
 */
router.get('/:id', gameController.getGameById);

/**
 * @swagger
 * /games:
 *   post:
 *     summary: Create a new game
 *     description: Adds a new game to BatmanDB.
 *     tags: [Games]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *                 example: Arkham Asylum
 *               release_year:
 *                 type: integer
 *                 example: 2009
 *               developer:
 *                 type: string
 *                 example: Rocksteady Studios
 *               genre:
 *                 type: string
 *                 example: Action-Adventure
 *     responses:
 *       201:
 *         description: Game created successfully.
 */
router.post('/', gameController.createGame);

/**
 * @swagger
 * /games/{id}:
 *   put:
 *     summary: Update a game by ID
 *     description: Modify details of a specific game.
 *     tags: [Games]
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: integer
 *         description: The ID of the game to update.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *               release_year:
 *                 type: integer
 *               developer:
 *                 type: string
 *               genre:
 *                 type: string
 *     responses:
 *       200:
 *         description: Game updated successfully.
 */
router.put('/:id', gameController.updateGame);

/**
 * @swagger
 * /games/{id}:
 *   delete:
 *     summary: Delete a game by ID
 *     description: Removes a game from BatmanDB.
 *     tags: [Games]
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: integer
 *         description: The ID of the game to delete.
 *     responses:
 *       200:
 *         description: Game deleted successfully.
 *       404:
 *         description: Game not found.
 */
router.delete('/:id', gameController.deleteGame);

module.exports = router;