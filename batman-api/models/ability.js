const db = require('../config/db');

const Ability = {
  getAll: (callback) => db.query('SELECT * FROM abilities', callback),
  getById: (id, callback) => db.query('SELECT * FROM abilities WHERE id = ?', [id], callback),
  create: (data, callback) => db.query('INSERT INTO abilities SET ?', data, callback),
  update: (id, data, callback) => db.query('UPDATE abilities SET ? WHERE id = ?', [data, id], callback),
  delete: (id, callback) => db.query('DELETE FROM abilities WHERE id = ?', [id], callback)
};

module.exports = Ability;