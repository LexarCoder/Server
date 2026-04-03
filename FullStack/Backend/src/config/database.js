//  Data ko connected 

const mongoos =  require('mongoose')


function connectedToDb() {

    mongoos.connect(process.env.MONGO_URI)
    .then(()=>{
        console.log("Connected Successfully...");
    })
}

module.exports = connectedToDb