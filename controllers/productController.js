const Product = require('../models/Product');

exports.list = (req, res) => {
  res.render('products', {
    products: Product.all(),
    username: req.session.username
  });
};

exports.showCreate = (req, res) => {
  res.render('product-form', { product: {}, action: '/products' });
};

exports.create = (req, res) => {
  const { name, price, stock } = req.body;
  Product.create(name, parseFloat(price), parseInt(stock));
  res.redirect('/products');
};

exports.showEdit = (req, res) => {
  const product = Product.find(req.params.id);
  res.render('product-form', { product, action: `/products/${product.id}/update` });
};

exports.update = (req, res) => {
  const { name, price, stock } = req.body;
  Product.update(req.params.id, name, parseFloat(price), parseInt(stock));
  res.redirect('/products');
};

exports.remove = (req, res) => {
  Product.remove(req.params.id);
  res.redirect('/products');
};