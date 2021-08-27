const PaymentOption = require('../model/paymentOption');
const factory = require('./handlerFactory');
// const catchAsync = require('./../utils/catchAsync');

exports.getAllPaymentOption = factory.getAll(PaymentOption);
exports.getPaymentOption = factory.getOne(PaymentOption);
exports.createPaymentOption = factory.createOne(PaymentOption);
exports.updatePaymentOption = factory.updateOne(PaymentOption);
exports.deletePaymentOption = factory.deleteOne(PaymentOption);