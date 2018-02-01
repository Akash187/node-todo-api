const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

mongoose.connect("mongodb://localhost:27017/TodoApp").then((result) => {
  console.log("Connection successful")
},(err) => {
  console.log("Failed to connect", err);
});

let Todo = mongoose.model('Todo', mongoose.Schema({
  text: {
    type: String
  },
  completed: {
    type: Boolean
  },
  completedAt: {
    type: Number
  }
}));

// let newTodo = new Todo({
//   text: 'Cook Dinner'
// });
//
// newTodo.save().then((doc) => {
//   console.log('Saved docs', doc);
// }, (e) => {
//   console.log('Unable to save Todo', e);
// });

let otherTodo = new Todo({
  text: 'Feed the Cat',
  completed: true,
  completedAt: 123
});

otherTodo.save().then((doc) => {
  console.log(JSON.stringify(doc, undefined, 2));
}, (e) => {
  console.log('Unable to save Todo', e);
});