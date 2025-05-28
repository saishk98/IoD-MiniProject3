const Location = require('../models/location');

exports.getAllLocations = (req, res) => {
    Location.getAll((err, results) => err ? res.status(500).json(err) : res.json(results));
};

exports.getLocationById = (req, res) => {
    Location.getById(req.params.id, (err, result) => err ? res.status(500).json(err) : res.json(result));
};

exports.createLocation = (req, res) => {
    Location.create(req.body, (err, result) => err ? res.status(500).json(err) : res.json({ message: "✅ Location added!", id: result.insertId }));
};

exports.updateLocation = (req, res) => {
    Location.update(req.params.id, req.body, (err, result) => err ? res.status(500).json(err) : res.json({ message: "✅ Location updated!" }));
};

exports.deleteLocation = (req, res) => {
    Location.delete(req.params.id, (err, result) => err ? res.status(500).json(err) : res.json({ message: "✅ Location deleted!" }));
};
