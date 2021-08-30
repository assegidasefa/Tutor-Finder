const Request = require('../model/request');
const catchAsync = require('../utils/catchAsync');
const factory = require('./handlerFactory');
const express = require('express');

const app = express();

//setting ids

exports.setTeacherStudentIds = (req, res, next) => {
  // Allow nested routes
  if (!req.body.teacher) req.body.teacher = req.params.teacherId;
  if (!req.body.student) req.body.student = req.user.id;
  next();
};

// use middleware
// this is for student
exports.getStudentRequest =  catchAsync(async (req, res, next) =>{

  const response = await Request.find({student:req.user.id}).populate(["student", "teacher"])
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

  const response = await Request.find({teacher:req.user.id}).populate(["student", "teacher"])
  
  res.status(200).json({
    status: 'success',
    results: response.length,
    data: {
      requests:response
    }
  });
  
});

exports.acceptRequest =catchAsync( async (req, res, next) =>{

  const response = await Request.findByIdAndUpdate(req.params.id, {status:"WAITING"}, {new: true}).populate(["student", "teacher"])
  
  res.status(200).json({
    status: 'success',
    data: {
      requests:response
    }
  });
  
});

exports.approvedRequest =catchAsync( async (req, res, next) =>{

  const response = await Request.findByIdAndUpdate(req.params.id, {status:"ACCEPTED"}, {new: true}).populate(["student", "teacher"])
  
  res.status(200).json({
    status: 'success',
    data: {
      requests:response
    }
  });
  
});

exports.getAll = catchAsync(async (req, res, next) => {
  const requests = await Request.find().populate(["student","teacher"]);

  // SEND RESPONSE
  res.status(200).json({
    status: 'success',
    results: requests.length,
    data: {
      requests
    }
  });
});

exports.getRequest = factory.getOne(Request,{path:'student'});
exports.getAllRequests = factory.getAll(Request,{path:'student'})
exports.createRequest = factory.createOne(Request,{path:'student'});
exports.updateRequest = factory.updateOne(Request,{path:'student'});
exports.deleteRequest = factory.deleteOne(Request);