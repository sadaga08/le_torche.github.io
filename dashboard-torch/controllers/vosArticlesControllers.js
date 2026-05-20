const vosArticlesModels = require('../models/vosArticlesModels');
const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL_ADMIN,
        pass: process.env.EMAIL_PASSWORD
    }
});

const envoyerEmailValidation = async (article, token) => {
    const approveUrl = `${process.env.BASE_URL}/api/vosArticles/valider-token/${token}`;
    const adminUrl   = `${process.env.BASE_URL}/dashboard/adminArticles`;

    await transporter.sendMail({
        from: process.env.EMAIL_ADMIN,
        to: process.env.EMAIL_ADMIN,
        subject: `[Le Torch] Nouvel article à valider : "${article.titre}"`,
        html: `
            <h2>Nouvel article soumis</h2>
            <p><strong>Pseudo :</strong> ${article.pseudo}</p>
            <p><strong>Thème :</strong> ${article.theme}</p>
            <p><strong>Titre :</strong> ${article.titre}</p>
            <p><strong>Description :</strong> ${article.description}</p>
            <hr/>
            <a href="${approveUrl}" style="background:#22c55e;color:white;padding:10px 20px;border-radius:6px;text-decoration:none;margin-right:10px;">
                ✅ Approuver directement
            </a>
            <a href="${adminUrl}" style="background:#3b82f6;color:white;padding:10px 20px;border-radius:6px;text-decoration:none;">
                🛠 Gérer dans le dashboard
            </a>
        `
    });
};

exports.creerVosArticles = async (req, res) => {
    try {
        const { pseudo, theme, titre, description } = req.body;
        const { result, admin_token } = await vosArticlesModels.creerVosArticle({
            pseudo, theme, titre, description
        });

        await envoyerEmailValidation({ pseudo, theme, titre, description }, admin_token);

        // ✅ JSON au lieu de redirect — React gère la navigation
        res.status(201).json({ 
            message: "Article soumis avec succès",
            statut: "en_attente"
        });

    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Erreur lors de la création de l'article" });
    }
};

exports.validerParToken = async (req, res) => {
    try {
        const { token } = req.params;
        const article = await vosArticlesModels.approuverArticleParToken(token);
        res.send(`
            <h2 style="font-family:sans-serif;color:#22c55e;">
                ✅ Article "${article.titre}" approuvé avec succès !
            </h2>
            <a href="${process.env.BASE_URL}/dashboard/adminArticles" style="font-family:sans-serif;">
                Retour au dashboard
            </a>
        `);
    } catch (error) {
        res.status(400).send("<h2>Token invalide ou déjà utilisé.</h2>");
    }
};

// ✅ UNE SEULE version — redirige vers /dashboard/adminArticles
exports.approuverArticle = async (req, res) => {
    try {
        await vosArticlesModels.approuverArticle(req.params.id);
        res.redirect('/dashboard/adminArticles');
    } catch (error) {
        res.status(500).json({ message: "Erreur serveur" });
    }
};

// ✅ UNE SEULE version
exports.rejeterArticle = async (req, res) => {
    try {
        const { motif } = req.body;
        await vosArticlesModels.rejeterArticle(req.params.id, motif || "Aucun motif précisé");
        res.redirect('/dashboard/adminArticles');
    } catch (error) {
        res.status(500).json({ message: "Erreur serveur" });
    }
};

exports.trouverVosArticles = async (req, res) => {
    try {
        const data = await vosArticlesModels.trouverVosArticle();
        res.json(data);
    } catch (error) {
        res.status(500).json({ message: "Erreur serveur" });
    }
};

exports.trouverVosArticlesParId = async (req, res) => {
    try {
        const { id } = req.params;
        const data = await vosArticlesModels.trouverVosArticleParId(id);
        res.json(data);
    } catch (error) {
        res.status(500).json({ message: "Erreur serveur" });
    }
};

exports.supprimerVosArticles = async (req, res) => {
    try {
        await vosArticlesModels.supprimerVosArticle(req.params.id);
        res.redirect('/dashboard/vosArticles');
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Erreur serveur" });
    }
};