const express = require('express');
const reviewController = require('../Controllers/reviewControllers');
const authController = require('../Controllers/authControllers');

const router = express.Router({ mergeParams: true });

router.use(authController.protect);

router
  .route('/')
  .get(reviewController.getAllReviews)
  .post(
    authController.restrictTo('student'),
    //reviewController.setTeacherStudentIds,
    reviewController.createReview
  );

router
  .route('/:id')
  .get(reviewController.getReview)
  .patch(
    authController.restrictTo('student', 'admin'),
    reviewController.updateReview
  )
  .delete(
    authController.restrictTo('student', 'admin'),
    reviewController.deleteReview
  );

module.exports = router;