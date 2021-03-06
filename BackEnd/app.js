// import
const express = require('express');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const app = express();

// import route

const MenuRoute = require('./Route/MenuRoute');
const OrdersRoute = require('./Route/OrdersRoute');
const UserRoute = require('./Route/UserRoute');

// connection base de donnee

mongoose.connect('mongodb://localhost:27017/io-resto',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch(() => console.log('Connexion à MongoDB échouée !'));

// Cors

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
  next();
});

// body-parser

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// route

app.use('/menu', MenuRoute);
app.use('/order', OrdersRoute);
app.use('/user', UserRoute);

// export module
module.exports = app;
