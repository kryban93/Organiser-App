import React, { useState } from 'react';
import './FinanceForm.scss';

const FinanceForm = ({ handleSubmit }) => {
  const [financeValue, setFinanceValue] = useState('');
  const [financeText, setFinanceText] = useState('');
  return (
    <form className='finances__form' onSubmit={handleSubmit}>
      <h3 className='finances__form__title'>What type of data You want to add</h3>
      <div className='finances__form__type'>
        <input
          id='income'
          type='radio'
          name='financeType'
          value='income'
          className='finances__form__type__input'
          defaultChecked
        />
        <label htmlFor='income' className='finances__form__type__label'>
          income
        </label>

        <input id='expense' type='radio' name='financeType' value='expense' className='finances__form__type__input' />
        <label htmlFor='expense' className='finances__form__type__label'>
          expense
        </label>
      </div>
      <div className='finances__form__category'>
        <label>
          <input type='radio' name='category' value='finances' defaultChecked />
          finances
        </label>
        <label>
          <input type='radio' name='category' value='basic costs' />
          basic costs
        </label>
        <label>
          <input type='radio' name='category' value='cash' />
          cash
        </label>
        <label>
          <input type='radio' name='category' value='health' />
          healts
        </label>
        <label>
          <input type='radio' name='category' value='home & bills' />
          home & bills
        </label>
        <label>
          <input type='radio' name='category' value='entertainment' />
          entertainment
        </label>
        <label>
          <input type='radio' name='category' value='others' />
          others
        </label>
      </div>
      <input
        type='text'
        onChange={(e) => setFinanceText(e.target.value)}
        value={financeText}
        name='financeText'
        placeholder='Enter description'
        className='finances__form__description'
      />
      <input
        type='text'
        onChange={(e) => setFinanceValue(e.target.value)}
        value={financeValue}
        name='financeValue'
        placeholder='value'
        className='finances__form__value'
      />
      <button>add</button>
    </form>
  );
};

export default FinanceForm;
