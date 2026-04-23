const vosArticlesModels = require('../models/vosArticlesModels');

exports.creerVosArticles = async (req, res) => {
    try {
        const { pseudo, theme, titre, description } = req.body;

        const article = await vosArticlesModels.creerVosArticle({
            pseudo,
            theme,
            titre,
            description
        });

        res.status(201).json({ 
            message: "Article créé avec succès",
            article 
        });

    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Erreur lors de la création de l'article" });
    }
}

exports.trouverVosArticles = async(req , res)=>{
    try {
        const data = await vosArticlesModels.trouverVosArticle();
        res.json(data);
    } catch (error) {
        res.status(500).json({ message: "Erreur serveur" });
    }
}

exports.trouverVosArticlesParId = async(req , res)=>{
    try {
        const {id}  = req.params;
        const data = await vosArticlesModels.trouverVosArticleParId(id);
        res.json(data);
    } catch (error) {
        res.status(500).json({ message: "Erreur serveur" });
    }
}
// 
exports.supprimerVosArticles = async(req, res) => {
    try {
        const {id} = req.params;
        await vosArticlesModels.supprimerVosArticle(id);
        redirection('/dashboard/vosArticles');
        // res.status(200).json({ message: "Article supprimé avec succès" }); 

    } catch (error) {
        res.status(500).json({ message: "Erreur serveur" });
    }
}