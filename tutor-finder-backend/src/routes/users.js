const express = require('express');
const userController = require('../Controllers/userControllers');
const authController = require('../Controllers/authControllers');

const router = express.Router();

router.post('/signup', authController.signup);
router.post('/login', authController.login);
router.post('/forgotPassword', authController.forgotPassword);
router.patch('/resetPassword/:token', authController.resetPassword);

// Protect all routes after this middleware
router.use(authController.protect);

router.patch('/updateMyPassword',authController.updatePassword);
router.patch('/updateMe',userController.updateMe);
router.get('/me', userController.getMe, userController.getUser);
router.delete('/deleteMe',  userController.deleteMe);

//only Admin is authorized for the following function 
router.use(authController.restrictTo('admin'));


router
  .route('/')
  .get(userController.getAllUsers)
  .post(userController.createUser);

router
  .route('/:id')
  .get(userController.getUser)
  .patch(userController.updateUser)
  .delete(userController.deleteUser);

module.exports = router;