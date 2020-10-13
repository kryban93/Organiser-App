import React, { useState } from 'react';
import './NotesView.scss';
import Note from '../Note/Note';

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

      <div>
        <input type='text' onChange={(event) => setNoteTitle(event.target.value)} />
        <textarea type='text' onChange={(event) => setNoteText(event.target.value)} />
        <button onClick={handleClick}>add note</button>
      </div>

      <div>
        {notesArray.map((item) => (
          <Note title={item.title} text={item.text} />
        ))}
      </div>
    </div>
  );
};

export default NotesView;
