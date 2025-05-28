const db = require('../config/db');

const Mission = {
  getAll: (callback) => db.query('SELECT * FROM missions', callback),
  getById: (id, callback) => db.query('SELECT * FROM missions WHERE id = ?', [id], callback),
  create: (data, callback) => db.query('INSERT INTO missions SET ?', data, callback),
  update: (id, data, callback) => db.query('UPDATE missions SET ? WHERE id = ?', [data, id], callback),
  delete: (id, callback) => db.query('DELETE FROM missions WHERE id = ?', [id], callback)
};

module.exports = Mission;