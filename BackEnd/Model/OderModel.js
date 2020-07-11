const mongoose = require('mongoose');

const OderSchema = mongoose.Schema({
  idUser: { type: String, required: true },

});

module.exports = mongoose.model('Menus', OderSchema);
