const mongoose = require('mongoose');
const Teacher = require('./user');


const reviewSchema = new mongoose.Schema(
    {
      review: {
        type: String,
        required: [true, 'Review can not be empty!']
      },
      rating: {
        type: Number,
        min: 1,
        max: 5
      },
      teacher: {
        type: mongoose.Schema.ObjectId,
        ref: 'User',
        required: [true, 'Review must belong to a teacher.']
      },
      student: {
        type: mongoose.Schema.ObjectId,
        ref: 'User',
        required: [true, 'Review must belong to a student']
      },
      createdAt: {
        type: Date,
        default: Date.now
      },
    },
    {
      toJSON: { virtuals: true },
      toObject: { virtuals: true }
    },
  );
  
  reviewSchema.index({ teacher: 1, student: 1 }, { unique: true });
  
  reviewSchema.pre(/^find/, function(next) {
    this.populate({
      path: 'teacher',
      select: 'firstName lastName profilePic'
    }).populate({
      path: 'student',
      select: 'firstName lastName profilePic'
    });
  
    // this.populate({
    //   path: 'student',
    //   select: 'firstName profilePic'
    // });

    next();
  });
  
  reviewSchema.statics.calcAverageRatings = async function(teacherId) {
    const stats = await this.aggregate([
      {
        $match: { teacher: teacherId }
      },
      {
        $group: {
          _id: '$teacher',
          nRating: { $sum: 1 },
          avgRating: { $avg: '$rating' }
        }
      }
    ]);
    // console.log(stats);
  
    if (stats.length > 0) {
      await Teacher.findByIdAndUpdate(teacherId, {
        ratingsQuantity: stats[0].nRating,
        ratingsAverage: stats[0].avgRating
      });
    } else {
      await Teacher.findByIdAndUpdate(teacherId, {
        ratingsQuantity: 0,
        ratingsAverage: 4.5
      });
    }
  };
  
  reviewSchema.post('save', function() {
    // this points to current review
    this.constructor.calcAverageRatings(this.teacher);
  });
  
  // findByIdAndUpdate
  // findByIdAndDelete
  reviewSchema.pre(/^findOneAnd/, async function(next) {
    this.r = await this.findOne();
    // console.log(this.r);
    next();
  });
  
  reviewSchema.post(/^findOneAnd/, async function() {
    // await this.findOne(); does NOT work here, query has already executed
    await this.r.constructor.calcAverageRatings(this.r.teacher);
  });
  
  const Review = mongoose.model('Review', reviewSchema);
  
  module.exports = Review;