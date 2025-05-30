const db = require('../config/db');

const Mission = {
  getAll: (callback) => db.query('SELECT * FROM missions', callback),
  getById: (id, callback) => db.query('SELECT * FROM missions WHERE id = ?', [id], callback),

  getFullProfile: (id, callback) => {
    const query = `
      SELECT m.id, m.title, m.description, m.location,
             c.id AS character_id, c.name AS character_name,
             o.id AS objective_id, o.description AS objective_description,
             r.id AS reward_id, r.type AS reward_type
      FROM missions m
      LEFT JOIN characters c ON m.character_id = c.id
      LEFT JOIN objectives o ON m.id = o.mission_id
      LEFT JOIN rewards r ON m.id = r.mission_id
      WHERE m.id = ?;
    `;
    db.query(query, [id], callback);
  },

  create: (data, callback) => db.query('INSERT INTO missions SET ?', data, callback),
};

module.exports = Mission;
