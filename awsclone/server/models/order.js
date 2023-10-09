const mongoose =require('mongoose');

const orderSchema=mongoose.Schema({

    userId:
    {
        type:String,
        required:true
    },

    products:[{
        productId:{
            type:String,
            required:true
        },
        quantity:{
            type:Number,
            required:true
        }
    }],

    totalPrice:{
        type:Number,
        required:true
    },

    address:{
        type:String,
        required:true
    },

    status:{
        type:String,
        default:"pending"
    },

    orderedAt: {
        type: Number,
        required: true,
      },

});

