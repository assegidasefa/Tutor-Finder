const Review = require('../model/review');
const factory = require('./handlerFactory');



exports.setTeacherStudentIds = (req, res, next) => {
  // Allow nested routes
  if (!req.body.teacher) req.body.teacher = req.params.teacherId;
  if (!req.body.student) req.body.student = req.user.id;
  next();
};

exports.getAllReviews = factory.getAll(Review);
exports.getReview = factory.getOne(Review);
exports.createReview = factory.createOne(Review);
exports.updateReview = factory.updateOne(Review);
exports.deleteReview = factory.deleteOne(Review);