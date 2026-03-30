// Yaha app ko create or config  kiya jata h  

const express = require('express')
const app = express() // server create ho giya 

app.use(express.json())


const notes =[]

app.get('/',(req,res)=>{
    res.send("Namaste Duniya")
})

app.post('/notes',(req,res)=>{
    notes.push(req.body)
    res.send("Notes Created")
})
app.get('/notes',(req,res)=>{
    res.send(notes)
    res.send("Notes Created")

})

app.delete('/notes/:index',(req,res)=>{
    delete notes [req.params.index] 
    res.send("Deleted Successfully ")
})


app.patch('/notes/:index',(req,res)=>{
    notes[req.params.index].description = req.body.description

    res.send("Notes Update successfully ")
})
 module.exports = app