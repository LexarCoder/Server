const express= require("express")
const app = express()
const cookiepParser = require("cookie-parser")
const authRouter= require("./routes/auth.routes")
app.use(express.json())
app.use(cookiepParser())
app.use("/api/auth", authRouter)
module.exports = app


