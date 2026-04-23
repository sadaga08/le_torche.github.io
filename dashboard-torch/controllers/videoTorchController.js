const videoModels = require('../models/videoModels');

exports.creerVideoTorch = async (req, res) => {
    try {
        console.log(' req.body :', req.body);
        console.log(' req.file :', req.file);

        const { titre, description, categorie, duree } = req.body;

        // filename vient de req.file (multer), pas de req.body
        const filename = req.file?.filename || null;
        const thumbnail = null; // pas de thumbnail pour l'instant

        if (!filename) {
            return res.status(400).json({ message: "Fichier vidéo manquant" });
        }

        await videoModels.creerVideoTorch({
            titre:       titre       || null,
            description: description || null,
            filename:    filename,
            thumbnail:   thumbnail,
            categorie:   categorie   || null,
            duree:       duree       || null
        });

        res.redirect('/dashboard/videoTorch');

    } catch (error) {
        console.error(" Erreur :", error.message);
        res.status(500).json({ message: "Erreur lors de la création de la vidéo" });
    }
}

    exports.trouverVideoTorch = async(req , res)=>{
        try {
            const data = await videoModels.trouverVideoTorch();
            res.json(data);
        } catch (error) {
            res.status(500).json({ message: "Erreur serveur" });
        }
}


exports.trouverVideoTorchParId = async(req , res)=>{
    try {
        const { id } = req.params;
        const data = await videoModels.trouverVideoTorchParId(id);
        res.json(data);
    } catch (error) {
        res.status(500).json({ message: "Erreur serveur" });
    }
}


exports.supprimerVideoTorch = async(req, res) => {
    try {
        const { id } = req.params;
        const data = await videoModels.supprimerVideoTorch(id);
        res.json(data);
    } catch (error) {
        res.status(500).json({ message: "Erreur serveur" });
    }
}