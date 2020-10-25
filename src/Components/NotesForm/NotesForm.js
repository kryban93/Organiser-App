import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addNoteAction } from '../../actions';
import * as style from './NotesForm.module.scss';
import NotesFormTypes from '../NotesFormTypes/NotesFormTypes';
import NotesFormCategories from '../NotesFormCategories/NotesFormCategories';

const NotesForm = () => {
  const [noteTitle, setNoteTitle] = useState('');
  const [noteText, setNoteText] = useState('');
  const [listState, setListState] = useState([]);
  const [listItemState, setListItemState] = useState('');
  const [tasksStateList, setTasksStateList] = useState([]);
  const [toDoItemState, setToDoItemState] = useState('');
  const [typeOfNote, setTypeOfNote] = useState('note');
  const [categoryOfNote, setCategoryOfNote] = useState('');
  const dispatch = useDispatch();

  function submitNoteForm(event) {
    event.preventDefault();

    const { types, title } = event.target;

    switch (types.value) {
      case 'note': {
        const { text } = event.target;
        const newNote = {
          type: types.value,
          title: title.value,
          text: text.value,
          created: new Date(),
          category: categoryOfNote,
        };
        dispatch(addNoteAction(newNote));
        break;
      }
      case 'list': {
        const newList = {
          type: types.value,
          title: title.value,
          list: listState,
          created: new Date(),
          category: categoryOfNote,
        };
        dispatch(addNoteAction(newList));
        break;
      }
      case 'todo': {
        const newTodo = {
          type: types.value,
          title: title.value,
          todos: tasksStateList,
          created: new Date(),
          category: categoryOfNote,
        };
        dispatch(addNoteAction(newTodo));
        break;
      }
      case 'calendar': {
        const newCalendar = {
          type: types.value,
          title: title.value,
          created: new Date(),
          category: categoryOfNote,
        };
        dispatch(addNoteAction(newCalendar));
        break;
      }
      default:
        return;
    }
  }

  const handleTypesRadioInputChange = (event) => {
    setTypeOfNote(event.target.value);
  };

  const handleCategoriesRadioInputChange = (event) => {
    setCategoryOfNote(event.target.value);
  };

  const addListItem = (event) => {
    event.preventDefault();
    let temporaryListArray = listState.concat();

    temporaryListArray.push(listItemState);
    setListState(temporaryListArray);
  };

  const addToDoItem = (event) => {
    event.preventDefault();
    let temporaryToDoArray = tasksStateList.concat();

    temporaryToDoArray.push(toDoItemState);
    setTasksStateList(temporaryToDoArray);
  };
  return (
    <form className={style.form} onSubmit={submitNoteForm}>
      <NotesFormTypes handleTypesRadioInputChange={handleTypesRadioInputChange} />
      <div className={style.form__header}>
        <label htmlFor='title'>Title</label>
        <input
          type='text'
          name='title'
          id='title'
          onChange={(event) => setNoteTitle(event.target.value)}
          value={noteTitle}
          className={style.form__header__input}
        />
      </div>
      <NotesFormCategories handleCategoriesRadioInputChange={handleCategoriesRadioInputChange} />
      {typeOfNote === 'note' ? (
        <div className={style.form__content}>
          <label htmlFor='text'>The content of the note</label>
          <textarea
            type='text'
            name='text'
            id='text'
            onChange={(event) => setNoteText(event.target.value)}
            value={noteText}
            className={style.form__content__input}
          />
        </div>
      ) : typeOfNote === 'list' ? (
        <div className={style.form__content}>
          <label htmlFor='list-input'>list item</label>
          <input
            type='text'
            name='list'
            id='list-input'
            onChange={(event) => {
              setListItemState(event.target.value);
            }}
            value={listItemState}
            className={style.form__content__input}
          />
          <button onClick={addListItem}>add to list</button>
          <ul>
            {listState.map((item) => (
              <li key={listState.indexOf(item)}>{`${listState.indexOf(item) + 1}. ${item}`}</li>
            ))}
          </ul>
        </div>
      ) : typeOfNote === 'todo' ? (
        <div className={style.form__content}>
          <input
            type='text'
            name='todo'
            onChange={(event) => setToDoItemState(event.target.value)}
            value={toDoItemState}
            className={style.form__content__input}
          />
          <button onClick={addToDoItem}>add item</button>

          {tasksStateList.map((item) => (
            <label>
              <input type='checkbox' name={`toDo${tasksStateList.indexOf(item)}`} />
              {item}
            </label>
          ))}
        </div>
      ) : typeOfNote === 'calendar' ? (
        <div className={style.form__content}>
          <select>
            <option>yearly</option>
            <option>monthly</option>
            <option>weekly</option>
            <option>daily</option>
            <option>custom</option>
            <option>once</option>
          </select>
          <input type='date' name='date-start' />
          <input type='date' name='date-end' />
          <input type='time' name='date-time' />
          <select>
            <option>15mins</option>
            <option>30mins</option>
            <option>60mins</option>
            <option>90mins</option>
            <option>whole day</option>
          </select>
        </div>
      ) : null}
      <button className='notes__form__btn--submit'>add {typeOfNote}</button>
    </form>
  );
};

export default NotesForm;
