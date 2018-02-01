//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

const url = "mongodb://localhost:27017/TodoApp";
const dbName = "TodoApp";

// Use connect method to connect to the server
MongoClient.connect(url, (err, client) => {
  if (err) {
    return console.log("Unable to connect to MongoDB server");
  }
  console.log("Connected to MongoDB server");

  const db = client.db(dbName);

  // db.collection('Todos').find({_id: new ObjectID('5a7229b16ad6b22ce0040372')}).toArray().then((docs) => {
  //   console.log('Todos');
  //   console.log(JSON.stringify(docs, undefined, 2));
  // },(err) => {
  //   console.log('Unable to fetch todos', err)
  // });

  // db.collection('Todos').find({}).count().then((count) => {
  //   console.log('Todos');
  //   console.log(`Todos count: ${count}`);
  // },(err) => {
  //   console.log('Unable to fetch todos', err)
  // });

  db.collection('Users').find({name: 'Akash'}).toArray().then((docs) => {
    console.log('Todos');
      console.log(JSON.stringify(docs, undefined, 2));
    },(err) => {
      console.log('Unable to fetch todos', err)
  })

  //client.close();
});