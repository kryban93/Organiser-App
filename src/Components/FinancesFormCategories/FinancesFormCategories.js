import React from 'react';
import * as style from './FinancesFormCategories.module.scss';
import * as icons from '../../assets/icons';

const FinancesFormCategories = ({ handleRadioInputChange }) => {
  return (
    <div className={style.wrapper}>
      <h3 className={style.title}>Category</h3>
      <div className={style.category}>
        <input
          type='radio'
          name='category'
          value='payment'
          className={style.category__input}
          id='payment'
          onChange={handleRadioInputChange}
        />
        <label htmlFor='payment' className={style.category__label}>
          <img
            src={icons.finance_black}
            alt='payment category'
            className={style.category__label__img}
          />
          payment
        </label>
        <input
          type='radio'
          name='category'
          value='basic costs'
          className={style.category__input}
          id='basic-costs'
          onChange={handleRadioInputChange}
        />
        <label htmlFor='basic-costs' className={style.category__label}>
          <img
            src={icons.cart_black}
            alt='basic costs category'
            className={style.category__label__img}
          />
          basic-costs
        </label>
        <input
          type='radio'
          name='category'
          value='cash'
          className={style.category__input}
          id='cash'
          onChange={handleRadioInputChange}
        />
        <label htmlFor='cash' className={style.category__label}>
          <img src={icons.cash_black} alt='cash category' className={style.category__label__img} />
          cash
        </label>
        <input
          type='radio'
          name='category'
          value='health'
          className={style.category__input}
          id='health'
          onChange={handleRadioInputChange}
        />
        <label htmlFor='health' className={style.category__label}>
          <img
            src={icons.health_black}
            alt='health category'
            className={style.category__label__img}
          />
          healts
        </label>
        <input
          type='radio'
          name='category'
          value='home & bills'
          className={style.category__input}
          id='home-bills'
          onChange={handleRadioInputChange}
        />
        <label htmlFor='home-bills' className={style.category__label}>
          <img
            src={icons.home_black}
            alt='home & bills category'
            className={style.category__label__img}
          />
          home & bills
        </label>
        <input
          type='radio'
          name='category'
          value='entertainment'
          className={style.category__input}
          id='entertainment'
          onChange={handleRadioInputChange}
        />
        <label htmlFor='entertainment' className={style.category__label}>
          <img
            src={icons.entertainment_black}
            alt='entertainment category'
            className={style.category__label__img}
          />
          entertainment
        </label>
        <input
          type='radio'
          name='category'
          value='others'
          className={style.category__input}
          id='others'
          onChange={handleRadioInputChange}
        />
        <label htmlFor='others' className={style.category__label}>
          <img
            src={icons.other_black}
            alt='others category'
            className={style.category__label__img}
          />
          others
        </label>
      </div>
    </div>
  );
};

export default FinancesFormCategories;
