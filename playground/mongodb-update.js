// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');
  const db = client.db('TodoApp')

  db.collection('Todos').findOneAndUpdate({
    _id: new ObjectID("5ac6971ab20e73de26b35014")
  }, {
    $set: {
      completed: false
    }
  }, {
    returnOriginal: false
  }).then((result) => {
    console.log(result)
  })

  // client.close();
});
