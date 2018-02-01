const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

mongoose.connect("mongodb://localhost:27017/TodoApp").then((result) => {
  console.log("Connection successful")
},(err) => {
  console.log("Failed to connect", err);
});

module.exports = {mongoose};