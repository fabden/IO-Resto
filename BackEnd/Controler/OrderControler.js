// import models base de donnee

const Orders = require('../Models/OdersModel');

// get Order

exports.getOrder = (req, res) => {
  Orders.find()
    .then((docs) => { res.status(200).json(docs); })
    .catch((err) => console.log(err.message));
};

// post Order

exports.postOrder = (req, res) => {
  const OrdersItem = new Orders({
    idUser: req.body.idUser,
  });

  OrdersItem.save()
    .then((docs) => { res.status(200).json(docs); })
    .catch((err) => console.log(err.message));
};

// delete Order

exports.deleteOrder = (req, res) => {
  Orders.remove({ _id: req.params.id })
    .then((docs) => { res.status(200).json(docs); })
    .catch((err) => console.log(err.message));
};
