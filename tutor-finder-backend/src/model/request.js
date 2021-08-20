const mongoose = require('mongoose');


const requestSchema =mongoose.Schema({
    studentId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Student',
        required:true
    },
    status:{
        type: String,
        enum: ['pending', 'accepted', 'rejected'],
        default: 'pending'

    },
    teacherId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Teacher',
        required:true
    }, 
     requestUpdatedAt: {
        type: Date,
        default: Date.now,
    },
   
 
})

const Request = mongoose.model('Request', requestSchema);

module.exports = Request;
