const Mission = require('../models/mission');

// Get all missions
exports.getAllMissions = (req, res) => {
    Mission.getAll((err, results) => {
        if (err) return res.status(500).json(err);
        res.json(results);
    });
};

// Get mission by ID
exports.getMissionById = (req, res) => {
    Mission.getById(req.params.id, (err, result) => {
        if (err) return res.status(500).json(err);
        res.json(result);
    });
};

// Create a new mission
exports.createMission = (req, res) => {
    Mission.create(req.body, (err, result) => {
        if (err) return res.status(500).json({ error: "Database insert failed." });
        res.json({ message: "✅ Mission added!", id: result.insertId });
    });
};