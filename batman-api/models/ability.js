const db = require('../config/db');

const Ability = {
  getAll: (callback) => db.query('SELECT * FROM abilities', callback),
  getById: (id, callback) => db.query('SELECT * FROM abilities WHERE id = ?', [id], callback),

  getFullProfile: (id, callback) => {
    const query = `
      SELECT a.id, a.name, a.description,
             c.id AS character_id, c.name AS character_name,
             g.id AS game_id, g.title AS game_title,
             ge.id AS gear_id, ge.name AS gear_name,
             m.id AS mission_id, m.title AS mission_title
      FROM abilities a
      LEFT JOIN characters c ON a.character_id = c.id
      LEFT JOIN games g ON a.game_id = g.id
      LEFT JOIN gears ge ON a.id = ge.ability_id
      LEFT JOIN missions m ON a.id = m.ability_id
      WHERE a.id = ?;
    `;
    db.query(query, [id], callback);
  },

  create: (data, callback) => db.query('INSERT INTO abilities SET ?', data, callback),
};

module.exports = Ability;