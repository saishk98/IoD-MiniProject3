const db = require('../config/db');

const Game = {
  getAll: (callback) => db.query('SELECT * FROM games', callback),
  getById: (id, callback) => db.query('SELECT * FROM games WHERE id = ?', [id], callback),

  getFullDetails: (id, callback) => {
    const query = `
      SELECT DISTINCT g.id, g.title, g.genre, g.release_date,
       c.id AS character_id, c.name AS character_name,
       m.id AS mission_id, m.title AS mission_title
      FROM games g
      LEFT JOIN characters_games cg ON g.id = cg.game_id
      LEFT JOIN characters c ON cg.character_id = c.id
      LEFT JOIN missions m ON g.id = m.game_id
      LEFT JOIN characters_missions cm ON m.id = cm.mission_id
      WHERE g.id = ?
      GROUP BY g.id, c.id, m.id;

    `;
    db.query(query, [id], callback);
  },

  create: (data, callback) => db.query('INSERT INTO games SET ?', data, callback),
};

module.exports = Game;
