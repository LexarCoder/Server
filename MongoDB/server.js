const app = require('./src/app')
const mongoose = require('mongoose')


function connectDB() {
    // mongoose.connect('isme aapko mongoose ka link dalhna jo aapne database banaya h ok n a ')
    mongoose.connect('')
    .then(()=>{
        console.log("Database connected...");
        
    })
}

app.listen(3000,()=>{
    console.log("Port runnnig on 3000");
})