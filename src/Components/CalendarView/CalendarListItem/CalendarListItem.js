import React, { useEffect } from 'react';
import style from './CalendarListItem.module.scss';

const CalendarListItem = ({
  payload: {
    title,
    id,
    startDate,
    isWholeDayEvent,
    eventStartTime,
    isRepetetiveEvent,
    repetetiveOption,
    eventCategory,
  },
}) => {
  useEffect(() => {
    console.log(title);
  }, [title]);
  return (
    <div className={style.wrapper}>
      <h3 className={style.title}>{title}</h3>
    </div>
  );
};

export default CalendarListItem;
