import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteNoteAction } from '../../actions';
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
  const dispatch = useDispatch();
  const formattedDate = `${created.getDate()} ${
    months[created.getMonth()]
  } ${created.getFullYear()}`;
  console.log(formattedDate);

  const deleteNoteFromStore = () => {
    console.log(id);
    dispatch(deleteNoteAction(id));
  };
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

        <button className={style.header__btn} onClick={deleteNoteFromStore}>
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
      ) : type === 'task' ? (
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

NoteWrapper.propTypes = {
  type: PropTypes.oneOf(['note', 'list', 'task', 'calendar']),
  title: PropTypes.string,
  text: PropTypes.string,
  list: PropTypes.array,
  id: PropTypes.string,
  created: PropTypes.instanceOf(Date),
  category: PropTypes.oneOf(['red', 'blue', 'violet', 'green', 'yellow', '']),
};

NoteWrapper.defaultProps = {
  category: '',
};
