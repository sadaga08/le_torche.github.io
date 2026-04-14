const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const models = require('../models/Usermodels');

// INSCRIPTION
exports.inscription = async (req, res) => {
        console.log("BODY =", req.body);

    try {
        const { pseudo, email, password } = req.body;

        // vérifier si user existe
        const exist = await models.trouverUserparEmail(email);
        if (exist) {
            return res.status(400).json({ message: "Email déjà utilisé" });
        }

        const hashPassword = await bcrypt.hash(password, 10);

        await models.crerUser({
            pseudo,
            email,
            password: hashPassword
        });

        res.json({ message: "Utilisateur créé avec succès" });

    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// CONNEXION
// CONNEXION
exports.connexion = async (req, res) => {
    try {
        const { email, password } = req.body;

        const user = await models.trouverUserparEmail(email);

        if (!user) {
            return res.status(404).json({ message: "Utilisateur non trouvé" });
        }

        const valider = await bcrypt.compare(password, user.password);

        if (!valider) {
            return res.status(401).json({ message: "Mot de passe incorrect" });
        }

        const token = jwt.sign(
            { 
                id: user.id, 
                pseudo: user.pseudo, 
                email: user.email,
                role: user.role
            },
            process.env.JWT_SECRET,
            { expiresIn: '24h' }
        );

        res.json({ message: "Connexion réussie", token, role: user.role });

    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};