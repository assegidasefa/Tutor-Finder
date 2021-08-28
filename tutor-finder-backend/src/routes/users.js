const express = require('express');
const userController = require('../Controllers/userControllers');
const authController = require('../Controllers/authControllers');
const router = express.Router();





router.post('/signup', authController.signup);
router.post('/login', authController.login);
router.post('/forgotPassword', authController.forgotPassword);
router.patch('/resetPassword/:token', authController.resetPassword);

// Protect all routes after this middleware
//router.use(authController.protect);

router.patch('/updateMyPassword',authController.updatePassword);
router.get('/me', userController.getMe, userController.getUser);
router.delete('/deleteMe',  userController.deleteMe);

// user updating the profile
router.route('/updateMe/:id').patch(userController.uploadUserPhoto,userController.resizeUserPhoto,userController.updateMe);

router.route('/admin').get(userController.getAllUsers)
  router.route('/').post(userController.createUser);

router
  .route('/:id')
  .get(userController.getUser)
  .delete(userController.deleteUser);

module.exports = router;