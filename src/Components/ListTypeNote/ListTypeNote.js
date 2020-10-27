import React from 'react';
import * as style from './ListTypeNote.module.scss';

const ListTypeNote = ({ list }) => {
  return (
    <div className={style.wrapper}>
      <ul>
        {list.map((item) => (
          <li>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default ListTypeNote;
