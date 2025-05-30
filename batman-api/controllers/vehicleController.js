const Vehicle = require('../models/vehicle');

// Get all vehicles
exports.getAllVehicles = (req, res) => {
    Vehicle.getAll((err, results) => {
        if (err) return res.status(500).json(err);
        res.json(results);
    });
};

// Get vehicle by ID
exports.getVehicleById = (req, res) => {
    Vehicle.getById(req.params.id, (err, result) => {
        if (err) return res.status(500).json(err);
        res.json(result);
    });
};

// Create vehicle
exports.createVehicle = (req, res) => {
    Vehicle.create(req.body, (err, result) => {
        if (err) return res.status(500).json(err);
        res.json({ message: "✅ Vehicle added!", id: result.insertId });
    });
};