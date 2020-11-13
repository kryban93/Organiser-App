import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { addCalendarItemAction } from '../../../actions/calendarActions';
import * as style from './CalendarForm.module.scss';
import * as icons from '../../../assets/icons';
import moment from 'moment';
import CalendarFormCategories from '../CalendarFormCategories/CalendarFormCategories';

const CalendarForm = ({ handleCloseFormModal }) => {
  const [eventTitle, setEventTitle] = useState('');
  const [eventStartDate, setEventStartDate] = useState('');
  const [isWholeDayEvent, setIsWholeDayEvent] = useState(true);
  const [eventStartTime, setEventStartTime] = useState('');
  const [isRepetetiveEvent, setIsRepetetiveEvent] = useState(false);
  const [repetetiveOption, setRepetetiveOption] = useState('');
  const [eventCategory, setEventCategory] = useState('');
  const dispatch = useDispatch();

  const handleFormSubmit = (event) => {
    event.preventDefault();
    console.log(moment(eventStartDate).format('YYYYMMDD'));
    console.log(isWholeDayEvent);
    console.log(repetetiveOption);
    const newItem = {
      id: `event${moment(eventStartDate).format('YYYYMMDD')}`,
      title: eventTitle,
      startDate: moment(eventStartDate).format('YYYYMMDD'),
      isWholeDayEvent,
      eventStartTime,
      isRepetetiveEvent,
      repetetiveOption,
      eventCategory,
    };
    console.log(newItem);
    dispatch(addCalendarItemAction(newItem));
  };
  const handleCategoriesRadioInputChange = (event) => {
    setEventCategory(event.target.value);
  };
  return (
    <div className={style.wrapper}>
      <form className={style.form} onSubmit={handleFormSubmit}>
        <h3 className={style.form__title}>Add event </h3>
        <button
          onClick={handleCloseFormModal}
          className={`${style.form__btn} ${style[`form__btn--close`]}`}
        >
          <img src={icons.close_black} alt='close note form' />
        </button>

        <div className={style.form__header}>
          <label htmlFor='title'>Title</label>
          <input
            type='text'
            name='title'
            id='title'
            onChange={(event) => setEventTitle(event.target.value)}
            value={eventTitle}
            className={style.form__header__input}
          />
        </div>

        <div className={style.form__date}>
          <label htmlFor='startDate'>starting date</label>
          <input
            type='date'
            name='startDate'
            id='startDate'
            onChange={(event) => setEventStartDate(event.target.value)}
            value={eventStartDate}
            className={`${style.form__input} ${style['form__input--date']}`}
          />
        </div>

        <div className={style.form__content}>
          <label>whole day?</label>
          <input
            type='checkbox'
            name='wholeDay'
            defaultChecked
            onChange={() => setIsWholeDayEvent(!isWholeDayEvent)}
            className={`${style.form__input} ${style['form__input--wholeDay']}`}
          />
        </div>

        {!isWholeDayEvent && (
          <div>
            <label htmlFor='startTime'>start time</label>
            <input
              type='time'
              id='startTime'
              onChange={(event) => setEventStartTime(event.target.value)}
              value={eventStartTime}
            />
          </div>
        )}

        <div className={style.form__content}>
          <label htmlFor='repetetive'>repetetive?</label>
          <input
            type='checkbox'
            name='repetetive'
            id='repetetive'
            onChange={() => setIsRepetetiveEvent(!isRepetetiveEvent)}
            className={`${style.form__input} ${style['form__input--wholeDay']}`}
          />
        </div>
        {isRepetetiveEvent && (
          <div className={style.form__repetetive}>
            <input
              id='everyday'
              type='radio'
              name='repetetiveOption'
              className={style.form__repetetive__input}
              onChange={(event) => setRepetetiveOption(event.target.value)}
              value='everyday'
            />
            <label htmlFor='everyday' className={style.form__repetetive__label}>
              everyday
            </label>
            <input
              id='everyWeek'
              type='radio'
              name='repetetiveOption'
              className={style.form__repetetive__input}
              onChange={(event) => setRepetetiveOption(event.target.value)}
              value='every week'
            />
            <label htmlFor='everyWeek' className={style.form__repetetive__label}>
              every week
            </label>
            <input
              id='everyMonth'
              type='radio'
              name='repetetiveOption'
              className={style.form__repetetive__input}
              onChange={(event) => setRepetetiveOption(event.target.value)}
              value='every month'
            />
            <label htmlFor='everyMonth' className={style.form__repetetive__label}>
              every month
            </label>
            <input
              id='everyYear'
              type='radio'
              name='repetetiveOption'
              className={style.form__repetetive__input}
              onChange={(event) => setRepetetiveOption(event.target.value)}
              value='every year'
            />
            <label htmlFor='everyYear' className={style.form__repetetive__label}>
              every year
            </label>
            <input
              id='custom'
              type='radio'
              name='repetetiveOption'
              className={style.form__repetetive__input}
              onChange={(event) => setRepetetiveOption(event.target.value)}
              value='custom'
            />
            <label htmlFor='custom' className={style.form__repetetive__label}>
              custom
            </label>
          </div>
        )}

        {repetetiveOption === 'custom' ? (
          <div>
            <p>custom option</p>
          </div>
        ) : null}

        <CalendarFormCategories
          handleCategoriesRadioInputChange={handleCategoriesRadioInputChange}
        />

        <button className={`${style.form__btn} ${style['form__btn--submit']}`}> add </button>
      </form>
    </div>
  );
};

export default CalendarForm;

CalendarForm.propTypes = {
  handleCloseFormModal: PropTypes.func.isRequired,
};
