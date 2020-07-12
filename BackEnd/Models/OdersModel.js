const mongoose = require('mongoose');

const OdersSchema = mongoose.Schema({
  idUser: { type: String, required: true },

});

module.exports = mongoose.model('Orders', OdersSchema);
