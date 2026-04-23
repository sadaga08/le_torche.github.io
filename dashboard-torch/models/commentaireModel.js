const db = require('../Config_Db/db');

exports.ajouterCommentaire = async ({ article_id, pseudo, contenu }) => {
    const [result] = await db.execute(
        'INSERT INTO commentaires (article_id, pseudo, contenu) VALUES (?, ?, ?)',
        [article_id, pseudo, contenu]
    );
    return { id: result.insertId, article_id, pseudo, contenu };
};

exports.trouverCommentairesParArticle = async (article_id) => {
    const [rows] = await db.execute(
        'SELECT * FROM commentaires WHERE article_id = ? ORDER BY createdAt DESC',
        [article_id]
    );
    return rows;
};

exports.supprimerCommentaire = async (id) => {
    await db.execute('DELETE FROM commentaires WHERE id = ?', [id]);
};