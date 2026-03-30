const exrpess = require('express')
const app = exrpess()
app.use(exrpess.json())


const notes = []
app.post('/notes', (req, res) => {

    console.log(req.body);
    notes.push(req.body)
    res.send("This is notes page ")
})

app.get('/notes',(req,res)=>{
res.send(notes)
})

app.listen(3000)


