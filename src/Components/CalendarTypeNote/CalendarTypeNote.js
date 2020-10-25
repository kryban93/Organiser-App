import React from 'react';
import * as style from './CalendarTypeNote.module.scss';

const CalendarTypeNote = ({ type }) => {
  return (
    <div>
      <h3>{type}</h3>
    </div>
  );
};

export default CalendarTypeNote;
