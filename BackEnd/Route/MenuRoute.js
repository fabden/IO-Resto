// import
const express = require('express');


const MenuRouter = express.Router();

// route
MenuRouter.route('/')
  .get((req, res) => { console.log('chemin get menu '); })
  .post((req, res) => { console.log('chemin post menu '); })
  .delete((req, res) => { console.log('chemin delete  menu'); });

module.exports = MenuRouter;
