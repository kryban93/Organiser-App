import React from 'react';
import * as style from './TaskTypeNote.module.scss';

const TaskTypeNote = ({ type }) => {
  return (
    <div className='note'>
      <h3>{type}</h3>
    </div>
  );
};

export default TaskTypeNote;
