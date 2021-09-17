const express = require('express');
const paymentConfirmationController = require('../controllers/paymentConfirmationController');
const authController = require('../Controllers/authControllers');

const router = express.Router();

router.use(authController.protect);

router
  .route('/')
  .get(paymentConfirmationController.getAllPaymentConfirmation)
  .post(
    authController.protect,
     authController.restrictTo('student'),
 paymentConfirmationController.createpaymentConfirmation
  );

router
  .route('/:id')
  .get(paymentConfirmationController.getPaymentConfrimation)
  .patch(
    authController.restrictTo('student'),
 paymentConfirmationController.updatepaymentConfirmation
  )
  .delete(
    authController.restrictTo('student'),
 paymentConfirmationController.deletepaymentConfirmation
  );

module.exports = router;