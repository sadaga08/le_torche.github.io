const express = require('express');
const router = express.Router();
const { verifyToken } = require('../middlewear/middlewear');
const { verifyAdmin } = require('../middlewear/adminMiddleware');
const adminController = require('../controllers/adminController');
const vosArticlesModels = require('../models/vosArticlesModels'); // ← ajout

// Double protection : JWT + rôle admin
router.use(verifyToken, verifyAdmin);

router.get('/users', adminController.listerUtilisateurs);
router.patch('/users/:id/promo', adminController.promoAdmin);
router.patch('/users/:id/retrograde', adminController.retrograderUser);
router.delete('/users/:id', adminController.supprimerUtilisateur);

//  Route dashboard admin articles
router.get('/adminArticles', async (req, res) => {
    try {
        const enAttente = await vosArticlesModels.trouverArticlesEnAttente();
        const tous      = await vosArticlesModels.trouverVosArticle();
        res.render('Admin/gestionArticles', { enAttente, tous });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Erreur serveur" });
    }
});

module.exports = router;