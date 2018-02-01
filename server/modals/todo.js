let {mongoose} = require('../db/mongooseConfig');

let Todo = mongoose.model('Todo', mongoose.Schema({
  text: {
    type: String,
    required: true,
    minLength: 1,
    trim: true
  },
  completed: {
    type: Boolean,
    default: false
  },
  completedAt: {
    type: Number,
    default: null
  }
}));

module.exports = {Todo};