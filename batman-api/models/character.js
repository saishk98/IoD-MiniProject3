const db = require('../config/db');

const Character = {
  getAll: (callback) => db.query('SELECT * FROM characters', callback),
  getById: (id, callback) => db.query('SELECT * FROM characters WHERE id = ?', [id], callback),
  create: (data, callback) => db.query('INSERT INTO characters SET ?', data, callback),
  update: (id, data, callback) => db.query('UPDATE characters SET ? WHERE id = ?', [data, id], callback),
  delete: (id, callback) => db.query('DELETE FROM characters WHERE id = ?', [id], callback)
};

module.exports = Character;