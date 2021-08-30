const express = require('express');
const adminController = require('../Controllers/adminControllers');
const router = express.Router();


router.post('/signup', adminController.signup);
router.post('/login', adminController.login);
router.post('/forgotPassword', adminController.forgotPassword);
router.patch('/resetPassword/:token',adminController.resetPassword);

// Protect all routes after this middleware
//router.use(authController.protect);

router.patch('/updateMyPassword',adminController.updatePassword);
module.exports = router;