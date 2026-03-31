const app = require('./src/app')

const mongoose =  require('mongoose')


 function connectToDb() {
     mongoose.connect("mongodb+srv://lexarCoder:KKMbxeis5WLgB9dF@cluster0.sadubrt.mongodb.net/MongoDB")
     .then(()=>{
        console.log("Conneted to database");
        
     })
 }

 connectToDb()

app.listen(3000,()=>{
    console.log("Port runnnig on 3000");
})