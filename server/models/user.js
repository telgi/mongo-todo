var mongoose = require('mongoose');

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

module.exports = {User}
