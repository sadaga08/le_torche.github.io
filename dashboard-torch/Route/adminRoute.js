const express = require('express');
const router = express.Router();
const { verifyToken } = require('../middlewear/middlewear');
const { verifyAdmin } = require('../middlewear/adminMiddleware');
const adminController = require('../controllers/adminController');

// Double protection : JWT + rôle admin
router.use(verifyToken, verifyAdmin);

router.get('/users', adminController.listerUtilisateurs);
router.patch('/users/:id/promo', adminController.promoAdmin);
router.patch('/users/:id/retrograde', adminController.retrograderUser);
router.delete('/users/:id', adminController.supprimerUtilisateur);

module.exports = router;