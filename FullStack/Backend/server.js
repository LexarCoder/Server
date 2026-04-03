require('dotenv').config()

const connectedToDb = require('./src/config/database')
const app = require('./src/app')



connectedToDb()
app.listen(3000,()=>{
    console.log("Server is runnig...");
    
})

