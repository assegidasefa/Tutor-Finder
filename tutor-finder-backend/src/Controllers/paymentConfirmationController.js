const paymentConfirmation = require('../model/paymentConfirmation');
const factory = require('./handlerFactory');
// const catchAsync = require('./../utils/catchAsync');

exports.getAllPaymentConfirmation = factory.getAll(paymentConfirmation);
exports.getPaymentConfrimation = factory.getOne(paymentConfirmation);
exports.createpaymentConfirmation = factory.createOne(paymentConfirmation);
exports.updatepaymentConfirmation = factory.updateOne(paymentConfirmation);
exports.deletepaymentConfirmation = factory.deleteOne(paymentConfirmation);