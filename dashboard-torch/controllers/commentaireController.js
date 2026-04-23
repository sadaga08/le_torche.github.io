const commentaireModel = require('../models/commentaireModel');

exports.ajouterCommentaire = async (req, res) => {
    try {
        const { pseudo, contenu } = req.body;
        const { article_id } = req.params;

        if (!pseudo || !contenu) {
            return res.status(400).json({ message: "Pseudo et contenu requis" });
        }

        const commentaire = await commentaireModel.ajouterCommentaire({
            article_id,
            pseudo,
            contenu
        });

        res.status(201).json(commentaire);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Erreur serveur" });
    }
};

exports.trouverCommentaires = async (req, res) => {
    try {
        const { article_id } = req.params;
        const data = await commentaireModel.trouverCommentairesParArticle(article_id);
        res.json(data);
    } catch (error) {
        res.status(500).json({ message: "Erreur serveur" });
    }
};

exports.supprimerCommentaire = async (req, res) => {
    try {
        const { id } = req.params;
        await commentaireModel.supprimerCommentaire(id);
        res.status(200).json({ message: "Commentaire supprimé" });
    } catch (error) {
        res.status(500).json({ message: "Erreur serveur" });
    }
};