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


/* setting up port & listen */
const PORT = process.env.PORT || 3001;
app.listen(PORT, function() {
  console.log(`listening on port ${PORT}`);
});