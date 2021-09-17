const mongoose = require('mongoose');


const paymentOptionSchema =mongoose.Schema({
   bank_account_type:{
       type:String,
       required:true

   },
   account_holder_name:{
       type:String,
       required:true
   },
   active:{
       type:Boolean,
       default:false
   },
  
   bank_logo:{
       type:String,
       required:true
   },
   createdAt: {
    type: Date,
    default: Date.now
  },
   
   
})

const  PaymentOption = mongoose.model('Payment_option',paymentOptionSchema);

module.exports = PaymentOption;
