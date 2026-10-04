const db = require('../database');

exports.all = () => db.prepare('SELECT * FROM products ORDER BY id DESC').all();

exports.find = (id) => db.prepare('SELECT * FROM products WHERE id = ?').get(id);

exports.create = (name, price, stock) =>
  db.prepare('INSERT INTO products (name, price, stock) VALUES (?, ?, ?)').run(name, price, stock);

exports.update = (id, name, price, stock) =>
  db.prepare('UPDATE products SET name = ?, price = ?, stock = ? WHERE id = ?').run(name, price, stock, id);

exports.remove = (id) => db.prepare('DELETE FROM products WHERE id = ?').run(id);