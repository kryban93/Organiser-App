import React from 'react';
import * as style from './NotesFormTypes.module.scss';
import * as icons from '../../assets/icons/index';

const NotesFormTypes = ({ handleTypesRadioInputChange }) => {
  return (
    <div className={style.types}>
      <h2 className={style.types__title}>Select type of note</h2>
      <div className={style.types__content}>
        <input
          type='radio'
          name='types'
          value='note'
          id='note'
          onChange={handleTypesRadioInputChange}
          defaultChecked
          className={style.types__content__input}
        />
        <label htmlFor='note'>
          <img src={icons.note_black} alt='new note' className={style.types__content__img} />
        </label>
        <input
          type='radio'
          name='types'
          value='list'
          id='list'
          onChange={handleTypesRadioInputChange}
          className={style.types__content__input}
        />
        <label htmlFor='list'>
          <img src={icons.list_black} alt='new list' className={style.types__content__img} />
        </label>
        <input
          type='radio'
          name='types'
          value='todo'
          id='todo'
          onChange={handleTypesRadioInputChange}
          className={style.types__content__input}
        />
        <label htmlFor='todo'>
          <img src={icons.checkbox_black} alt='new toDo' className={style.types__content__img} />
        </label>
        <input
          type='radio'
          name='types'
          value='calendar'
          id='calendar'
          onChange={handleTypesRadioInputChange}
          className={style.types__content__input}
        />
        <label htmlFor='calendar'>
          <img
            src={icons.calendar_black}
            alt='new calendar'
            className={style.types__content__img}
          />
        </label>
      </div>
    </div>
  );
};

export default NotesFormTypes;
