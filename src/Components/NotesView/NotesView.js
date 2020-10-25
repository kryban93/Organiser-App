import React from 'react';
import * as style from './NotesView.module.scss';
import NotesForm from '../NotesForm/NotesForm';
import { useSelector } from 'react-redux';
import Note from '../NoteWrapper/NoteWrapper';

const NotesView = () => {
  const notesArray = useSelector((state) => state.notesOperationsReducer);

  return (
    <div className={style.wrapper}>
      <h1 className={style.title}>This is notes view</h1>

      {
        <div className={style.notes}>
          {notesArray.map(({ id, payload }) => (
            <Note key={id} {...payload} />
          ))}
        </div>
      }

      <NotesForm />
    </div>
  );
};

export default NotesView;
