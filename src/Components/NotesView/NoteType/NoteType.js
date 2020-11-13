import React from 'react';
import PropTypes from 'prop-types';
import * as style from './NoteType.module.scss';

const NoteType = ({ type, text }) => {
  return (
    <div className={style.wrapper}>
      <p>{text}</p>
    </div>
  );
};

export default NoteType;

NoteType.propTypes = {
  text: PropTypes.string,
};

NoteType.defaultProps = {
  text: 'Click on the text to edit note content',
};
