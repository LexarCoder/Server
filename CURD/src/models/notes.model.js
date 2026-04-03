const mongoos = require('mongoose')

const notesShema = new mongoos.Schema({
    title:String,
    description:String
})

const noteModel =  mongoos.model("notes",notesShema)

module.exports =  noteModel