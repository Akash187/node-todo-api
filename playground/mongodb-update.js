const {MongoClient, ObjectID} = require('mongodb');

const url = "mongodb://localhost:27017";
const dbName = "TodoApp";

MongoClient.connect(url, (err, client) => {
  if(err){
    console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');
  const db = client.db(dbName);

  //
  // db.collection('Todos').findOneAndUpdate({
  //   _id: new ObjectID("5a7261f6d47f631832f13646")
  // },{
  //   $set: {
  //     completed: true
  //   }
  // },{
  //     returnOriginal: false
  // }).then((result) => {
  //   console.log(result);
  // });

  db.collection('Users').findOneAndUpdate({
    _id: new ObjectID("5a72e9f6d47f631832f14e58")
  },{
    $set: {
      name: 'Jenny'
    },
    $inc : {
      age: 5
    }
  },{
    returnOriginal: false
  }).then((result) => {
    console.log(result);
  });

  //client.close();
});