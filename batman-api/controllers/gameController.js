const Game = require('../models/game');

// Get all games
exports.getAllGames = (req, res) => {
  Game.getAll((err, results) => {
    if (err) {
      return res.status(500).json(err);
    }
    res.json(results);
  });
};

// Get a game by ID
exports.getGameById = (req, res) => {
  Game.getById(req.params.id, (err, result) => {
    if (err) {
      return res.status(500).json(err);
    }
    res.json(result);
  });
};

// Create a new game
exports.createGame = (req, res) => {
  Game.create(req.body, (err, result) => {
    if (err) {
      return res.status(500).json(err);
    }
    res.json({ message: "✅ Game added!", id: result.insertId });
  });
};

// Update an existing game
exports.updateGame = (req, res) => {
  Game.update(req.params.id, req.body, (err, result) => {
    if (err) {
      return res.status(500).json(err);
    }
    res.json({ message: "✅ Game updated!" });
  });
};

// Delete a game
exports.deleteGame = (req, res) => {
  Game.delete(req.params.id, (err, result) => {
    if (err) {
      return res.status(500).json(err);
    }
    res.json({ message: "✅ Game deleted!" });
  });
};
