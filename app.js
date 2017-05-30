const express = require('express');
const path = require('path');
const logger = require('morgan');
const mongoose = require('mongoose');
const react = require('react');
const cors = require('cors');
const bodyParser = require('body-parser')
const app = express();

const connect = require ('./db/config.js');

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));

//Importing routes
const repoRoute = require('./routes/repos.js')
app.use('/api/units', repoRoute);


app.use(express.static(path.join(__dirname, 'build')));

// place whatever routes you need to use for your API above a catchall for anything
// that should send the React app back.
app.get('/api', apiRoutes)
app.get('/*', function (req, res) {
   res.sendFile(path.join(__dirname, 'build', 'index.html'));
 });



/* setting up port & listen */
const PORT = process.env.PORT || 3001;
app.listen(PORT, function() {
  console.log(`listening on port ${PORT}`);
});