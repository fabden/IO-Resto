const mongoose = require('mongoose');

const UsersSchema = mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  phoneNumber: { type: String },
  password: { type: String, required: true },
});

module.exports = mongoose.model('Users', UsersSchema);
