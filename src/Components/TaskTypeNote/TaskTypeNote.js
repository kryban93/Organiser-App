import React from 'react';
import * as style from './TaskTypeNote.module.scss';

const TaskTypeNote = ({ type }) => {
  return (
    <div className={style.wrapper}>
      <h3>{type}</h3>
    </div>
  );
};

export default TaskTypeNote;
