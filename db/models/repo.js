const mongoose = require('mongoose');
const db = require('../config.js');


const RepoSchema = new mongoose.Schema({
  unit: Number,
  type: String,
  title: String,
  objective: String,
  github: String,
  resources: [
    {
      title: String,
      url: String
    }
  ]
});


const Repo = mongoose.model('repo', RepoSchema);

module.exports = Repo;
// const Repo = {};

//Repo.findOne = () => {
  //return db.repos.find({"unit":1, "type":"LEC"});
//};

// Repo.findReposForUnitTwo = () => {
//   return db.repos.find({"unit":1, "type":"LEC"});
// };

// Repo.findReposForUnitThree = () => {
//   return db.repos.find({"unit":1, "type":"LEC"});
// };

// Repo.findReposForUnitFour = () => {
//   return db.repos.find({"unit":1, "type":"LEC"});
// };

// Repo.findRepoById = (id) => {
//   return db.oneOrNone(
    //MONGO QUERY FOR REPO BY ID
//     [id]
//   );
// };





























