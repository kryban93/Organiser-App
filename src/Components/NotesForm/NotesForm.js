import React, { useState } from 'react';
import './NotesForm.scss';
import * as icons from '../../assets/icons/index';

const NotesForm = () => {
  const [noteTitle, setNoteTitle] = useState('');
  const [noteText, setNoteText] = useState('');
  const [listState, setListState] = useState([]);
  const [listItemState, setListItemState] = useState('');
  const [toDoStateList, setToDoStateList] = useState([]);
  const [toDoItemState, setToDoItemState] = useState('');
  const [typeOfNote, setTypeOfNote] = useState('note');
  const [notesList, setNotesList] = useState([]);

  function handleClick(event) {
    event.preventDefault();

    const { category, title } = event.target;
    console.log(category.value);
    let notes = notesList.concat();

    switch (category.value) {
      case 'note': {
        const { text } = event.target;
        const newNote = { type: category.value, title: title.value, text: text.value };
        notes.push(newNote);
        setNotesList(notes);
        break;
      }
      case 'list': {
        const newList = { type: category.value, title: title.value, list: listState };
        notes.push(newList);
        setNotesList(notes);
        break;
      }
      case 'todo': {
        const newTodo = { type: category.value, title: title.value, todos: toDoStateList };
        notes.push(newTodo);
        setNotesList(notes);
        break;
      }
      case 'calendar': {
        const newCalendar = { type: category.value, title: title.value };
        notes.push(newCalendar);
        setNotesList(notes);
        break;
      }
      default:
        return;
    }

    console.log(notesList);
  }

  const handleRadioInputChange = (event) => {
    setTypeOfNote(event.target.value);
  };

  const addListItem = (event) => {
    event.preventDefault();
    let temporaryListArray = listState.concat();

    temporaryListArray.push(listItemState);
    setListState(temporaryListArray);
  };

  const addToDoItem = (event) => {
    event.preventDefault();
    let temporaryToDoArray = toDoStateList.concat();

    temporaryToDoArray.push(toDoItemState);
    setToDoStateList(temporaryToDoArray);
  };
  return (
    <form className='notes__form' onSubmit={handleClick}>
      <h2 className='notes__form__title'>Select type of note</h2>
      <div className='notes__form__category'>
        <label>
          <input
            type='radio'
            name='category'
            value='note'
            onChange={handleRadioInputChange}
            defaultChecked
            className='notes__form__input--category'
          />
          <img src={icons.note_black} alt='new note' className='notes__form__category__icon' />
        </label>
        <label>
          <input
            type='radio'
            name='category'
            value='list'
            onChange={handleRadioInputChange}
            className='notes__form__input--category'
          />
          <img src={icons.list_black} alt='new list' className='notes__form__category__icon' />
        </label>
        <label>
          <input
            type='radio'
            name='category'
            value='todo'
            onChange={handleRadioInputChange}
            className='notes__form__input--category'
          />
          <img src={icons.checkbox_black} alt='new toDo' className='notes__form__category__icon' />
        </label>
        <label>
          <input
            type='radio'
            name='category'
            value='calendar'
            onChange={handleRadioInputChange}
            className='notes__form__input--category'
          />
          <img
            src={icons.calendar_black}
            alt='new calendar'
            className='notes__form__category__icon'
          />
        </label>
      </div>
      <div>
        <input
          type='text'
          name='title'
          onChange={(event) => setNoteTitle(event.target.value)}
          value={noteTitle}
          className='notes__form__input notes__form__input--title'
        />
      </div>
      {typeOfNote === 'note' ? (
        <div className='notes__form__content'>
          <textarea
            type='text'
            name='text'
            onChange={(event) => setNoteText(event.target.value)}
            value={noteText}
            className='notes__form__input notes__form__input--textarea'
          />
        </div>
      ) : null}

      {typeOfNote === 'list' ? (
        <div className='notes__form__content'>
          <input
            type='text'
            name='list'
            onChange={(event) => {
              setListItemState(event.target.value);
            }}
            value={listItemState}
            className='notes__form__input'
          />
          <button onClick={addListItem}>add to list</button>
          {listState.map((item) => (
            <p>{`${listState.indexOf(item) + 1}. ${item}`}</p>
          ))}
        </div>
      ) : null}

      {typeOfNote === 'todo' ? (
        <div className='notes__form__content'>
          <input
            type='text'
            name='todo'
            onChange={(event) => setToDoItemState(event.target.value)}
            value={toDoItemState}
            className='notes__form__input'
          />
          <button onClick={addToDoItem}>add item</button>

          {toDoStateList.map((item) => (
            <label>
              <input type='checkbox' name={`toDo${toDoStateList.indexOf(item)}`} />
              {item}
            </label>
          ))}
        </div>
      ) : null}

      {typeOfNote === 'calendar' ? (
        <div className='notes__form__content'>
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
      <button className='notes__form__btn--submit'>add note</button>
    </form>
  );
};

export default NotesForm;
