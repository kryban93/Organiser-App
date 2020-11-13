import React, { useState } from 'react';
import * as style from './NotesView.module.scss';
import NotesForm from './NotesForm/NotesForm';
import { useSelector } from 'react-redux';
import Note from './NoteWrapper/NoteWrapper';
import * as icons from '../../assets/icons';

const NotesView = () => {
  const [isFormOpen, setFormOpenState] = useState(false);
  const notesArray = useSelector((state) => state.notesOperationsReducer);

  const handleCloseFormModal = (event) => {
    event.stopPropagation();
    setFormOpenState(false);
  };

  return (
    <section className={style.wrapper}>
      {notesArray.length > 0 ? (
        <h1 className={style.title}>This is your notes..</h1>
      ) : (
        <h1 className={style.title}>Add note..</h1>
      )}

      {
        <div className={style.notes}>
          {notesArray.map(({ id, payload }) => (
            <Note key={id} {...payload} id={id} />
          ))}
        </div>
      }

      {!isFormOpen && (
        <button className={style.btn} onClick={() => setFormOpenState(true)}>
          <img src={icons.addItem_white} alt='open note form button' className={style.btn__img} />
        </button>
      )}

      {isFormOpen && <NotesForm handleCloseFormModal={handleCloseFormModal} />}
    </section>
  );
};

export default NotesView;
