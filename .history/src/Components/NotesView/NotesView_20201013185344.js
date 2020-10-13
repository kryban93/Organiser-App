import React, { useState } from 'react';
import './NotesView.scss';

const NotesView = () => {
  const [noteTitle, setNoteTitle] = useState('');
  return (
    <div>
      <p>This is Notes View</p>

      <form>
        <input type='text' />
        <textarea />
        <button>add note</button>
      </form>
    </div>
  );
};

export default NotesView;
