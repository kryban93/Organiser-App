import React from 'react';
import './NotesView.scss';

const NotesView = () => {
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