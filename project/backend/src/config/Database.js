const mongoose = require("mongoose")

const connectToDb = ()=>{
    mongoose.connect(process.env.MONGO_URI)
    .then(()=>{
        console.log("Database Connected Sucessfully...");
    })
    .catch((error)=>{
        console.log("Database Connection faield...",error);
    })
}

module.exports = connectToDb