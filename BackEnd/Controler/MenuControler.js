// import models base de donnee

const Menus = require('../Models/MenusModel');

// get menus

exports.getMenu = (req, res) => {
  Menus.find()
    .exec()
    .then((docs) => { res.status(200).json(docs); })
    .catch((err) => console.log(err));
};

// post menus

exports.postMenu = (req, res) => {
  const MenusItem = new Menus({
    category: req.body.category,
    description: req.body.description,
    id: req.body.id,
    titleMenu: req.body.titleMenu,
    price: req.body.price,
  });

  MenusItem.save()
    .then((doc) => { res.status(201).json(doc); })
    .catch((err) => console.log(err));
};

// delete menu

exports.deleteMenu = (req, res) => {
  Menus.remove({ _id: req.params.id })
    .then((docs) => { res.status(200).json(docs); })
    .catch((err) => console.log(err));
};
