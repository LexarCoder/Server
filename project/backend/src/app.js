// ===== Import Packages =====
const cookieParser = require("cookie-parser")
const express = require("express")



// ===== Import Routes =====
const authRouter = require("./routes/auth.routes")



// ===== Create Express App =====
const app = express()



// ===== Middleware =====

// Read JSON data
app.use(express.json())

// Read cookies
app.use(cookieParser())



// ===== Routes =====
app.use("/api/auth", authRouter)



// ===== Export App =====
module.exports = app