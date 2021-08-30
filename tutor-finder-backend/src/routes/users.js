const express = require('express');
const userController = require('../Controllers/userControllers');
const authController = require('../Controllers/authControllers');
const adminController = require('../Controllers/adminControllers');
const router = express.Router();
const reviewRouter = require('./review');
const requestRouter = require('./requests');



//used for review create 
router.use('/:teacherId/reviews', reviewRouter);
//used for the requests
router.use('/teacher/:teacherId/requests',requestRouter);






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
router.route('/updateUserDetail').patch(userController.uploadUserPhoto,userController.resizeUserPhoto,authController.protect,authController.restrictTo('STUDENT','TEACHER'),userController.updateMe);

router.route('/admin').get(adminController.protect,adminController.restrictTo('admin'),userController.getAllUsers)
  router.route('/').post(userController.createUser);

router
  .route('/:id')
  .get(userController.getUser)
  .delete(adminController.protect,adminController.restrictTo('admin'),userController.deleteUser);

module.exports = router;