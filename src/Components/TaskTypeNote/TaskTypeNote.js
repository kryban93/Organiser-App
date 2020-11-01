import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { changeNoteTaskItemAction, addNoteTaskItemAction } from '../../actions';
import * as style from './TaskTypeNote.module.scss';
import * as icons from '../../assets/icons';

const TaskTypeNote = ({ tasks, id }) => {
  const [inputValue, setInputValue] = useState('');
  //const [counter, setCounterState] = useState(0);
  const dispatch = useDispatch();

  /*
  useEffect(() => {
    tasks.forEach((task) => {
      console.log(task);
      if (task.isChecked === true) {
        console.log('ping');
        setCounterState(counter + 1);
      }
    });
  }, [tasks]);
  */

  const addTaskItem = () => {
    const newTask = { text: inputValue, noteId: id, taskId: `taskItem${tasks.length}` };
    dispatch(addNoteTaskItemAction(newTask));
  };

  const changeTaskItemState = (event) => {
    const payload = {
      noteId: id,
      taskId: `${event.target.getAttribute('data-id')}`,
    };
    dispatch(changeNoteTaskItemAction(payload));
  };
  /*
  const deleteTaskItemFromStore = (event) => {
    const payload = {
      taskId: event.target.getAttribute('data-del'),
      noteId: id,
    };

    dispatch(deleteNoteTaskItemAction(payload));
  };
*/
  return (
    <div className={style.wrapper}>
      <div className={style.header}>
        <input
          type='text'
          className={style.input}
          onChange={(event) => setInputValue(event.target.value)}
          value={inputValue}
        />
        <button className={style.btn} onClick={addTaskItem}>
          add
        </button>
      </div>
      <h5 className={style.completed}>Tasks completed: counter</h5>
      {tasks.map(({ id, text, isChecked }) => (
        <div
          className={!isChecked ? style.task : `${style.task} ${style['task--completed']}`}
          key={id}
        >
          <button className={style.task__btn} onClick={changeTaskItemState}>
            <img
              data-id={id}
              src={isChecked ? icons.check_green : icons.check_black}
              alt='check task button'
              className={style.task__btn__img}
            />
          </button>
          <p
            className={
              !isChecked
                ? style.task__text
                : `${style.task__text} ${style['task__text--completed']}`
            }
          >
            {text}
          </p>
          {/*
          <button
            className={`${style.task__btn} ${style['task__btn--delete']}`}
            onClick={deleteTaskItemFromStore}
          >
            <img data-del={id} src={icons.trash_black} alt='delete task button' />
          </button>
          */}
        </div>
      ))}
    </div>
  );
};

export default TaskTypeNote;

TaskTypeNote.propTypes = {
  tasks: PropTypes.array.isRequired,
  id: PropTypes.string.isRequired,
};
