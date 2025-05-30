const db = require('../config/db');

const Character = {
  getAll: (callback) => db.query('SELECT * FROM characters', callback),
  getById: (id, callback) => db.query('SELECT * FROM characters WHERE id = ?', [id], callback),

  getFullProfile: (id, callback) => {
    const query = `
      SELECT DISTINCT c.id, c.name, c.alias, c.base_of_operations,
       g.id AS game_id, g.title AS game_title,
       a.id AS ability_id, a.name AS ability_name,
       ge.id AS gear_id, ge.name AS gear_name,
       m.id AS mission_id, m.title AS mission_title
      FROM characters c
      LEFT JOIN characters_games cg ON c.id = cg.character_id
      LEFT JOIN games g ON cg.game_id = g.id
      LEFT JOIN abilities a ON c.id = a.character_id
      LEFT JOIN gears ge ON c.id = ge.character_id
      LEFT JOIN characters_missions cm ON c.id = cm.character_id
      LEFT JOIN missions m ON cm.mission_id = m.id
      WHERE c.id = ?
      GROUP BY c.id, g.id, a.id, ge.id, m.id;
    `;
    db.query(query, [id], callback);
  },

  create: (data, callback) => db.query('INSERT INTO characters SET ?', data, callback),
};

module.exports = Character;
