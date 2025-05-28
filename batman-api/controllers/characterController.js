const Character = require('../models/character');

// Get all characters
exports.getAllCharacters = (req, res) => {
  Character.getAll((err, results) => {
    if (err) {
      return res.status(500).json(err);
    }
    res.json(results);
  });
};

// Get character by ID
exports.getCharacterById = (req, res) => {
  Character.getById(req.params.id, (err, result) => {
    if (err) {
      return res.status(500).json(err);
    }
    res.json(result);
  });
};

// Create a new character
exports.createCharacter = (req, res) => {
  Character.create(req.body, (err, result) => {
    if (err) {
      return res.status(500).json(err);
    }
    res.json({ message: "✅ Character added!", id: result.insertId });
  });
};

// Update an existing character
exports.updateCharacter = (req, res) => {
  Character.update(req.params.id, req.body, (err, result) => {
    if (err) {
      return res.status(500).json(err);
    }
    res.json({ message: "✅ Character updated!" });
  });
};

// Delete a character
exports.deleteCharacter = (req, res) => {
  Character.delete(req.params.id, (err, result) => {
    if (err) {
      return res.status(500).json(err);
    }
    res.json({ message: "✅ Character deleted!" });
  });
};