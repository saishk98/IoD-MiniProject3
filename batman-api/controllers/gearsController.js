const Gear = require('../models/gear');

exports.getAllGear = (req, res) => {
    Gear.getAll((err, results) => err ? res.status(500).json(err) : res.json(results));
};

exports.getGearById = (req, res) => {
    Gear.getById(req.params.id, (err, result) => err ? res.status(500).json(err) : res.json(result));
};

exports.createGear = (req, res) => {
    Gear.create(req.body, (err, result) => err ? res.status(500).json(err) : res.json({ message: "✅ Gear added!", id: result.insertId }));
};

exports.updateGear = (req, res) => {
    Gear.update(req.params.id, req.body, (err, result) => err ? res.status(500).json(err) : res.json({ message: "✅ Gear updated!" }));
};

exports.deleteGear = (req, res) => {
    Gear.delete(req.params.id, (err, result) => err ? res.status(500).json(err) : res.json({ message: "✅ Gear deleted!" }));
};
