// we nedd a express for create router in this file 

const express = require("express")
const jwt = require("jsonwebtoken")
const userModel =  require("../model/user.model")
const authRouter= express.Router()
const crypto = require("crypto")

authRouter.post("/register", async(req,res)=>{
    const {username,email,password} = req.body

const isUserAlreadyExists =await userModel.findOne({email})  
if(isUserAlreadyExists)
{
    return res.status(400).json({
        message:"User already exists with this email"
    })
}


const hash = crypto.createHash("md5").update(password).digest("hex")



   const user = await userModel.create({
        username, email, password:hash
    })

    const token = jwt.sign(
        {
            id:user._id
        },
        process.env.JWT_SECRET
    )

    res.cookie("jwt_token", token)
    res.status(201).json({
        message:"user rigestered...",
        user,
        token
    })
})


authRouter.post("/login",async(req, res)=>{

const {email,password}= req.body

const user= await userModel.findOne({email})

if(!user){
return res.status(404).json({
    message:"User not found with this email address..."
})
}

    const isUserPssword = user.password === crypto.createHash("md5").update(password).digest("hex")

    if (!isUserPssword) {
        return res.status(401).json({
            message: "Password not match with this email address..."
        })
    }


    const token= jwt.sign({
        id:user._id
    },
process.env.JWT_SECRET
)

res.cookie("jwt_token", token)
res.status(401).json({
    message:"user login successfully...",
    user
})
})

module.exports= authRouter 