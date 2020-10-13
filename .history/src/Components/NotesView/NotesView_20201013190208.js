import React, { useState } from 'react';
import './NotesView.scss';

const NotesView = () => {
  const [notesArray, setNotesArray] = useState([]);
  const [noteTitle, setNoteTitle] = useState('');
  const [noteText, setNoteText] = useState('');

  function handleClick() {
    let notes = [];
    const newNote = { title: noteTitle, text: noteText };

    notes.push(newNote);
    setNotesArray(notes);
  }

  return (
    <div>
      <p>This is Notes View</p>

      <form>
        <input type='text' onChange={(event) => setNoteTitle(event.target.value)} />
        <textarea type='text' onChange={(event) => setNoteText(event.target.value)} />
        <button onClick={handleClick}>add note</button>
      </form>

      {notesArray.map((item) => (
        <div>
          <h2>{item.title}</h2>
          <p>{item.text}</p>
        </div>
      ))}
    </div>
  );
};

export default NotesView;
