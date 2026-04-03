import React from 'react'
import { useState, useEffect} from "react";
import axios from "axios";

function App() {

  const [notes, setNotes] = useState([
    {
      title:"title 1",
      description:"Hey coder"
    },
    {
      title:"title 2",
      description:"Hey coder"
    },
    {
      title:"title 3",
      description:"Hey coder"
    },
    {
      title:"title 4",
      description:"Hey coder"
    },
    {
      title:"title 5",
      description:"Hey coder"
    }
  ])
  
  useEffect(() => {
   axios.get("http://localhost:3000/api/notes").then((res) => {
     setNotes(res.data.allNote);
   });
  }, [])
  
  return (
    <>
      <div className="notes">
        {notes.map((note) => {
          return (
            <div className="note">
              <h1>{note.title}</h1>
              <p>{note.description}</p>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default App
