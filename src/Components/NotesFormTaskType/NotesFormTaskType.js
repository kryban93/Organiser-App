import React from 'react';
import PropTypes from 'prop-types';
import * as style from './NotesFormTaskType.module.scss';

const NotesFormTaskType = ({
  taskItemState,
  handleAddTaskItemInput,
  addTaskItem,
  tasksStateList,
}) => {
  return (
    <div className={style.form__content}>
      <input
        type='text'
        name='task'
        onChange={handleAddTaskItemInput}
        value={taskItemState}
        className={style.form__content__input}
      />
      <button onClick={addTaskItem}>add item</button>

      {tasksStateList.map((item) => (
        <label key={`task${tasksStateList.indexOf(item)}`}>
          <input type='checkbox' name={`task${tasksStateList.indexOf(item)}`} />
          {item.text}
        </label>
      ))}
    </div>
  );
};

export default NotesFormTaskType;

NotesFormTaskType.propTypes = {
  taskItemState: PropTypes.string,
  handleAddTaskItemInput: PropTypes.func.isRequired,
  addTaskItem: PropTypes.func.isRequired,
  tasksStateList: PropTypes.array,
};
