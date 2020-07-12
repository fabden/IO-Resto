// import models base de donnee

const Orders = require('../Models/OdersModel');

// get menus

exports.getOrder = (req, res) => {
  Orders.find()
    .then((docs) => {
      res.status(200).json(docs);
    })
    .catch((err) => console.log(err));
};

// post menus

exports.postOrder = (req, res) => {
  const OrdersItem = new Orders({
    idUser: req.body.idUser,
  });

  OrdersItem.save()
    .then(() => { res.status(201).json(req.body); })
    .catch((err) => console.log(err));
};

// delete menu

exports.deleteOrder = (req, res) => {
  console.log(req.params.id);
  res.status(200).json(req.params.id);
  Orders.remove({ _id: req.params.id }).then().catch();
};
