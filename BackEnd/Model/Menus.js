const mongoose = require('mongoose');

const MenusSchema = mongoose.Schema({
  Category: { type: String, required: true },
  Description: { type: String, required: true },
  Id: { type: String, required: true },
  TitleMenu: { type: String, required: true },
  price: { type: Number, required: true },
});

module.exports = mongoose.model('Menus', MenusSchema);