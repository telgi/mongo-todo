// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

var obj = new ObjectID();
console.log(obj)

var user = { name: 'Terry', age: 29 };
var {name} = user;
console.log(name)

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');
  const db = client.db('TodoApp')

  db.collection('Users').insertOne({
    name: 'Terry Allitt',
    age: 29,
    location: 'London'
  }, (err, result) => {
    if (err) {
      return console.log('Unable to insert User', err);
    }
    console.log(JSON.stringify(result.ops, undefined, 2))
    console.log(result.ops[0]._id.getTimestamp());
  });

  client.close();
});
