const express = require('express');
const paymentOptionController = require('../controllers/paymentOptionController');
const authController = require('../Controllers/authControllers');

const router = express.Router();

router.use(authController.protect);

router
  .route('/')
  .get(paymentOptionController.getAllPaymentOption)
  .post(
    authController.restrictTo('STUDENT'),
    paymentOptionController.createPaymentOption
  );

router
  .route('/:id')
  .get(paymentOptionController.getPaymentOption)
  .patch(
    authController.restrictTo('student', 'admin'),
    paymentOptionController.updatePaymentOption
  )
  .delete(
    authController.restrictTo('student', 'admin'),
    paymentOptionController.deletePaymentOption
  );

module.exports = router;