const db = require('../Config_Db/db');
const bcrypt = require('bcrypt');

// Lister tous les utilisateurs
exports.listerUtilisateurs = async (req, res) => {
    try {
        const [users] = await db.execute(
            "SELECT id, pseudo, email, role FROM users"
        );
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ message: "Erreur serveur", error });
    }
};

// Promouvoir un user en admin
exports.promoAdmin = async (req, res) => {
    try {
        const { id } = req.params;
        await db.execute(
            "UPDATE users SET role = 'admin' WHERE id = ?", [id]
        );
        res.status(200).json({ message: `Utilisateur ${id} promu admin.` });
    } catch (error) {
        res.status(500).json({ message: "Erreur serveur", error });
    }
};

// Rétrograder un admin en user
exports.retrograderUser = async (req, res) => {
    try {
        const { id } = req.params;

        // Sécurité : empêcher de se rétrograder soi-même
        if (parseInt(id) === req.user.id) {
            return res.status(400).json({ message: "Vous ne pouvez pas vous rétrograder vous-même." });
        }

        await db.execute(
            "UPDATE users SET role = 'user' WHERE id = ?", [id]
        );
        res.status(200).json({ message: `Utilisateur ${id} rétrogradé.` });
    } catch (error) {
        res.status(500).json({ message: "Erreur serveur", error });
    }
};

// Supprimer un utilisateur
exports.supprimerUtilisateur = async (req, res) => {
    try {
        const { id } = req.params;

        if (parseInt(id) === req.user.id) {
            return res.status(400).json({ message: "Vous ne pouvez pas vous supprimer vous-même." });
        }

        await db.execute("DELETE FROM users WHERE id = ?", [id]);
        res.status(200).json({ message: `Utilisateur ${id} supprimé.` });
    } catch (error) {
        res.status(500).json({ message: "Erreur serveur", error });
    }
};