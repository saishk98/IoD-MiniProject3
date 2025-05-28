const Ability = require('../models/ability');

exports.getAllAbilities = (req, res) => {
  Ability.getAll((err, results) => err ? res.status(500).json(err) : res.json(results));
};

exports.getAbilityById = (req, res) => {
  Ability.getById(req.params.id, (err, result) => err ? res.status(500).json(err) : res.json(result));
};

exports.createAbility = (req, res) => {
  Ability.create(req.body, (err, result) => err ? res.status(500).json(err) : res.json({ message: "✅ Ability added!", id: result.insertId }));
};

exports.updateAbility = (req, res) => {
  Ability.update(req.params.id, req.body, (err, result) => err ? res.status(500).json(err) : res.json({ message: "✅ Ability updated!" }));
};

exports.deleteAbility = (req, res) => {
  Ability.delete(req.params.id, (err, result) => err ? res.status(500).json(err) : res.json({ message: "✅ Ability deleted!" }));
};