const mongooseConnect = require('./config');

const RepoModel = require('./models/repo');

const seedData = require('./seedData');


RepoModel
.remove({})
.catch((err) => {
  res.json({
    message: 'Nope, couldn\'t remove that from db',
    error: err
  });
})

seedData.data.forEach((repo, index) => {
  index = new RepoModel(repo);
  index.save()
  .then((repo) => {
    console.log(`Repo ${repo._id} saved!`);
    mongooseConnect.disconnect();
  })
  .catch((err) => {
    console.log(err);
  })
})