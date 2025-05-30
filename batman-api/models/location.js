const db = require('../config/db');

const Location = {
  getAll: (callback) => db.query('SELECT * FROM locations', callback),

  getById: (id, callback) => db.query('SELECT * FROM locations WHERE id = ?', [id], callback),

  getFullInfo: (id, callback) => {
    const query = `
      SELECT l.id, l.name, l.description,
             c.id AS character_id, c.name AS character_name,
             m.id AS mission_id, m.title AS mission_title
      FROM locations l
      LEFT JOIN characters c ON l.id = c.location_id
      LEFT JOIN missions m ON l.id = m.location_id
      WHERE l.id = ?;
    `;
    db.query(query, [id], callback);
  },

  create: (data, callback) => db.query('INSERT INTO locations SET ?', data, callback),
};

module.exports = Location;