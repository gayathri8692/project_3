const mongoose = require('mongoose');

const dbURI = 'mongodb://localhost/adabase'

mongoose.connect(dbURI);

// mongoose.Promise = global.Promise;
// mongoose.connect('mongodb://10.7.0.3:27107/data/db');


mongoose.connection.on('connected', () => {
  console.log(`Mongoose default connection open to ${dbURI}`);
});

mongoose.connection.on('error', (err) => {
  console.log(`Mongoose default connection error: ${err}`);
});
module.exports = mongoose;


