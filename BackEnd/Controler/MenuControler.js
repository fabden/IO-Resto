// import models base de donnee

const Menus = require('../Models/MenusModel');

// get menus

exports.getMenu = (req, res) => {
  Menus.find()
    .then((docs) => {
      res.status(200).json(docs);
    })
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
    .then(() => { res.status(201).json(req.body); })
    .catch();
};

// delete menu

exports.deleteMenu = (req, res) => {
  console.log(req.params.id);
  res.status(200).json(req.params.id);
  Menus.remove({ _id: req.params.id }).exec().then().catch();
};
