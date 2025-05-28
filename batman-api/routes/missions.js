const express = require('express');
const router = express.Router();
const missionController = require('../controllers/missionController');

/**
 * @swagger
 * tags:
 *   - name: Missions
 *     description: API endpoints for managing missions.
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
 *     description: Adds a new mission to BatmanDB.
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
 *                 example: Stop Joker's Heist
 *               description:
 *                 type: string
 *                 example: Prevent Joker from robbing Gotham Bank.
 *               status:
 *                 type: string
 *                 example: In Progress
 *               assigned_to:
 *                 type: string
 *                 example: Batman
 *     responses:
 *       201:
 *         description: Mission created successfully.
 */
router.post('/', missionController.createMission);

/**
 * @swagger
 * /missions/{id}:
 *   put:
 *     summary: Update a mission by ID
 *     description: Modify details of a specific mission.
 *     tags: [Missions]
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: integer
 *         description: The ID of the mission to update.
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
 *     responses:
 *       200:
 *         description: Mission updated successfully.
 */
router.put('/:id', missionController.updateMission);

/**
 * @swagger
 * /missions/{id}:
 *   delete:
 *     summary: Delete a mission by ID
 *     description: Removes a mission from BatmanDB.
 *     tags: [Missions]
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: integer
 *         description: The ID of the mission to delete.
 *     responses:
 *       200:
 *         description: Mission deleted successfully.
 *       404:
 *         description: Mission not found.
 */
router.delete('/:id', missionController.deleteMission);

module.exports = router;
