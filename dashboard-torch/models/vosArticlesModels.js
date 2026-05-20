const db = require('../Config_Db/db');
const crypto = require('crypto');

exports.creerVosArticle = async (vosArticle) => {
    const { pseudo, theme, titre, description } = vosArticle;
    const admin_token = crypto.randomBytes(32).toString('hex');
    try {
        const result = await db.execute(
            `INSERT INTO vosarticle (pseudo, theme, titre, description, statut, admin_token)
             VALUES (?, ?, ?, ?, 'en_attente', ?)`,
            [pseudo, theme, titre, description, admin_token]
        );
        return { result, admin_token };
    } catch (error) {
        console.log("mysql error insert");
        throw error;
    }
};

// Pour le public — seulement les approuvés
exports.trouverVosArticle = async () => {
    const [rows] = await db.execute(
        "SELECT * FROM vosarticle WHERE statut = 'approuve'"
    );
    return rows;
};

// Pour l'admin — tous les articles
exports.trouverTousVosArticles = async () => {
    const [rows] = await db.execute(
        "SELECT * FROM vosarticle"
    );
    return rows;
};

exports.trouverVosArticleParId = async (id) => {
    const [rows] = await db.execute(
        "SELECT * FROM vosarticle WHERE id = ?", [id]
    );
    return rows;
};

exports.trouverArticlesApprouves = async () => {
    const [rows] = await db.execute(
        "SELECT * FROM vosarticle WHERE statut = 'approuve'"
    );
    return rows;
};

exports.trouverArticlesEnAttente = async () => {
    const [rows] = await db.execute(
        "SELECT * FROM vosarticle WHERE statut = 'en_attente'"
    );
    return rows;
};

exports.approuverArticle = async (id) => {
    await db.execute(
        "UPDATE vosarticle SET statut = 'approuve', motif_rejet = NULL WHERE id = ?",
        [id]
    );
};

exports.approuverArticleParToken = async (token) => {
    const [rows] = await db.execute(
        "SELECT * FROM vosarticle WHERE admin_token = ?", [token]
    );
    if (!rows.length) throw new Error("Token invalide");
    await db.execute(
        "UPDATE vosarticle SET statut = 'approuve' WHERE admin_token = ?", [token]
    );
    return rows[0];
};

exports.rejeterArticle = async (id, motif) => {
    await db.execute(
        "UPDATE vosarticle SET statut = 'rejete', motif_rejet = ? WHERE id = ?",
        [motif, id]
    );
};

exports.supprimerVosArticle = async (id) => {
    return await db.execute("DELETE FROM vosarticle WHERE id = ?", [id]);
};