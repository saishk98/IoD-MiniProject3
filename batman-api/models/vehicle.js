const db = require('../config/db');

const Vehicle = {
  getAll: (callback) => db.query('SELECT * FROM vehicles', callback),
  getById: (id, callback) => db.query('SELECT * FROM vehicles WHERE id = ?', [id], callback),
  create: (data, callback) => db.query('INSERT INTO vehicles SET ?', data, callback),
  update: (id, data, callback) => db.query('UPDATE vehicles SET ? WHERE id = ?', [data, id], callback),
  delete: (id, callback) => db.query('DELETE FROM vehicles WHERE id = ?', [id], callback)
};

module.exports = Vehicle;