import React, { useEffect } from 'react';
import * as style from './NoteType.module.scss';

const NoteType = ({ type, text }) => {
  return (
    <div className={style.wrapper}>
      <h3>{type}</h3>
      <p>{text}</p>
    </div>
  );
};

export default NoteType;
