const Request = require('../model/request');
const catchAsync = require('../utils/catchAsync');
const factory = require('./handlerFactory');
const express = require('express');

const app = express();



// use middleware

app.use(function(req,res,next) {
  JWT.verify(req.cookies['token'], process.env.JWT_SECRET, function(err, decodedToken) {
    if(err) { /* handle token err */ }
    else {
     req.userId = decodedToken.id;   // Add to req object
     next();
    }
  });
 });

// this is for student
exports.getSentRequest =  catchAsync(async (req, res, next) =>{
  // there must be user id 
  // console.log("This is the student id: " +req.userId);
  const response = await Request.find(req.params.id).populate(["studentId", "teacherId"])
  
  
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
  const response = await Request.find(req.params.id).populate(["studentId", "teacherId"])
  
  res.status(200).json({
    status: 'success',
    results: response.length,
    data: {
      requests:response
    }
  });
  
});
exports.getAllRequests = catchAsync(async (req, res, next) => {
  const requests = await Request.find().populate(["studentId","teacherId"]);

  // SEND RESPONSE
  res.status(200).json({
    status: 'success',
    results: requests.length,
    data: {
      requests
    }
  });
});



exports.getRequest = factory.getOne(Request,{path:'studentId'});
exports.createRequest = factory.createOne(Request,{path:'studentId'});
exports.updateRequest = factory.updateOne(Request,{path:'studentId'});
exports.deleteRequest = factory.deleteOne(Request);