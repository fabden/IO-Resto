const mongoose = require('mongoose');

const MenusSchema = mongoose.Schema({
  category: { type: String, required: true },
  description: { type: String, required: true },
  id: { type: String, required: true },
  titleMenu: { type: String, required: true },
  price: { type: Number, required: true },
});

module.exports = mongoose.model('Menus', MenusSchema);
