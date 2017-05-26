const express = require('express');
const repoController = require('../controllers/repoController.js');

const repoRoutes = express.Router();


repoRoutes.get('/', repoController.index);
repoRoutes.put('/:_id', repoController.update);
repoRoutes.get('/one', repoController.showOne);
repoRoutes.get('/two', repoController.showTwo);
repoRoutes.get('/three', repoController.showThree);

repoRoutes.post('/one', repoController.create);
repoRoutes.post('/two', repoController.create);
repoRoutes.post('/three', repoController.create);

repoRoutes.delete('/:_id', repoController.delete);






module.exports = repoRoutes;


