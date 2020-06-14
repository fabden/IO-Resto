// import

const express = require('express');

const UserRoute = express.Router();

// route

UserRoute.route('/')
  .get((req, res) => { console.log('chemin get user'); })
  .post((req, res) => { console.log('chemin post user'); })
  .delete((req, res) => { console.log('chemin delete user'); });

module.exports = UserRoute;
