const express = require('express')
const cors =  require('cors')
const app = express()
const noteModel = require('./models/note.models')

app.use(express.json())
app.use(cors())
app.get('/',(req,res)=>{
    res.send("Hey Coder")
})

app.post('/api/notes', async(req, res)=>{
const {title, description} = req.body
 const notes =  await  noteModel.create({
        title, description
    })

res.status(201).json({
    message:"Notes Created Successfully...",
notes
})

})


app.get("/api/notes",async(req,res)=>{
   const allNote  = await noteModel.find()

   res.status(200).json({
    message:"Notes fetch successfully...",
    allNote
   })
})


app.delete('/api/notes/:id',async(req,res)=>{
    const id = req.params.id
const noteDelete = await noteModel.findByIdAndDelete(id)

res.status(200).json({
    message : "notes  deleted successfully ",
    noteDelete
})

})


app.patch('/api/notes/:id',async(req,res)=>{
    const id = req.params.id
const {description}= req.body
    const updateNote = await noteModel.findByIdAndUpdate(id,{description})

    res.status(200).json({
        message:"Data update Successfully . . .",
        updateNote
    })
})



module.exports = app