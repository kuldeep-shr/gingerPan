const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    
    //primary key
    userId:{
        type: Number
    },

    name:{
        type: String,
        trim: true
    },
    
}
)


module.exports = mongoose.model('user',userSchema)