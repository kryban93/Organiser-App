import React, { useEffect, useState } from 'react';
import moment from 'moment';
import * as style from './CalendarView.module.scss';
import * as icons from '../../assets/icons';
import CalendarForm from '../CalendarForm/CalendarForm';
import CalendarCard from '../CalendarCard/CalendarCard';

const getToday = () => moment().format('MMDDYYYY');

const CalendarView = () => {
  const [formOpenState, setFormOpenState] = useState(false);
  const [currentlySelectedDay, setCurrentlySelectedDay] = useState('');

  useEffect(() => {
    setCurrentlySelectedDay(getToday());
  }, [currentlySelectedDay]);

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

      {formOpenState && <CalendarForm handleCloseFormModal={handleCloseFormModal} />}

      <button className={style.btn} onClick={() => setFormOpenState(true)}>
        <img
          src={icons.addCalendar_white}
          className={style.btn__img}
          alt='open finances form button'
        />
      </button>
    </section>
  );
};

export default CalendarView;
