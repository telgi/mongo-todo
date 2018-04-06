const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');

var id = '5ac7f6867d8f63250f1fe0f3';

if (!ObjectID.isValid(id)) {
  console.log('ID not valid');
}

Todo.find({
  _id: id
}).then((todos) => {
  console.log('Todos', todos);
})

Todo.findOne({
  _id: id
}).then((todo) => {
  console.log('Todo', todo);
})

Todo.findById(id).then((todo) => {
  if (!todo) {
    return console.log('id not found')
  }
  console.log('Todo', todo);
}).catch((e) => console.log(e))
