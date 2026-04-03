const express= require('express')
const noteModel =  require('./models/notes.model')
const app  = express()

app.use(express.json())


app.get('/', (req, res) => {
    res.send("Good Morning Gyes")
})

app.post('/notes', async (req,res)=>{
      const {title, description} = req.body
   const notes =  await noteModel.create({
    title, description
})

aap.get('/notes',(erq,res)=>{
    
})

res.status(201).json({
    message:"Successfully created ...",
    notes
})
})

module.exports= app

