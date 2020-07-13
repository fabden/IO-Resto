// import

const express = require('express');

const UserRoute = express.Router();

// import controleur

const ControleurUsers = require('../Controler/UserControler');

// route

UserRoute.route('/')
  .get(ControleurUsers.getUsers)
  .post(ControleurUsers.postUsers);

UserRoute.route('/:id')
  .delete(ControleurUsers.deleteUsers);

UserRoute.route('/login')
  .post(ControleurUsers.loginUser);

module.exports = UserRoute;
