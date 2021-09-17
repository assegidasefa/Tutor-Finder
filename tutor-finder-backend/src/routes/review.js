const express = require('express');
const reviewController = require('../Controllers/reviewControllers');
const authController = require('../Controllers/authControllers');
const adminController = require('../Controllers/adminControllers');

const router = express.Router({ mergeParams: true });

// router.use(authController.protect);

router
  .route('/')
  .get(adminController.protect,adminController.restrictTo('admin'),reviewController.getAllReviews)
  .post(
    authController.protect,
    authController.restrictTo('student'),
    reviewController.setTeacherStudentIds,
    reviewController.createReview
  );
  router
  .route('/:id')
  .get(
    authController.protect,
    authController.restrictTo('teacher'),
    reviewController.setTeacherStudentIds,
    reviewController.getReview)
  .patch(
    authController.restrictTo('student'),
    reviewController.updateReview
  )
  .delete(
    authController.restrictTo('student'),
    reviewController.deleteReview
  );




module.exports = router;