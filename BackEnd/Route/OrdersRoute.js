//import 

const express = require('express');
const { Router } = require('express');
const OrderRouter = express.Router();

//route

OrderRouter.route('/')
    .get((req, res) => {console.log("chemin get order ")})
    .post((req, res) => {console.log("chemin post order")})
    .delete((req, res) => {console.log("chemin delete order")})
   


module.exports = OrderRouter;