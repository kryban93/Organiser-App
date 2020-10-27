import React from 'react';
import * as style from './NotesFormListType.module.scss';

const NotesFormListType = ({ handleAddListItemInput, listItemState, addListItem, listState }) => {
  return (
    <div className={style.form__content}>
      <label htmlFor='list-input'>list item</label>
      <input
        type='text'
        name='list'
        id='list-input'
        onChange={handleAddListItemInput}
        value={listItemState}
        className={style.form__content__input}
      />
      <button onClick={addListItem}>add to list</button>
      <ul>
        {listState.map((item) => (
          <li key={listState.indexOf(item)}>{`${listState.indexOf(item) + 1}. ${item}`}</li>
        ))}
      </ul>
    </div>
  );
};

export default NotesFormListType;
