const mongoose = require('mongoose')

//schema Design
const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true,'name is required']
    },
    email:{
        type:String,
        require:[true,'email is required and should be unique'],
        unique:true
    },
    password:{
        type:String,
        require:[true,'password is required'],
    },

},{timestamps:true}
);

//export

const userModel = mongoose.model('user',userSchema)
module.exports = userModel