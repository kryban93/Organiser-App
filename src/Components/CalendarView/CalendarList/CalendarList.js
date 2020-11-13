import React from 'react';
import style from './CalendarList.module.scss';
import { useSelector } from 'react-redux';
import CalendarListItem from '../CalendarListItem/CalendarListItem';

const CalendarList = ({ currentlySelectedDay }) => {
  const calendarArray = useSelector((state) => state.calendarOperationsReducer);

  return (
    <div className={style.wrapper}>
      <h1>{currentlySelectedDay}</h1>

      <div className={style.content}>
        {calendarArray.map((item) => (
          <CalendarListItem key={item.id} payload={item.payload} />
        ))}
      </div>
    </div>
  );
};

export default CalendarList;
