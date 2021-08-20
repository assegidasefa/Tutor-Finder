const Request = require('../model/request');
const APIFeatures = require('../utils/apiFeatures');
const catchAsync = require('../utils/catchAsync');
const AppError = require('../utils/appError');


// this is for student
exports.getSentRequest =  catchAsync(async (req, res, next) =>{
  const response = await Request.find({studentId: req.query.studentId}).populate(["studentId", "teacherId"])
  res.status(200).json({
    status: 'success',
    results: response.length,
    data: {
      requests:response
    }
  });

    
});
exports.getReceivedRequest =catchAsync( async (req, res, next) =>{
  const response = await Request.find({teacherId: req.query.teacherId}).populate(["studentId", "teacherId"])
  res.status(200).json({
    status: 'success',
    results: response.length,
    data: {
      requests:response
    }
  });
  
});



exports.getRequests = catchAsync(async (req, res, next) => {
  const requests = await Request.find().populate('studentId');

  // SEND RESPONSE
  res.status(200).json({
    status: 'success',
    results: requests.length,
    data: {
      requests
    }
  });
});
exports.getRequest = catchAsync(async (req, res, next) => {
  const request = await Request.findById(req.params.id).populate('studentId', "teacherId");
  // Tour.findOne({ _id: req.params.id })

  if (!request) {
    return next(new AppError('No request found with that ID', 404));
  }

  res.status(200).json({
    status: 'success',
    data: {
      request
    }
  });
});

exports.createRequest = catchAsync(async (req, res, next) => {
  const newRequest = await Request.create(req.body);

  res.status(201).json({
    status: 'success',
    data: {
      request: newRequest 
    }
  });
});

exports.updateRequest = catchAsync(async (req, res, next) => {
  const request = await Request.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true
  });

  if (!request) {
    return next(new AppError('No request found with that ID', 404));
  }

  res.status(200).json({
    status: 'success',
    data: {
      request
    }
  });
});

exports.deleteRequest = catchAsync(async (req, res, next) => {
  const request = await Request.findByIdAndDelete(req.params.id);

  if (!request) {
    return next(new AppError('No request found with that ID', 404));
  }

  res.status(204).json({
    status: 'success',
    data: null
  });
});