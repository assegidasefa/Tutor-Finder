const Student = require('../model/student');
const APIFeatures = require('../utils/apiFeatures');
const catchAsync = require('../utils/catchAsync');
const AppError = require('../utils/appError');
const multer = require('multer');
const sharp = require('sharp');


const multerStorage = multer.memoryStorage();

const multerFilter = (req, file, cb) => {
  if (file.mimetype.startsWith('image')) {
    cb(null, true);
  } else {
    cb(new AppError('Not an image! Please upload only images.', 400), false);
  }
};

const upload = multer({
  storage: multerStorage,
  fileFilter: multerFilter
});

exports.uploadUserPhoto = upload.single('profilePic');

exports.resizeUserPhoto = catchAsync(async (req, res, next) => {
  if (!req.file) return next();

  req.file.filename = `student-${req.params.id}-${Date.now()}.jpeg`;

  await sharp(req.file.buffer)
    .resize(500, 500)
    .toFormat('jpeg')
    .jpeg({ quality: 90 })
    .toFile(`public/uploads/student/${req.file.filename}`);

  next();
});

const filterObj = (obj, ...allowedFields) => {
  const newObj = {};
  Object.keys(obj).forEach(el => {
    if (allowedFields.includes(el)) newObj[el] = obj[el];
  });
  return newObj;
};



exports.getStudents = catchAsync(async (req, res, next) => {
  const students = await Student.find();

  // SEND RESPONSE
  res.status(200).json({
    status: 'success',
    results: students.length,
    data: {
      students
    }
  });
});
exports.getStudent = async (req, res) => {
  try {
    const student = await Student.findById(req.params.id);
    // Tour.findOne({ _id: req.params.id })

    res.status(200).json({
      status: 'success',
      data: {
        student
      }
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err
    });
  }
};

exports.createStudent = catchAsync(async (req, res, next) => {
  const newStudent = await Student.create(req.body);

  res.status(201).json({
    status: 'success',
    data: {
      student:newStudent
    }
  });
});

exports.updateStudent = catchAsync(async (req, res, next) => {
  const filteredBody = filterObj(req.body,  'userId');
  if (req.file) filteredBody.profilePic = req.file.filename;
  const student = await Student.findByIdAndUpdate(req.params.id, filteredBody, {
    new: true,
    runValidators: true
  });

  if (!student) {
    return next(new AppError('No request found with that ID', 404));
  }

  res.status(200).json({
    status: 'success',
    data: {
      student
    }
  });
});

exports.deleteStudent = catchAsync(async (req, res, next) => {
  const student = await Student.findByIdAndDelete(req.params.id);

  if (!student) {
    return next(new AppError('No request found with that ID', 404));
  }

  res.status(204).json({
    status: 'success',
    data: null
  });
});