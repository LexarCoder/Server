const express= require('express')
const noteModel =  require('./models/notes.model')
const app  = express()

app.use(express.json())


app.get('/', (req, res) => {
    res.send("Good Morning Gyes")
})


//  Notes Create 

app.post('/notes', async (req,res)=>{
      const {title, description} = req.body
   const notes =  await noteModel.create({
    title, description
})
res.status(201).json({
    message:"Successfully created ...",
    notes
})
})

//  Notes Data get 

app.get('/notes', async (erq, res) => {
    const note = await noteModel.find()
    res.status(200).json({
        message: "Notes fetch successfully...",
         note
    })
})

//  Notes Data patch
//  Notes Data Deleted 

module.exports= app

