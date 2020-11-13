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
    <div className={style.content}>
      <input
        type='text'
        name='task'
        onChange={handleAddTaskItemInput}
        value={taskItemState}
        className={style.content__input}
      />
      <button onClick={addTaskItem} className={style.btn}>
        add item
      </button>
      <div className={style.content__list}>
        {tasksStateList.map((item) => (
          <div key={`item${tasksStateList.indexOf(item)}`}>
            <p>- {item.text}</p>
          </div>
        ))}
      </div>
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
