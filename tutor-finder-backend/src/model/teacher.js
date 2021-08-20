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
   qualifications:{
       type:String,
       required:false

   },
   subject:{
       type:String,
       required:true,
   },
   address:{
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
  
   locality:{
       type:String,
       required:true
   },
   userId:{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required:true
       
   },
  
})

  
const Teacher = mongoose.model('Teacher', teacherSchema);

module.exports = Teacher;
