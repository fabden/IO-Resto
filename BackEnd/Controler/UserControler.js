// import models base de donnee

const Users = require('../Models/UsersModel');

// get menus

exports.getUsers = (req, res) => {
  Users.find()
    .then((docs) => {
      res.status(200).json(docs);
    })
    .catch((err) => console.log(err));
};

// post menus

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
    .then(() => { res.status(201).json(req.body); })
    .catch((err) => console.log(err));
};

// delete menu

exports.deleteUsers = (req, res) => {
  console.log(req.params.id);
  res.status(200).json(req.params.id);
  Users.deleteOne({ _id: req.params.id }).exec().then().catch();
};
