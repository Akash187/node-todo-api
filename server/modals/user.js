let {mongoose} = require('../db/mongooseConfig');

let User = mongoose.model('User', mongoose.Schema({
  email: {
    type: String,
    trim: true,
    required: true,
    minLength: 1
  }
}));

module.exports = {User};