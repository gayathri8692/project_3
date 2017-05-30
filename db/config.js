const mongoose = require('mongoose');

const dbURI = 'mongodb://localhost/adabase'

mongoose.connect(dbURI);


mongoose.connection.on('connected', () => {
  console.log(`Mongoose default connection open to ${dbURI}`);
});

mongoose.connection.on('error', (err) => {
  console.log(`Mongoose default connection error: ${err}`);
});
module.exports = mongoose;


