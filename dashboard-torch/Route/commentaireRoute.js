const express = require('express');
const router = express.Router();
const commentaireController = require('../controllers/commentaireController');

// Récupérer les commentaires d'un article
router.get('/:article_id', commentaireController.trouverCommentaires);

// Ajouter un commentaire
router.post('/:article_id', commentaireController.ajouterCommentaire);

// Supprimer un commentaire (admin)
router.delete('/:id', commentaireController.supprimerCommentaire);

module.exports = router;