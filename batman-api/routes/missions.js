const express = require('express');
const router = express.Router();
const missionController = require('../controllers/missionController');

/**
 * @swagger
 * tags:
 *   - name: Missions
 *     description: API endpoints for retrieving and managing missions.
 */

/**
 * @swagger
 * /missions:
 *   get:
 *     summary: Retrieve all missions
 *     description: Fetch a list of all missions in BatmanDB.
 *     tags: [Missions]
 *     responses:
 *       200:
 *         description: Successfully retrieved missions.
 */
router.get('/', missionController.getAllMissions);

/**
 * @swagger
 * /missions/{id}:
 *   get:
 *     summary: Get a mission by ID
 *     description: Fetch details of a specific mission by ID.
 *     tags: [Missions]
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: integer
 *         description: The ID of the mission to retrieve.
 *     responses:
 *       200:
 *         description: Successfully retrieved the mission.
 *       404:
 *         description: Mission not found.
 */
router.get('/:id', missionController.getMissionById);

/**
 * @swagger
 * /missions:
 *   post:
 *     summary: Create a new mission
 *     description: Add a new mission to BatmanDB.
 *     tags: [Missions]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *               description:
 *                 type: string
 *               status:
 *                 type: string
 *               assigned_to:
 *                 type: string
 *             required:
 *               - title
 *     responses:
 *       201:
 *         description: Mission created successfully.
 *       400:
 *         description: Invalid input.
 */
router.post('/', missionController.createMission);

module.exports = router;
