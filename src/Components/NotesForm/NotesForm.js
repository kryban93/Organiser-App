import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { addNoteAction } from '../../actions';
import * as style from './NotesForm.module.scss';
import NotesFormTypes from '../NotesFormTypes/NotesFormTypes';
import NotesFormCategories from '../NotesFormCategories/NotesFormCategories';
import * as icons from '../../assets/icons';
import NotesFormListType from '../NotesFormListType/NotesFormListType';

const NotesForm = ({ handleCloseFormModal }) => {
  const [noteTitle, setNoteTitle] = useState('');
  const [noteText, setNoteText] = useState('');
  const [listState, setListState] = useState([]);
  const [listItemState, setListItemState] = useState('');
  const [tasksStateList, setTasksStateList] = useState([]);
  const [taskItemState, settaskItemState] = useState('');
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
      case 'task': {
        const newtask = {
          type: types.value,
          title: title.value,
          tasks: tasksStateList,
          created: new Date(),
          category: categoryOfNote,
        };
        dispatch(addNoteAction(newtask));
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
    let temporaryListArray = [...listState];

    temporaryListArray.push(listItemState);
    setListState(temporaryListArray);
  };

  const handleAddListItemInput = (event) => {
    setListItemState(event.target.value);
  };

  const addtaskItem = (event) => {
    event.preventDefault();
    let temporarytaskArray = [...tasksStateList];

    temporarytaskArray.push(taskItemState);
    setTasksStateList(temporarytaskArray);
  };
  return (
    <div className={style.wrapper}>
      <form className={style.form} onSubmit={submitNoteForm}>
        <button onClick={handleCloseFormModal} className={style[`form__btn--close`]}>
          <img src={icons.close_black} alt='close note form' />
        </button>
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
          <NotesFormListType
            handleAddListItemInput={handleAddListItemInput}
            addListItem={addListItem}
            listItemState={listItemState}
            listState={listState}
          />
        ) : typeOfNote === 'task' ? (
          <div className={style.form__content}>
            <input
              type='text'
              name='task'
              onChange={(event) => settaskItemState(event.target.value)}
              value={taskItemState}
              className={style.form__content__input}
            />
            <button onClick={addtaskItem}>add item</button>

            {tasksStateList.map((item) => (
              <label>
                <input type='checkbox' name={`task${tasksStateList.indexOf(item)}`} />
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
        <NotesFormCategories handleCategoriesRadioInputChange={handleCategoriesRadioInputChange} />
        <button className={style.form__btn}>add {typeOfNote}</button>
      </form>
    </div>
  );
};

export default NotesForm;

NotesForm.propTypes = {
  handleCloseFormModal: PropTypes.func.isRequired,
};
