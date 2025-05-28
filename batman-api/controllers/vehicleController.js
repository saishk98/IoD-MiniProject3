const Vehicle = require('../models/vehicle');

exports.getAllVehicles = (req, res) => {
    Vehicle.getAll((err, results) => err ? res.status(500).json(err) : res.json(results));
};

exports.getVehicleById = (req, res) => {
    Vehicle.getById(req.params.id, (err, result) => err ? res.status(500).json(err) : res.json(result));
};

exports.createVehicle = (req, res) => {
    Vehicle.create(req.body, (err, result) => err ? res.status(500).json(err) : res.json({ message: "✅ Vehicle added!", id: result.insertId }));
};

exports.updateVehicle = (req, res) => {
    Vehicle.update(req.params.id, req.body, (err, result) => err ? res.status(500).json(err) : res.json({ message: "✅ Vehicle updated!" }));
};

exports.deleteVehicle = (req, res) => {
    Vehicle.delete(req.params.id, (err, result) => err ? res.status(500).json(err) : res.json({ message: "✅ Vehicle deleted!" }));
};
