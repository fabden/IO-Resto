//import 
const express =require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app=express();

//== connection base de donnee

mongoose.connect('mongodb://localhost:27017/?readPreference=primary&appname=MongoDB%20Compass%20Community&ssl=false',
  { useNewUrlParser: true,
    useUnifiedTopology: true })
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch(() => console.log('Connexion à MongoDB échouée !'));

//Cors

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
  });

//body-parser 

  app.use(bodyParser.urlencoded());

  app.post('/user', (req, res,) => {

    console.log(req.body);
    res.status(201).json({
      message: 'Objet créé !'
    });

  });


//export module 
module.exports =app;
