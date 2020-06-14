//import 

const express = require('express');
const { Router } = require('express');
const router = express.Router();

router
    .route('/')
    .get((req, res) => {console.log("chemin get ")})
    .post((req, res) => {console.log("chemin post ")})
    .delete((req, res) => {console.log("chemin delete ")})
   


module.exports = router;