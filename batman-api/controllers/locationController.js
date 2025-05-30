const Location = require('../models/location');

// Get all locations
exports.getAllLocations = (req, res) => {
    Location.getAll((err, results) => {
        if (err) return res.status(500).json(err);
        res.json(results);
    });
};

// Get location by ID
exports.getLocationById = (req, res) => {
    Location.getById(req.params.id, (err, result) => {
        if (err) return res.status(500).json(err);
        res.json(result);
    });
};

 // Create a new location
exports.createLocation = (req, res) => {
    Location.create(req.body, (err, result) => {
        if (err) return res.status(500).json({ error: "Database insert failed." });
        res.json({ message: "✅ Location added!", id: result.insertId });
    });
};