import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import Create from "./Create.js"



function App() {

  const [notes, setNotes] = useState([]);

  function addNote(newNote) {
    setNotes(preNotes => {
      return ([...preNotes, newNote]);
    })

  }
  function deleteNote(id) {
    setNotes(preNotes => {
      return preNotes.filter((noteItem, index) => {
        return index !== id;
      })
    })
  }
  return (
    <React.StrictMode>
      <div>
        <Header />
        <Create onAdd={addNote} />
        {notes.map((noteItem, index) => (
          <Note
            key={index}
            id={index}
            title={noteItem.title}
            content={noteItem.content}
            onDelete={deleteNote}
          />
        ))}

        <Footer />
      </div>
    </React.StrictMode>
  );
}

export default App;