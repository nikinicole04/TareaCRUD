const User = require('../models/User');

exports.showRegister = (req, res) => {
  res.render('register', { error: null, form: {} });
};

exports.register = (req, res) => {
  const { name, username, password, confirmPassword } = req.body;
  const form = { name, username };

  if (password !== confirmPassword) {
    return res.render('register', { error: 'Las contraseñas no coinciden', form });
  }

  if (User.findByUsername(username)) {
    return res.render('register', { error: 'Ese usuario ya existe', form });
  }

  User.create(name, username, password);
  res.redirect('/login');
};

exports.showLogin = (req, res) => {
  res.render('login', { error: null });
};

exports.login = (req, res) => {
  const { username, password } = req.body;
  const user = User.findByUsername(username);

  if (!user || !User.checkPassword(password, user.password)) {
    return res.render('login', { error: 'Usuario o contraseña incorrectos' });
  }

  req.session.userId = user.id;
  req.session.username = user.username;
  req.session.name = user.name;
  res.redirect('/products');
};

exports.logout = (req, res) => {
  req.session.destroy(() => {
    res.redirect('/login');
  });
};