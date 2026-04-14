const vosArticlesModels = require('../models/vosArticlesModels');


exports.creerVosArticles = async(req ,res) =>{
    try {
        const {pseudo , theme , titre , description } = req.body

        await vosArticlesModels.creerVosArticle({
            pseudo,
            theme,
            titre,
            description
        });
        res.redirect('/dashboard');
    } catch (error) {
        console.log(error);
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
        res.status(200).json({ message: "Article supprimé avec succès" }); // ← ajouter
    } catch (error) {
        res.status(500).json({ message: "Erreur serveur" });
    }
}