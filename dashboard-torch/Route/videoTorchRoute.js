const express = require('express');
const router = express.Router();
const videoTorchController = require('../controllers/videoTorchController');
const { upload } = require('../middlewear/uploads'); // ✅ import manquant

router.post('/', upload.single('video'), videoTorchController.creerVideoTorch);
router.get('/', videoTorchController.trouverVideoTorch);
router.get('/:id', videoTorchController.trouverVideoTorchParId);
router.delete('/:id', videoTorchController.supprimerVideoTorch);

module.exports = router;