import React, { useState } from 'react';
import './NotesView.scss';
import Note from '../Note/Note';
import NotesForm from '../NotesForm/NotesForm';

const NotesView = () => {
  const [notesList, setNotesList] = useState([]);

  function handleClick(event) {
    event.preventDefault();

    const { category, title } = event.target;
    console.log(category.value);
    let notes = notesList.concat();

    switch (category.value) {
      case 'note':
        const { text } = event.target;
        const newNote = { title: title.value, text: text.value };
        notes.push(newNote);
        setNotesList(notes);
        break;

      case 'list':
        const {} = event.target;
        const newList = { title: title.value, text: text.value };
        notes.push(newList);
        setNotesList(notes);
        break;
      default:
        return;
    }
  }

  return (
    <div className='notes'>
      <h1 className='notes__title'>This is notes view</h1>

      <div className='notes__wrapper'>
        {notesList.map(({ title, text }) => (
          <Note title={title} text={text} key={title} />
        ))}
      </div>

      <NotesForm handleClick={handleClick} />
    </div>
  );
};

export default NotesView;
