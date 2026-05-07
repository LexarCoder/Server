
// ======= Import Required Packages ========
const express = require("express")
const authRouter = express.Router()
const authControllers =  require("../controllers/auth.controller")

// ===== Register User =====
authRouter.post("/register",authControllers.registerController )



// ===== Login User =====

authRouter.post("/login",authControllers.loginController)

module.exports= authRouter