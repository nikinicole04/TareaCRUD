const db = require('../database');
const usuarios = db.prepare('SELECT id, name, username, password FROM users').all();
console.log(usuarios);