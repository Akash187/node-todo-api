//library import
let express = require('express');
let bodyParser = require('body-parser');

//local import
let {mongoose} = require('./db/mongooseConfig');
let {Todo} = require('./modals/todo');
let{User} = require('./modals/user');

let app = express();

app.use(bodyParser.json());

app.post('/todos',(req, res) => {
  let todo = new Todo({
    text: req.body.text
  });

  todo.save().then((doc) => {
    res.send(doc);
  }, (e) => {
    res.status(400).send(e);
  })
});

app.listen(3000, () => {
  console.log('Started on port 3000');
});
