//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');


const url = "mongodb://localhost:27017";
const dbName = "TodoApp";

// Use connect method to connect to the server
MongoClient.connect(url, (err, client) => {
  if (err) {
    return console.log("Unable to connect to MongoDB server");
  }
  console.log("Connected to MongoDB server");

  const db = client.db(dbName);

  //deleteMany
  // db.collection('Todos').deleteMany({text: "Eat food"}).then((result) => {
  //   console.log(result);
  // },(err) => {
  //   console.log('Unable to fetch todos', err)
  // });
  db.collection('Users').deleteMany({name: 'Akash'}).then((result) => {
    console.log(result);
  });

  //deleteOne
  // db.collection('Todos').deleteOne({text: "Eat Lunch"}).then((result) => {
  //   console.log(result);
  // },(err) => {
  //   console.log('Unable to fetch todos', err)
  // });

  //findOneAndDelete
  // db.collection('Todos').findOneAndDelete({completed: false}).then((result) => {
  //   console.log(result);
  // });
  db.collection('Users').findOneAndDelete({_id: new ObjectID("5a72e14bd47f631832f14754")}).then((result) => {
    console.log(JSON.stringify(result, undefined, 2))
  });

  //client.close();
});