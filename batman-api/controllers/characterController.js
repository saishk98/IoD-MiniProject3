const Character = require('../models/character');
const Ability = require('../models/ability');

// Get all characters
exports.getAllCharacters = (req, res) => {
  Character.getAll((err, results) => {
    if (err) return res.status(500).json(err);
    res.json(results);
  });
};

// Get character by ID
exports.getCharacterById = (req, res) => {
  Character.getById(req.params.id, (err, result) => {
    if (err) return res.status(500).json(err);
    res.json(result);
  });
};

// Get full profile (multi-table data)
exports.getCharacterFullProfile = (req, res) => {
  Character.getFullProfile(req.params.id, (err, results) => {
      if (err) {
          console.error("❌ Database Query Error:", err);  // ✅ Log the actual error
          return res.status(500).json({ error: err.message });  // ✅ Send the real error message
      }
      if (!results.length) return res.status(404).json({ message: "Character not found." });

      const characterData = {
        id: results[0].id,
        name: results[0].name,
        alias: results[0].alias,
        base_of_operations: results[0].base_of_operations,
        games: [],
        abilities: [],
        gears: [],
        missions: []
      };
      
      results.forEach(row => {
        if (row.game_id && !characterData.games.find(g => g.id === row.game_id)) {
          characterData.games.push({ id: row.game_id, title: row.game_title });
        }
        if (row.ability_id && !characterData.abilities.find(a => a.id === row.ability_id)) {
          characterData.abilities.push({ id: row.ability_id, name: row.ability_name });
        }
        if (row.gear_id && !characterData.gears.find(g => g.id === row.gear_id)) {
          characterData.gears.push({ id: row.gear_id, name: row.gear_name });
        }
        if (row.mission_id && !characterData.missions.find(m => m.id === row.mission_id)) {
          characterData.missions.push({ id: row.mission_id, title: row.mission_title });
        }
      });

      res.json(characterData);
  });
};

// Create a new character
exports.createCharacter = (req, res) => {
  Character.create(req.body, (err, result) => {
    if (err) return res.status(500).json({ error: "Database insert failed." });
    res.json({ message: "✅ Character added!", id: result.insertId });
  });
};