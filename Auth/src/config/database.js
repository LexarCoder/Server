const mongoose=  require("mongoose")

function connectDb() {
    mongoose.connect(process.env.MONGO_URI)
    .then(()=>{
        console.log("Database Connected...✅");
    })
    .catch((error)=>{
        console.log("Database Not Connected❌",error);
    })
}

module.exports = connectDb