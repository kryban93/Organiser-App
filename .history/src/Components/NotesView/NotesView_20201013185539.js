import React, { useState } from 'react';
import './NotesView.scss';

const NotesView = () => {
  const [noteTitle, setNoteTitle] = useState('');
  const [noteText, setNoteText] = useState('');

  return (
    <div>
      <p>This is Notes View</p>

      <form>
        <input type='text' onChange={(event) => setNoteTitle(event.target.value)} />
        <textarea type='text' onChange={(event) => setNoteText(event.target.value)} />
        <button>add note</button>
      </form>
    </div>
  );
};

export default NotesView;
