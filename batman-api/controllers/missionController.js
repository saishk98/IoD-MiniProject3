const Mission = require('../models/mission');

exports.getAllMissions = (req, res) => {
    Mission.getAll((err, results) => err ? res.status(500).json(err) : res.json(results));
};

exports.getMissionById = (req, res) => {
    Mission.getById(req.params.id, (err, result) => err ? res.status(500).json(err) : res.json(result));
};

exports.createMission = (req, res) => {
    Mission.create(req.body, (err, result) => err ? res.status(500).json(err) : res.json({ message: "✅ Mission added!", id: result.insertId }));
};

exports.updateMission = (req, res) => {
    Mission.update(req.params.id, req.body, (err, result) => err ? res.status(500).json(err) : res.json({ message: "✅ Mission updated!" }));
};

exports.deleteMission = (req, res) => {
    Mission.delete(req.params.id, (err, result) => err ? res.status(500).json(err) : res.json({ message: "✅ Mission deleted!" }));
};
