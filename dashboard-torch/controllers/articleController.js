
// creer un article 
const models = require("../models/articleModel");

// CREER ARTICLE
exports.creerArticle = async (req, res) => {
    try {
        const { titre, content, date_publication, author_id, category } = req.body;

        const image = req.files?.image?.[0]?.filename || null;
        const video = req.files?.video?.[0]?.filename || null;

        await models.creerArticle({  
            titre,
            content,
            date_publication,
            image,
            video,
            author_id,
            category
        });

        res.redirect('/dashboard'); // ✅ redirige vers le dashboard après succès

    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Erreur upload article" });
    }
};
// trouver article par id


    // Ajouter try/catch pour chaque fonction :
exports.trouverArticleParId = async (req, res) => {
    try {
        const { id } = req.params;
        const data = await models.trouverArticleParId(id);
        res.json(data);
    } catch (error) {
        res.status(500).json({ message: "Erreur serveur" });
    }
};

exports.trouverArticle = async (req, res) => { 
    try {
        const data = await models.trouverArticle();
        res.json(data);
    } catch (error) {
        res.status(500).json({ message: "Erreur serveur" });
    }
};

// supprimer un article

exports.supprimerArticle = async(req , res)=>{
    try {
        const { id } = req.params;
        await models.supprimerArticle(id);
        res.json({ message: "Article supprimé avec succès" });
    } catch (error) {
        res.status(500).json({ message: "Erreur serveur" });
        console.log(error);
    }
}



