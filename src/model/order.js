const mongoose = require('mongoose')

const orderSchema = new mongoose.Schema({
    
    //primary key
    orderId:{
        type: Number
    },

    userId:{
        type: Number
    },

    subTotal:{
        type: Number,
    },

    date: {        
        type: String
    },
    
},{

    toJSON:{virtuals:true},
    toObject:{virtuals:true}
    })

orderSchema.virtual('users',{
    ref:'user',
    localField:'userId',
    foreignField:'userId'
})


module.exports = mongoose.model('order', orderSchema)