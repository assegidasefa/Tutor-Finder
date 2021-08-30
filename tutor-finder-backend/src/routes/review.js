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
    authController.restrictTo('STUDENT'),
    reviewController.setTeacherStudentIds,
    reviewController.createReview
  );
  router
  .route('/:id')
  .get(reviewController.getReview)
  .patch(
    authController.restrictTo('STUDENT'),
    reviewController.updateReview
  )
  .delete(
    authController.restrictTo('STUDENT'),
    reviewController.deleteReview
  );




module.exports = router;