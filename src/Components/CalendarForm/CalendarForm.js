import React, { useState } from 'react';
import PropTypes from 'prop-types';
import * as style from './CalendarForm.module.scss';
import * as icons from '../../assets/icons';

const CalendarForm = ({ handleCloseFormModal }) => {
  const [eventTitle, setEventTitle] = useState('');

  const handleFormSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div className={style.wrapper}>
      <form className={style.form} onSubmit={handleFormSubmit}>
        <h3>Add event </h3>
        <button onClick={handleCloseFormModal} className={style[`form__btn--close`]}>
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

        <button> add </button>
      </form>
    </div>
  );
};

export default CalendarForm;

CalendarForm.propTypes = {
  handleCloseFormModal: PropTypes.func.isRequired,
};
