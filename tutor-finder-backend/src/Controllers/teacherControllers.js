const Teacher = require('../model/teacher');
const catchAsync = require('../utils/catchAsync');
const AppError = require('../utils/appError');
const multer = require('multer');
const sharp = require('sharp');
const factory = require('./handlerFactory');


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

  req.file.filename = `teacher-${req.params.id}-${Date.now()}.jpeg`;

  await sharp(req.file.buffer)
    .resize(500, 500)
    .toFormat('jpeg')
    .jpeg({ quality: 90 })
    .toFile(`public/uploads/teacher/${req.file.filename}`);

  next();
});

const filterObj = (obj, ...allowedFields) => {
  const newObj = {};
  Object.keys(obj).forEach(el => {
    if (allowedFields.includes(el)) newObj[el] = obj[el];
  });
  return newObj;
};
exports.updateTeacher = catchAsync(async (req, res, next) => {
  // console.log(req.file);
  // console.log(req.body);
  const filteredBody = filterObj(req.body,  'userId');
  if (req.file) filteredBody.profilePic = req.file.filename;
  const teacher = await Teacher.findByIdAndUpdate(req.params.id, filteredBody, {
    new: true,
    runValidators: true
  });

  if (!teacher) {
    return next(new AppError('No request found with that ID', 404));
  }

  res.status(200).json({
    status: 'success',
    data: {
      teacher
    }
  });
});

exports.getTeachers =factory.getAll(Teacher);
exports.getTeacher = factory.getOne(Teacher);
exports.createTeacher = factory.createOne(Teacher);
exports.deleteTeacher = factory.deleteOne(Teacher);


