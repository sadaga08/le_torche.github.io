const db = require('../Config_Db/db')



exports.creerVosArticle = async (vosArticle) =>{
    const {pseudo , theme , titre , description , } = vosArticle
    try {
        const result = await db.execute(
            "INSERT INTO vosarticle (pseudo, theme, titre, description) VALUES(?,?,?,?)",
            [pseudo , theme , titre , description]
        );
        return result
    } catch (error) {
        console.log("mysql error insert");
        throw error;
    }
}

exports.trouverVosArticle = async () =>{
    try {
        const [rows] = await db.execute(
            "SELECT * FROM vosarticle"
        );
        return rows;
    } catch (error) {
        console.log("mysql error select");
        throw error;
    }
}

//  Après
exports.trouverVosArticleParId = async(id)=>{ // ← id
    const [rows] = await db.execute(
        "SELECT * FROM vosarticle WHERE id = ?", // ← id
        [id]
    );
    return rows; // ← manquait dans le catch aussi
}
exports.supprimerVosArticle = async(id) =>{
    try {
        return await db.execute(
            "DELETE from vosarticle WHERE id = ?",
            [id]
        );
    } catch (error) {
        console.log("mysql error supprimer vos article par id ");
        throw error;
    }
}