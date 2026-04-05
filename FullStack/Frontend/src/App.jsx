import React, { useEffect, useState } from "react";
import axios from "axios";
import { FaEdit, FaTrash } from "react-icons/fa";

function App() {
  const [notes, setNotes] = useState([]);

  // Fetch Notes
  const fetchNotes = () => {
    axios
      .get("https://notes-create.onrender.com/api/notes")
      .then((res) => {
        setNotes(res.data.allNote || []);
      })
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    fetchNotes();
  }, []);

  // Create Note
  function handleSubmit(e) {
    e.preventDefault();

    const { title, description } = e.target.elements;

    axios
      .post("https://notes-create.onrender.com/api/notes", {
        title: title.value,
        description: description.value,
      })
      .then(() => {
        fetchNotes();
        e.target.reset();
      })
      .catch((err) => console.error(err));
  }

  //  Deleted data

  function handelDelete(noteId) {
    // console.log(noteId);
    axios
      .delete("https://notes-create.onrender.com/api/notes/" + noteId)
      .then((res) => {
        console.log(res.data);
        fetchNotes();
      });
  }



  // Updata data 


  function updateDesc(id, newDescription) {
    axios
      .patch("https://notes-create.onrender.com/api/notes/" + id, {
        description: newDescription,
      })
      .then(() => {
        fetchNotes();
      });
  }
  return (
    <div className="container">
      {/* Form */}
      <div className="form-section">
        <form className="note-form" onSubmit={handleSubmit}>
          <h2>Create Note</h2>

          <input type="text" name="title" placeholder="Enter title" required />

          <textarea
            name="description"
            placeholder="Enter description"
            required
          />

          <button type="submit">Add Note</button>
        </form>
      </div>

      {/* Notes */}
      <div className="notes-section">
        {notes?.map((note) => (
          <div className="notes" key={note._id}>
            <h1>{note.title}</h1>
            <p>{note.description}</p>

            <div className="btn-group">
              <button
              onClick={()=>{
                 const newDesc = prompt("Enter new description");
                 if (newDesc) {
                   updateDesc(note._id, newDesc);
                 }
              }}
              >
                <FaEdit /> Update
              </button>
              <button
                onClick={() => {
                  handelDelete(note._id);
                }}
              >
                <FaTrash /> Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
