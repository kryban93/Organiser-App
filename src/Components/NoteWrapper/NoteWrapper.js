import React from 'react';
import * as style from './NoteWrapper.module.scss';
import NoteType from '../NoteType/NoteType';
import ListTypeNote from '../ListTypeNote/ListTypeNote';
import TaskTypeNote from '../TaskTypeNote/TaskTypeNote';
import CalendarTypeNote from '../CalendarTypeNote/CalendarTypeNote';
import * as icons from '../../assets/icons';

const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'October',
  'September',
  'November',
  'December',
];

const NoteWrapper = ({ type, title, text, list, id, created, category }) => {
  const formattedDate = `${created.getDate()} ${
    months[created.getMonth()]
  } ${created.getFullYear()}`;
  console.log(formattedDate);

  return (
    <div className={style.wrapper}>
      <div
        className={
          category === 'red'
            ? `${style.header} ${style['header--red']} `
            : category === 'blue'
            ? `${style.header} ${style['header--blue']} `
            : category === 'violet'
            ? `${style.header} ${style['header--violet']} `
            : category === 'green'
            ? `${style.header} ${style['header--green']} `
            : category === 'yellow'
            ? `${style.header} ${style['header--yellow']} `
            : style.header
        }
      >
        <h3 className={style.header__title}>{title}</h3>
        <span className={style.header__date}>{formattedDate}</span>

        <button className={style.header__btn}>
          <img
            className={style.header__btn__img}
            src={icons.close_black}
            alt='delete note button'
          />
        </button>
      </div>
      {type === 'note' ? (
        <NoteType type={type} text={text} />
      ) : type === 'list' ? (
        <ListTypeNote list={list} />
      ) : type === 'todo' ? (
        <TaskTypeNote type={type} />
      ) : type === 'calendar' ? (
        <div className='note'>
          <CalendarTypeNote type={type} />
        </div>
      ) : null}
    </div>
  );
};

export default NoteWrapper;
