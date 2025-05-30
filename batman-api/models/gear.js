const db = require('../config/db');

const Gear = {
  getAll: (callback) => db.query('SELECT * FROM gears', callback),
  getById: (id, callback) => db.query('SELECT * FROM gears WHERE id = ?', [id], callback),

  getFullProfile: (id, callback) => {
    const query = `
      SELECT ge.id, ge.name, ge.description, ge.owner,
             a.id AS ability_id, a.name AS ability_name,
             c.id AS character_id, c.name AS character_name,
             m.id AS mission_id, m.title AS mission_title
      FROM gears ge
      LEFT JOIN abilities a ON ge.id = a.gear_id
      LEFT JOIN characters c ON ge.owner_id = c.id  -- FIX: Ensure correct reference to owner
      LEFT JOIN missions m ON ge.id = m.gear_id
      WHERE ge.id = ?;
    `;
    db.query(query, [id], callback);
  },

  create: (data, callback) => db.query('INSERT INTO gears SET ?', data, callback),
};

module.exports = Gear;
