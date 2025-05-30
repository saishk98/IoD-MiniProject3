const db = require('../config/db');

const Vehicle = {
  getAll: (callback) => db.query('SELECT * FROM vehicles', callback),
  getById: (id, callback) => db.query('SELECT * FROM vehicles WHERE id = ?', [id], callback),

  getFullProfile: (id, callback) => {
    const query = `
      SELECT v.id, v.name, v.description,
             c.id AS character_id, c.name AS character_name,
             g.id AS game_id, g.title AS game_title,
             ge.id AS gear_id, ge.name AS gear_name,
             m.id AS mission_id, m.title AS mission_title
      FROM vehicles v
      LEFT JOIN characters c ON v.character_id = c.id
      LEFT JOIN games g ON v.game_id = g.id
      LEFT JOIN gears ge ON v.id = ge.vehicle_id
      LEFT JOIN missions m ON v.id = m.vehicle_id
      WHERE v.id = ?;
    `;
    db.query(query, [id], callback);
  },

  create: (data, callback) => db.query('INSERT INTO vehicles SET ?', data, callback),
};

module.exports = Vehicle;