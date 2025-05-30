const express = require('express');
const router = express.Router();
const gameController = require('../controllers/gameController');

/**
 * @swagger
 * tags:
 *   - name: Games
 *     description: API endpoints for retrieving games.
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
 *     description: Add a new game to BatmanDB.
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
 *               releaseDate:
 *                 type: string
 *                 format: date
 *               description:
 *                 type: string
 *             required:
 *               - title
 *     responses:
 *       201:
 *         description: Game created successfully.
 *       400:
 *         description: Invalid input.
 */
router.post('/', gameController.createGame);

module.exports = router;
