const express = require('express');
const router = express.Router();
const articleModel = require('../models/articleModel');
const vosArticlesModels = require('../models/vosArticlesModels'); // ← ajouter

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

// ✅ AJOUTER — Vos articles
router.get('/vosArticles', async (req, res) => {
    try {
        const articles = await vosArticlesModels.trouverVosArticle();
        res.render('Admin/vosArticles', { articles, currentPage: 'vosArticles' });
    } catch (error) {
        console.log(error);
        res.status(500).send('Erreur serveur');
    }
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

// Supprimer (via formulaire POST avec method override)
router.post('/article/:id/delete', async (req, res) => {
    try {
        await articleModel.supprimerArticle(req.params.id);
        res.redirect('/dashboard');
    } catch (error) {
        res.status(500).send('Erreur serveur');
    }
});

module.exports = router;