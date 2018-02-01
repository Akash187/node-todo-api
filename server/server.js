const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

mongoose.connect("mongodb://localhost:27017/TodoApp").then((result) => {
  console.log("Connection successful")
},(err) => {
  console.log("Failed to connect", err);
});

// let Todo = mongoose.model('Todo', mongoose.Schema({
//   text: {
//     type: String,
//     required: true,
//     minLength: 1,
//     trim: true
//   },
//   completed: {
//     type: Boolean,
//     default: false
//   },
//   completedAt: {
//     type: Number,
//     default: null
//   }
// }));

// let otherTodo = new Todo({
//   text: ' Shoot the video '
// });
//
// otherTodo.save().then((doc) => {
//   console.log(JSON.stringify(doc, undefined, 2));
// }, (e) => {
//   console.log('Unable to save Todo', e);
// });

let User = mongoose.model('User', mongoose.Schema({
  email: {
    type: String,
    trim: true,
    required: true,
    minLength: 1
  }
}));

let user = new User({
  email: 'andrew@example.com'
});

user.save().then((doc) => {
  console.log('User saved', doc)
},(err) => {
  console.log('Unable to save', err)
});