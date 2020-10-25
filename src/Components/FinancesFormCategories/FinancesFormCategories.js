import React from 'react';
import './FinancesFormCategories.scss';
import * as icons from '../../assets/icons';

const FinancesFormCategories = ({ handleRadioInputChange }) => {
  return (
    <div className='finances__form__category__wrapper'>
      <h3>Category</h3>
      <div className='finances__form__category'>
        <input
          type='radio'
          name='category'
          value='payment'
          className='finances__form__category__input'
          id='payment'
          onChange={handleRadioInputChange}
          defaultChecked
        />
        <label htmlFor='payment' className='finances__form__category__label'>
          <img
            src={icons.finance_black}
            alt='payment category'
            className='finances__form__category__label__img'
          />
          payment
        </label>
        <input
          type='radio'
          name='category'
          value='basic costs'
          className='finances__form__category__input'
          id='basic-costs'
          onChange={handleRadioInputChange}
        />
        <label htmlFor='basic-costs' className='finances__form__category__label'>
          <img
            src={icons.cart_black}
            alt='basic costs category'
            className='finances__form__category__label__img'
          />
          basic-costs
        </label>
        <input
          type='radio'
          name='category'
          value='cash'
          className='finances__form__category__input'
          id='cash'
          onChange={handleRadioInputChange}
        />
        <label htmlFor='cash' className='finances__form__category__label'>
          <img
            src={icons.cash_black}
            alt='cash category'
            className='finances__form__category__label__img'
          />
          cash
        </label>
        <input
          type='radio'
          name='category'
          value='health'
          className='finances__form__category__input'
          id='health'
          onChange={handleRadioInputChange}
        />
        <label htmlFor='health' className='finances__form__category__label'>
          <img
            src={icons.health_black}
            alt='health category'
            className='finances__form__category__label__img'
          />
          healts
        </label>
        <input
          type='radio'
          name='category'
          value='home & bills'
          className='finances__form__category__input'
          id='home-bills'
          onChange={handleRadioInputChange}
        />
        <label htmlFor='home-bills' className='finances__form__category__label'>
          <img
            src={icons.home_black}
            alt='home & bills category'
            className='finances__form__category__label__img'
          />
          home & bills
        </label>
        <input
          type='radio'
          name='category'
          value='entertainment'
          className='finances__form__category__input'
          id='entertainment'
          onChange={handleRadioInputChange}
        />
        <label htmlFor='entertainment' className='finances__form__category__label'>
          <img
            src={icons.entertainment_black}
            alt='entertainment category'
            className='finances__form__category__label__img'
          />
          entertainment
        </label>
        <input
          type='radio'
          name='category'
          value='others'
          className='finances__form__category__input'
          id='others'
          onChange={handleRadioInputChange}
        />
        <label htmlFor='others' className='finances__form__category__label'>
          <img
            src={icons.other_black}
            alt='others category'
            className='finances__form__category__label__img'
          />
          others
        </label>
      </div>
    </div>
  );
};

export default FinancesFormCategories;
