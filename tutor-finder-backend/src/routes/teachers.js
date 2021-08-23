const express = require('express');
const authController = require('../Controllers/authControllers');
const teacherController = require('../Controllers/teacherControllers');
const reviewRouter = require('../routes/review');
const router = express.Router();

// router.param('id', tourController.checkID);

router.use('/:teacherId/reviews', reviewRouter);

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