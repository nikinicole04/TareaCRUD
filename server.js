require('dotenv').config();

const express = require('express');
const session = require('express-session');
const app = express();

const PORT = process.env.PORT || 3001;

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: false }));
app.use(express.static('public'));

app.use(session({
  secret: process.env.SESSION_SECRET || 'cambia-esta-clave',
  resave: false,
  saveUninitialized: false
}));

const authRoutes = require('./routes/authRoutes');
const productRoutes = require('./routes/productRoutes');

app.use('/', authRoutes);
app.use('/products', productRoutes);

app.get('/', (req, res) => {
  res.redirect('/products');
});

app.listen(PORT, () => console.log(`Servidor en http://localhost:${PORT}`));
