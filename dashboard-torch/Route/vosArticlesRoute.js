const express = require('express');
const router = express.Router();
const vosArticlesModels = require('../models/vosArticlesModels');
const ctrl = require('../controllers/vosArticlesControllers');

router.post('/',                        ctrl.creerVosArticles);
router.get('/',                         ctrl.trouverVosArticles);

// ✅ Toutes les routes fixes AVANT /:id
router.get('/valider-token/:token',     ctrl.validerParToken);
router.get('/approuves', async (req, res) => {
    try {
        const data = await vosArticlesModels.trouverArticlesApprouves();
        res.json(data);
    } catch (error) {
        res.status(500).json({ message: "Erreur serveur" });
    }
});

// /:id en dernier
router.get('/:id',                      ctrl.trouverVosArticlesParId);
router.post('/:id/supprimer',           ctrl.supprimerVosArticles);
router.post('/:id/approuver',           ctrl.approuverArticle);
router.post('/:id/rejeter',             ctrl.rejeterArticle);

module.exports = router;