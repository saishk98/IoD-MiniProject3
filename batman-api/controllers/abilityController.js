const Ability = require('../models/ability');

// Get all abilities
exports.getAllAbilities = (req, res) => {
  Ability.getAll((err, results) => {
    if (err) return res.status(500).json(err);
    res.json(results);
  });
};

// Get ability by ID
exports.getAbilityById = (req, res) => {
  Ability.getById(req.params.id, (err, result) => {
    if (err) return res.status(500).json(err);
    res.json(result);
  });
};

// Create a new ability
exports.createAbility = (req, res) => {
  Ability.create(req.body, (err, result) => {
    if (err) return res.status(500).json({ error: "Database insert failed." });
    res.json({ message: "✅ Ability added!", id: result.insertId });
  });
};