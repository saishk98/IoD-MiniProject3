const db = require('../config/db');

const Gear = {
  getAll: (callback) => db.query('SELECT * FROM gears', callback),
  getById: (id, callback) => db.query('SELECT * FROM gears WHERE id = ?', [id], callback),
  create: (data, callback) => db.query('INSERT INTO gears SET ?', data, callback),
  update: (id, data, callback) => db.query('UPDATE gears SET ? WHERE id = ?', [data, id], callback),
  delete: (id, callback) => db.query('DELETE FROM gears WHERE id = ?', [id], callback)
};

module.exports = Gear;