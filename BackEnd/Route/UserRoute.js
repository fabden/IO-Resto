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

module.exports = UserRoute;
