import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { addNoteAction } from '../../actions';
import * as style from './NotesForm.module.scss';
import NotesFormTypes from '../NotesFormTypes/NotesFormTypes';
import NotesFormCategories from '../NotesFormCategories/NotesFormCategories';
import * as icons from '../../assets/icons';
import NotesFormListType from '../NotesFormListType/NotesFormListType';
import NotesFormTaskType from '../NotesFormTaskType/NotesFormTaskType';

const NotesForm = ({ handleCloseFormModal }) => {
  const [noteTitle, setNoteTitle] = useState('Title');
  const [noteText, setNoteText] = useState('');
  const [listState, setListState] = useState([]);
  const [listItemState, setListItemState] = useState('');
  const [tasksStateList, setTasksStateList] = useState([]);
  const [taskItemState, setTaskItemState] = useState('');
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

    temporaryListArray.push({ text: listItemState, id: `listItem${temporaryListArray.length}` });
    setListState(temporaryListArray);
  };

  const handleAddListItemInput = (event) => {
    setListItemState(event.target.value);
  };

  const handleAddTaskItemInput = (event) => {
    setTaskItemState(event.target.value);
  };

  const addTaskItem = (event) => {
    event.preventDefault();
    let temporarytaskArray = [...tasksStateList];

    temporarytaskArray.push({
      text: taskItemState,
      isChecked: false,
      id: `taskItem${temporarytaskArray.length}`,
    });
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
          <NotesFormTaskType
            handleAddTaskItemInput={handleAddTaskItemInput}
            addTaskItem={addTaskItem}
            taskItemState={taskItemState}
            tasksStateList={tasksStateList}
          />
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
