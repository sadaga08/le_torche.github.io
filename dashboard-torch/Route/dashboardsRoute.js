const express = require('express');
const router = express.Router();
const articleModel = require('../models/articleModel');
const vosArticlesModels = require('../models/vosArticlesModels');
const videoModels = require('../models/videoModels'); 
// Dashboard principal
router.get('/', async (req, res) => {
    try {
        const articles = await articleModel.trouverArticle();
        res.render('Admin/dashboard', { articles });
    } catch (error) {
        console.log(error);
        res.status(500).send('Erreur serveur');
    }
});

// Formulaire création
router.get('/create', (req, res) => {
    res.render('Admin/createArticle');
});

// Vos articles (étudiants)
router.get('/vosArticles', async (req, res) => {
    try {
        const articles = await vosArticlesModels.trouverVosArticle();
        res.render('Admin/vosArticles', { articles, currentPage: 'vosArticles' });
    } catch (error) {
        console.log(error);
        res.status(500).send('Erreur serveur');
    }
});

// ✅ Vidéos — route manquante
router.get('/videoTorch', async (req, res) => {
    try {
        const videotorch = await videoModels.trouverVideoTorch();
        res.render('Admin/videoTorch', { videotorch, currentPage: 'videoTorch' });
    } catch (error) {
        console.log(error);
        res.status(500).send('Erreur serveur');
    }
});

// 
router.get('/videoTorch/create', (req, res) => {
    res.render('Admin/createVideo');
});

// Détail d'un article
router.get('/article/:id', async (req, res) => {
    try {
        const article = await articleModel.trouverArticleParId(req.params.id);
        if (!article) return res.status(404).send('Article non trouvé');
        res.render('Admin/articles', { article });
    } catch (error) {
        res.status(500).send('Erreur serveur');
    }
});

// Supprimer un article
router.post('/article/:id/delete', async (req, res) => {
    try {
        await articleModel.supprimerArticle(req.params.id);
        res.redirect('/dashboard');
    } catch (error) {
        res.status(500).send('Erreur serveur');
    }
});

module.exports = router;