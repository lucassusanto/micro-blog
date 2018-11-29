const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/agenda_kota')
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Could not connect...', err));

const userSchema = new mongoose.Schema({
  name: String,
  age: Number
});

const User = mongoose.model('User', userSchema);

async function createUser() {
  const user = new User({
    name: "Ananda",
    age: 21
  });

  const result = await user.save();
  console.log(result);
}

createUser();