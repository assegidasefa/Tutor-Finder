const express = require('express');
const reviewController = require('../Controllers/reviewControllers');
const authController = require('../Controllers/authControllers');

const router = express.Router({ mergeParams: true });

// router.use(authController.protect);

router
  .route('/')
  .get(reviewController.getAllReviews)
  .post(
    authController.protect,
    authController.restrictTo('STUDENT'),
    reviewController.setTeacherStudentIds,
    reviewController.createReview
  );

router
  .route('/:id')
  .get(reviewController.getReview)
  .patch(
    reviewController.updateReview
  )
  .delete(
    authController.restrictTo('student'),
    reviewController.deleteReview
  );

module.exports = router;