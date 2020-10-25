import React from 'react';
import * as style from './NotesFormCategories.module.scss';

const NotesFormCategories = ({ handleCategoriesRadioInputChange }) => {
  return (
    <div className={style.category}>
      <h3 className={style.category__title}>Select Category</h3>
      <div className={style.category__content}>
        <input
          type='radio'
          name='category'
          id='red'
          value='red'
          className={style.category__content__input}
          onChange={handleCategoriesRadioInputChange}
        />
        <label
          htmlFor='red'
          className={`${style['category__content__label']} ${style['category__content__label--red']}`}
        />
        <input
          type='radio'
          name='category'
          id='violet'
          value='violet'
          className={style.category__content__input}
          onChange={handleCategoriesRadioInputChange}
        />
        <label
          htmlFor='violet'
          className={`${style['category__content__label']} ${style['category__content__label--violet']}`}
        />
        <input
          type='radio'
          name='category'
          id='blue'
          value='blue'
          className={style.category__content__input}
          onChange={handleCategoriesRadioInputChange}
        />
        <label
          htmlFor='blue'
          className={`${style['category__content__label']} ${style['category__content__label--blue']}`}
        />
        <input
          type='radio'
          name='category'
          id='green'
          value='green'
          className={style.category__content__input}
          onChange={handleCategoriesRadioInputChange}
        />
        <label
          htmlFor='green'
          className={`${style['category__content__label']} ${style['category__content__label--green']}`}
        />
        <input
          type='radio'
          name='category'
          id='yellow'
          value='yellow'
          className={style.category__content__input}
          onChange={handleCategoriesRadioInputChange}
        />
        <label
          htmlFor='yellow'
          className={`${style['category__content__label']} ${style['category__content__label--yellow']}`}
        />
      </div>
    </div>
  );
};

export default NotesFormCategories;
