const { Schema, model } = require('mongoose');

const UserSchema = new Schema({
  username: {
    type: String,
    required: true
  }
}, {
  timestamps: true
});

module.exports = model('users', UserSchema);
