const database = require('../database');

const { Schema } = database;

const UserSchema = new Schema({
  username: String,
  password: String,
});

const User = database.model('User', UserSchema);

module.exports = { UserSchema, User };
