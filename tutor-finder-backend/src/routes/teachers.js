const express = require('express');
const requestController = require('../controllers/requestControllers');
const authController = require('../Controllers/authControllers');
const teacherController = require('../Controllers/teacherControllers');
const router = express.Router();




// router.param('id', tourController.checkID);



//router.route('/').get(authController.protect,authController.restrictTo('teacher'),requestController.getRequests);
router.route('/').post( 
authController.protect,authController.restrictTo('teacher'),teacherController.createTeacher);
router.route('/').get(teacherController.getTeachers);
router
  .route('/:id')
  .get(teacherController.getTeacher)
  .patch( teacherController.uploadUserPhoto,
    teacherController.resizeUserPhoto,teacherController.updateTeacher)
  .delete(teacherController.deleteTeacher);

module.exports = router;