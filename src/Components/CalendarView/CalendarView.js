import React, { useEffect, useState } from 'react';
import * as style from './CalendarView.module.scss';
import * as icons from '../../assets/icons';
import CalendarForm from './CalendarForm/CalendarForm';
import CalendarCard from './CalendarCard/CalendarCard';
import CalendarList from './CalendarList/CalendarList';
import { getToday } from '../../momentOperations';

const CalendarView = () => {
  const [formOpenState, setFormOpenState] = useState(false);
  const [currentlySelectedDay, setCurrentlySelectedDay] = useState(getToday());

  useEffect(() => {
    setCurrentlySelectedDay(getToday());
  }, []);

  const handleCloseFormModal = () => {
    setFormOpenState(false);
  };

  const handleCalendarCardItemOnClick = (event) => {
    console.log(event.target.getAttribute('data-id'));
    setCurrentlySelectedDay(event.target.getAttribute('data-id'));
  };
  return (
    <section className={style.wrapper}>
      <h1 className={style.title}>Calendar View</h1>

      <CalendarCard
        currentlySelectedDay={currentlySelectedDay}
        handleCalendarCardItemOnClick={handleCalendarCardItemOnClick}
      />

      <CalendarList currentlySelectedDay={currentlySelectedDay} />
      {formOpenState && <CalendarForm handleCloseFormModal={handleCloseFormModal} />}

      {!formOpenState && (
        <button className={style.btn} onClick={() => setFormOpenState(true)}>
          <img
            src={icons.addCalendar_white}
            className={style.btn__img}
            alt='open finances form button'
          />
        </button>
      )}
    </section>
  );
};

export default CalendarView;
