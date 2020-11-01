import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { addNoteListItemAction } from '../../actions';
import * as style from './ListTypeNote.module.scss';

const ListTypeNote = ({ list, id }) => {
  const [inputValue, setInputValue] = useState('');
  const dispatch = useDispatch();

  const addListItem = () => {
    const newItem = { text: inputValue, itemId: `listItem${list.length}`, noteId: id };
    dispatch(addNoteListItemAction(newItem));
  };

  return (
    <div className={style.wrapper}>
      <div className={style.header}>
        <input
          type='text'
          className={style.input}
          onChange={(event) => setInputValue(event.target.value)}
          value={inputValue}
        />
        <button className={style.btn} onClick={addListItem}>
          add
        </button>
      </div>
      <ul className={style.list}>
        {list.map((item) => (
          <li key={item.id} className={style.list__item}>
            <p>- {item.text}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListTypeNote;

ListTypeNote.propTypes = {
  list: PropTypes.array.isRequired,
  id: PropTypes.string.isRequired,
};
