const mongoose = require('mongoose');


const paymentConfirmationSchema =mongoose.Schema({
  
   paymentOptionId:{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'PaymentOption',
    unique: true,
    required:true
       
   },
  
   receiptImage:{
       type:String,
       required:true
   },
   userId:{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required:true   
   },
   status:{
    type: String,
    enum: ['pending', 'accepted', 'rejected'],
    default: 'pending'
},

   createdAt: {
    type: Date,
    default: Date.now
  },
   
   
})

const  PaymentConfirmation = mongoose.model('paymentConfirmation',paymentConfirmationSchema);

module.exports = PaymentConfirmation;
