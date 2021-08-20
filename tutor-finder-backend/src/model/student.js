const mongoose = require('mongoose');


const studentSchema =mongoose.Schema({
   name:{
       type:String,
       required:true

   },
   profilePic:{
       type:String,
       default:"default.jpeg"
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
   school:{
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
    unique: true,
    required:true
       
   }
   
})

const Student = mongoose.model('Student', studentSchema);

module.exports = Student;
