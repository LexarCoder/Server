const mongoose = require("mongoose")

const userSchema = new mongoose.Schema(
    {
        username: {
            type: String,
            unique: [true, "user already exists"],
            required: true,
            minlength: 3,
            maxlength: 20,
            trim: true,
        },

        email: {
            type: String,
            required: true,
            unique: [true,"user already exists"],
            lowercase: true,
            trim: true,
        },

        password: {
            type: String,
            required: true,
            minlength: 6,
        },

        bio: {
            type: String,
            maxlength: 200,
            default: "",
            trim: true,
        },

        profileImage: {
            type: String,
            default:
                "https://ik.imagekit.io/dbkl8gjvs/userImg.avif",
        },
    },
    {
        timestamps: true,
    }
)

const userModel = mongoose.model("InstaUser", userSchema)
module.exports =userModel