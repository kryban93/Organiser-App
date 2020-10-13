import React, { useState } from 'react';
import './NotesView.scss';

const NotesView = () => {
  const [note, setNote] = useState([]);
  const [noteTitle, setNoteTitle] = useState('');
  const [noteText, setNoteText] = useState('');

  function handleClick() {
    const newNote = { title: noteTitle, text: noteText };
  }

  return (
    <div>
      <p>This is Notes View</p>

      <form>
        <input type='text' onChange={(event) => setNoteTitle(event.target.value)} />
        <textarea type='text' onChange={(event) => setNoteText(event.target.value)} />
        <button onClick={handleClick}>add note</button>
      </form>

      <div>
        <h2></h2>
      </div>
    </div>
  );
};

export default NotesView;
