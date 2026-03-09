const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    name : {
        type : String,
        required : [true, "Please Enter the Name"],
    },
    email : {
        type : String,
        required : [true, "Please Enter the email"],
        unique : true
    },
    password : {
        type : String,
        required : [true, "Please Enter the password"]
    },
    phone : {
        type : String,
        required : [true, "Please Enter the phone"],
        unique : true
    },
    isAdmin : {
        type : Boolean,
        default : false,
        required : true

    }, 
}, 
{
   timestamps : true
})


module.exports = mongoose.model('User', userSchema)