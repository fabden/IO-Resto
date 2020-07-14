// import models base de donnee
// import Bcrypt Hash password
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const Users = require('../Models/UsersModel');

// get User

exports.getUsers = (req, res) => {
  Users.find()
    .then((docs) => { res.status(200).json(docs); })
    .catch((err) => console.log(err.message));
};

// post User

exports.postUsers = (req, res) => {
  Users.find({ phoneNumber: req.body.phoneNumber })
    .then((user) => {
      if (user.length >= 1) { return res.status(409).json('user exitant'); }
      bcrypt.hash(req.body.password, 10, (err, hash) => {
        if (err) {
          return res.status(500).json('erreur');
        }
        const usersItem = new Users(
          {
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            phoneNumber: req.body.phoneNumber,
            password: hash,
          },
        );
        usersItem.save()
          .then((docs) => { res.status(200).json(docs); })
          .catch((err) => console.log(err.message));
      });
    });
};

// delete User

exports.deleteUsers = (req, res) => {
  res.status(200).json(req.params.id);
  Users.deleteOne({ _id: req.params.id })
    .then((docs) => { res.status(200).json(docs); })
    .catch((err) => console.log(err.message));
};

// login user

exports.loginUser = (req, res) => {
  Users.find({ phoneNumber: req.body.phoneNumber })
    .then((user) => {
      if (user.length < 1) {
        return res.status(200).json('user no exit');
      }
      bcrypt.compare(req.body.password, user[0].password, (err, resul) => {
        if (resul) {
          const token = jwt.sign({
            message: 'hello fab ',
          }, 'token', {
            expiresIn: '1m',
          });

          return res.status(200).json({ mon: 'fab', tokenkey: token });
        }
        return res.status(401).json('user non OK');
      });
    })
    .catch(res.status(401));
};
