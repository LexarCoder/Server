//  aap hamesa server.js me h server ko ruin krte ho or data base v run krte ho 
require('dotenv').config()
const app = require('./src/app')

const connectedToDb = require('./src/config/notesDatabase')

connectedToDb()

app.listen(3000,()=>{
    console.log("Port io runnig...");
    
})