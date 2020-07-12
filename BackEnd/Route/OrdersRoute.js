// import

const express = require('express');

const OrderRouter = express.Router();

// import controler

const OrderControleur = require('../Controler/OrderControler');

// route

OrderRouter.route('/')
  .get(OrderControleur.getOrder)
  .post(OrderControleur.postOrder);

OrderRouter.route('/:id')
  .delete(OrderControleur.deleteOrder);

module.exports = OrderRouter;
