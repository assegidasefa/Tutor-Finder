const express = require('express');
const authController = require('../Controllers/authControllers');
const studentController = require('../Controllers/studentControllers');

const router = express.Router();

// router.param('id', tourController.checkID);



 

 router.route('/').post(authController.protect,authController.restrictTo('student'),studentController.createStudent);
 router.route('/').get(authController.protect,authController.restrictTo('admin','student'),studentController.getStudents); 

router
  .route('/:id')
  .get(authController.protect,authController.restrictTo('student'),studentController.getStudent)
  .patch(studentController.uploadUserPhoto,
    studentController.resizeUserPhoto,authController.protect,authController.restrictTo('student'),studentController.updateStudent)
  .delete(authController.protect,authController.restrictTo('student'),studentController.deleteStudent);

module.exports = router;