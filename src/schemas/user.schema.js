const database = require('../database');

const { Schema } = database;

const UserSchema = new Schema({
  displayName: String,
  age: Number,
  email: String,
  password: String,
});

const User = database.model('User', UserSchema);

module.exports = { UserSchema, User };
