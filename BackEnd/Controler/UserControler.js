// import models base de donnee

const Users = require('../Models/UsersModel');

// get User

exports.getUsers = (req, res) => {
  Users.find()
    .then((docs) => { res.status(200).json(docs); })
    .catch((err) => console.log(err.message));
};

// post User

exports.postUsers = (req, res) => {
  const usersItem = new Users(
    {
      id: req.body.id,
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      phoneNumber: req.body.phoneNumber,
      password: req.body.password,
    },
  );

  usersItem.save()
    .then((docs) => { res.status(200).json(docs); })
    .catch((err) => console.log(err.message));
};

// delete User

exports.deleteUsers = (req, res) => {
  res.status(200).json(req.params.id);
  Users.deleteOne({ _id: req.params.id })
    .then((docs) => { res.status(200).json(docs); })
    .catch((err) => console.log(err.message));
};
