const Gear = require('../models/gear');

// Get all gears
exports.getAllGears = (req, res) => {
    Gear.getAll((err, results) => {
        if (err) return res.status(500).json(err);
        res.json(results);
    });
};

// Get gear by ID
exports.getGearById = (req, res) => {
    Gear.getById(req.params.id, (err, result) => {
        if (err) return res.status(500).json(err);
        res.json(result);
    });
};

// Create gear
exports.createGear = (req, res) => {
    Gear.create(req.body, (err, result) => {
        if (err) return res.status(500).json(err);
        res.json({ message: "✅ Gear added!", id: result.insertId });
    });
};