// import

const express = require('express');

const UserRoute = express.Router();

const checkAuth = require('../Midelware/Check-auth');

// import controleur

const ControleurUsers = require('../Controler/UserControler');

// route

UserRoute.route('/')
  .get(checkAuth, ControleurUsers.getUsers)
  .post(ControleurUsers.postUsers);

UserRoute.route('/:id')
  .delete(ControleurUsers.deleteUsers);

UserRoute.route('/login')
  .post(ControleurUsers.loginUser);

module.exports = UserRoute;
