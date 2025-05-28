const db = require('../config/db');

const Game = {
  getAll: (callback) => db.query('SELECT * FROM games', callback),
  getById: (id, callback) => db.query('SELECT * FROM games WHERE id = ?', [id], callback),
  create: (data, callback) => db.query('INSERT INTO games SET ?', data, callback),
  update: (id, data, callback) => db.query('UPDATE games SET ? WHERE id = ?', [data, id], callback),
  delete: (id, callback) => db.query('DELETE FROM games WHERE id = ?', [id], callback)
};

module.exports = Game;