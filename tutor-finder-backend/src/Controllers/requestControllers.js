const Request = require('../model/request');
const catchAsync = require('../utils/catchAsync');
const factory = require('./handlerFactory');




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
//for teachers
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

exports.getRequests =  factory.getAll(Request,{path:'studentId'});
exports.getRequest = factory.getOne(Request,{path:'studentId'});
exports.createRequest = factory.createOne(Request,{path:'studentId'});
exports.updateRequest = factory.updateOne(Request,{path:'studentId'});
exports.deleteRequest = factory.deleteOne(Request);