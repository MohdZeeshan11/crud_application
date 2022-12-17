const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name:{
        type:String,
    },
    email:{
        type:String,
    },
    phone:{
        type:Number,
    },
    gender:{
        type:String
    },
    message:{
        type:String
    },
})

module.exports = new mongoose.model('user',userSchema);