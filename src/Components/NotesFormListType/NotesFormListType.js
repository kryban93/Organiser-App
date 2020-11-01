import React from 'react';
import PropTypes from 'prop-types';
import * as style from './NotesFormListType.module.scss';

const NotesFormListType = ({ handleAddListItemInput, listItemState, addListItem, listState }) => {
  return (
    <div className={style.content}>
      <label htmlFor='list-input'>list item</label>
      <input
        type='text'
        name='list'
        id='list-input'
        onChange={handleAddListItemInput}
        value={listItemState}
        className={style.content__input}
      />
      <button onClick={addListItem}>add to list</button>
      <ul>
        {listState.map((item) => (
          <li key={listState.indexOf(item)}>{`${listState.indexOf(item) + 1}. ${item.text}`}</li>
        ))}
      </ul>
    </div>
  );
};

export default NotesFormListType;

NotesFormListType.propTypes = {
  handleAddListItemInput: PropTypes.func.isRequired,
  listItemState: PropTypes.string.isRequired,
  addListItem: PropTypes.func.isRequired,
  listState: PropTypes.array.isRequired,
};
