const db = require("../Config_Db/db");

exports.creerVideoTorch = async ({ titre, description, filename, thumbnail, categorie, duree }) => {
    try {
        const [result] = await db.execute(
            "INSERT INTO videotorch (titre, description, filename, thumbnail, categorie, duree) VALUES (?, ?, ?, ?, ?, ?)",
            [titre, description, filename, thumbnail, categorie, duree]
        );
        return { id: result.insertId }; //  retourner le résultat
    } catch (error) {
        console.error(" Erreur création vidéo :", error.message);
        throw error;
    }
};
exports.trouverVideoTorch = async ()=>{
    try {
        const [rows] = await db.execute(
        "SELECT * FROM videotorch"
    )
    return rows;
    } catch (error) {
        console.log("Erreur lors de la récupération des vidéos");
        throw error;
    }
}

exports.trouverVideoTorchParId = async(id)=>{
    try {
        const [rows] = await db.execute(
            "SELECT * FROM videotorch WHERE id = ?",
            [id]
        )
    } catch (error) {
        console.log("Erreur lors de la récupération de la vidéo par ID");
    }
}

exports.supprimerVideoTorch = async(id) =>{
    try {
        const result = await db.execute("DELETE FROM videotorch WHERE id = ?", [id]);
       return result;
    } catch (error) {
        console.log("Erreur lors de la suppression de la vidéo");
        throw error;
    }
}