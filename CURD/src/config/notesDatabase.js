const mongoose = require('mongoose')


function connectedToDb() {

    mongoose.connect(process.env.MONGO_URI)
        .then(() => {
            console.log("Database  created... ");
        })

}

// connectedToDb()
module.exports = connectedToDb