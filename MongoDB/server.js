const app = require('./src/app')
const mongoose = require('mongoose')


function connectDB() {
    mongoose.connect('')
    .then(()=>{
        console.log("Database connected...");
        
    })
}

app.listen(3000,()=>{
    console.log("Port runnnig on 3000");
})