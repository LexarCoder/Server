const mongoose = require('mongoose')

const userShema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        trim: true,
        minlength: 3,
        maxlength: 20,
    },
    email: {
        type: String,
        required: true,
        unique: [true,"user already exists"], 
        lowercase: true,
        trim: true,
        match: [/^\S+@\S+\.\S+$/, "Please use a valid email"],
    },
    password: {
        type: String,
        required: true,
        trim: true,
        minlength: 6, 
    },
})

const userModel =mongoose.model("user", userShema)

module.exports =  userModel