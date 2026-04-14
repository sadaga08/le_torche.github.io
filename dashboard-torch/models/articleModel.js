const db = require('../Config_Db/db');

// creer un article 

exports.creerArticle = async (article) => {
    try {
        const { titre, content, date_publication, image, video, author_id, category } = article;
        const result = await db.execute(
            "INSERT INTO articles (titre, content, date_publication, image, video, author_id, category) VALUES (?, ?, ?, ?, ?, ?, ?)",
            [titre, content, date_publication, image, video, author_id, category]
        );
        return result;
    } catch (error) {
        console.log("MYSQL INSERT ERROR ");
        console.log(error);
        throw error;
    }
};
// trouver l'article 
exports.trouverArticle = async () => {
    try {
        const [rows] = await db.execute(
            "SELECT * FROM articles"
        );
        return rows;
    } catch (error) {
        console.log("MYSQL ERROR ");
        console.log(error);
        throw error;
    }
};



exports.trouverArticleParId = async (id) => {
    try {
        const [rows] = await db.execute(
            "SELECT * FROM articles WHERE id = ?",
            [id]
        );
        return rows[0]; // retourne un seul article
    } catch (error) {
        console.log("MYSQL ERROR ");
        console.log(error);
        throw error;
    }
};

// supprimer un article

exports.supprimerArticle = async(id) =>{
    return await db.execute(
        "DELETE FROM articles WHERE id = ? ",
        [id]
    )
}