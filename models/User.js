const db = require('../database');
const bcrypt = require('bcryptjs');

exports.findByUsername = (username) =>
  db.prepare('SELECT * FROM users WHERE username = ?').get(username);

exports.create = (name, username, plainPassword) => {
  const hash = bcrypt.hashSync(plainPassword, 10);
  return db
    .prepare('INSERT INTO users (name, username, password) VALUES (?, ?, ?)')
    .run(name, username, hash);
};

exports.checkPassword = (plainPassword, hash) =>
  bcrypt.compareSync(plainPassword, hash);