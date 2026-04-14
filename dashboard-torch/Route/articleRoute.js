const express = require('express');
const router = express.Router();
const articleController = require('../controllers/articleController');
const { upload } = require('../middlewear/uploads');

router.post('/', upload.fields([
    { name: 'image', maxCount: 1 },
    { name: 'video', maxCount: 1 }
]), articleController.creerArticle);

router.get('/', articleController.trouverArticle);

router.get('/', articleController.trouverArticle);

router.get('/:id', articleController.trouverArticleParId);

module.exports = router;