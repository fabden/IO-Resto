// import
const express = require('express');

const MenuRouter = express.Router();

// import controler
const MenuControler = require('../Controler/MenuControler');

// route Methdoe

MenuRouter.route('/')
  .get(MenuControler.getMenu)
  .post(MenuControler.postMenu);

MenuRouter.route('/:id').delete(MenuControler.deleteMenu);

module.exports = MenuRouter;
