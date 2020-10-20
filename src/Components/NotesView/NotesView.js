import React, { useState } from 'react';
import './NotesView.scss';
import Note from '../Note/Note';
import NotesForm from '../NotesForm/NotesForm';

const NotesView = () => {
  return (
    <div className='notes'>
      <h1 className='notes__title'>This is notes view</h1>

      {/*<div className='notes__wrapper'>
        {notesList.map(({ title, text }) => (
          <Note title={title} text={text} key={title} />
        ))}
      </div> */}

      <NotesForm />
    </div>
  );
};

export default NotesView;
