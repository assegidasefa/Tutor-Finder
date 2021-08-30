const mongoose = require('mongoose');


const requestSchema =mongoose.Schema({
    student: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required:true
    },
    status:{
        type: String,
        enum: ['PENDING', 'ACCEPTED', 'REJECTED','WAITING'],
        default: 'PENDING'

    },
    teacher: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required:true
    }, 
     requestUpdatedAt: {
        type: Date,
        default: Date.now,
    },
   
 
})

const Request = mongoose.model('Request', requestSchema);

module.exports = Request;
