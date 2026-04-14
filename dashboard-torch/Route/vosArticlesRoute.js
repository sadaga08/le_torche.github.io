const express = require('express');
const router = express.Router();
const vosArticlesControllers = require('../controllers/vosArticlesControllers');
const vosArticlesModels = require('../models/vosArticlesModels');


router.post('/', vosArticlesControllers.creerVosArticles);

router.get('/', vosArticlesControllers.trouverVosArticles);

router.get('/:id', vosArticlesControllers.trouverVosArticlesParId);

router.delete('/:id', vosArticlesControllers.supprimerVosArticles);

module.exports = router;