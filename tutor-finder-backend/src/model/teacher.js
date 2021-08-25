const mongoose = require('mongoose');


const teacherSchema =mongoose.Schema({
   name:{
       type:String,
       required:true

   },
   profilePic:{
    type: String,
    default: 'default.jpeg'
   },
   experience:{
       type:String,
       required:false
   },
   subject:{
       type:String,
       required:true,
   },
   ratingsAverage: {
    type: Number,
    default: 4.5,
    min: [1, 'Rating must be above 1.0'],
    max: [5, 'Rating must be below 5.0'],
    set: val => Math.round(val * 10) / 10 // 4.666666, 46.6666, 47, 4.7
  },
  ratingsQuantity: {
    type: Number,
    default: 0
  },
   state:{
       type:String,
       required:true
   },
   city:{
       type:String,
       required:true
   },
   phone:{
       type:String,
       required:true
   },
  
   classPerWeek:{
       type:String,
       required:true
   },
   userId:{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required:true
       
   },

  
})
teacherSchema.index({ price: 1, ratingsAverage: -1 });
teacherSchema.virtual('reviews', {
    ref: 'Review',
    foreignField: 'teacher',
    localField: '_id'
  });

  
const Teacher = mongoose.model('Teacher', teacherSchema);

module.exports = Teacher;
