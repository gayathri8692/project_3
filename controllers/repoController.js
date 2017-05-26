const Repo = require('../db/models/repo.js');

const RepoController = {};

RepoController.index = (req, res) => {
  console.log('in controller show')
  Repo.find({}).exec()
  .then((repo) => {
    console.log(repo);
    res.json({
      message: 'OK',
      repo: repo
    })
  })
  .catch((err) => {
    res.json({
      message: 'NOT OK!!!!',
      error: err
    });
  })
}

RepoController.showOne = (req, res) => {
  console.log('in controller show')
Repo.find({"unit": 1}).exec()
  .then((repo) => {
    console.log(repo);
    res.json({
      message: 'ok',
      repo: repo
    })
  })
  .catch((err) => {
    res.json({
      message: 'NOT OK!!!!',
      error: err
    });
  })
}


RepoController.showTwo = (req, res) => {
  console.log('in controller show')
Repo.find({"unit": 2}).exec()
  .then((repo) => {
    console.log(repo);
    res.json({
      message: 'ok',
      repo: repo
    })
  })
  .catch((err) => {
    res.json({
      message: 'NOT OK!!!!',
      error: err
    });
  })
}

RepoController.showThree = (req, res) => {
  console.log('in controller show')
Repo.find({"unit": 3}).exec()
  .then((repo) => {
    console.log(repo);
    res.json({
      message: 'ok',
      repo: repo
    })
  })
  .catch((err) => {
    res.json({
      message: 'NOT OK!!!!',
      error: err
    });
  })
}


RepoController.create = (req, res) => {
   const resource = {"website": req.body.website, "url": req.body.url};
   const repo = new Repo({
      unit: req.body.unit,
      type: req.body.type,
      title: req.body.title,
      objective: req.body.objective,
      github: req.body.github,
      $push: {resources: resource}
    })
 repo.save((err, createdObject) => {
   if (err) {
     console.log(err);
        res.send(err);
 }
   res.send(createdObject);
  });

}


RepoController.delete = (req, res) => {
  Repo.findByIdAndRemove(req.params._id).exec()
  .then((repo) => {
    console.log(repo);
    res.json({
      message: 'deleted',
      repo: repo
    })
  })
  .catch((err) => {
    res.json({
      message: 'NOT OK!!!!',
      error: err
    });
  })
}


RepoController.update = (req, res) => {
  console.log(req.body._id);
  Repo.findOneAndUpdate({"_id":req.params._id}, {$set:{
      unit: req.body.unit,
      type: req.body.type,
      title: req.body.title,
      objective: req.body.objective,
      github: req.body.github
  }
  }).exec()
  .then((repo) => {
    res.json({
      message: 'edited',
      repo: repo
    })
  })
  .catch((err) => {
    res.json({
      message: 'NOT OK!!!!',
      error: err
    });
  })
}





module.exports = RepoController;



