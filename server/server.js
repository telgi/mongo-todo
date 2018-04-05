const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/TodoApp');

var Todo = mongoose.model('Todo', {
  text: {
    type: String,
    required: true,
    minLength: 1,
    trim: true
  },
  completed: {
    type: Boolean,
    default: false
  },
  completedAt: {
    type: Date,
    default: null
  }
});

// var newTodo = new Todo({
//   text: 'Score a hattrick'
// });
//
// newTodo.save().then((doc) => {
//   console.log('Saved todo', doc);
// }, (e) => {
//   console.log('Unable to save todo')
// });

var User = mongoose.model('User', {
  text: {
    type: String,
    required: true,
    trim: true,
    minLength: 1
  }
});

var newUser = new User({
  text: 'hello@gmail.com'
});

newUser.save().then((doc) => {
  console.log(doc)
}, (e) => {
  console.log('Unable to save user')
});
