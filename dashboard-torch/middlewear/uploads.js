const multer = require('multer');
const path = require('path');
const fs = require('fs');

// Fonction utilitaire pour créer le dossier s'il n'existe pas
const ensureDir = (dirPath) => {
    if (!fs.existsSync(dirPath)) {
        fs.mkdirSync(dirPath, { recursive: true });
    }
};

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        let uploadPath;

        if (file.mimetype.startsWith('image/')) {
            uploadPath = path.join(__dirname, '../public/uploads/images');
        } else if (file.mimetype.startsWith('video/')) {
            uploadPath = path.join(__dirname, '../public/uploads/videos');
        } else {
            return cb(new Error('Type de fichier non supporté'));
        }

        ensureDir(uploadPath); // ✅ Crée le dossier si absent
        cb(null, uploadPath);
    },
    filename: (req, file, cb) => {
        const uniqueName = Date.now() + path.extname(file.originalname);
        cb(null, uniqueName);
    }
});

const fileFilter = (req, file, cb) => {
    if (file.mimetype.startsWith('image/') || file.mimetype.startsWith('video/')) {
        cb(null, true);
    } else {
        cb(new Error('Type de fichier non supporté'), false);
    }
};

exports.upload = multer({ storage, fileFilter });