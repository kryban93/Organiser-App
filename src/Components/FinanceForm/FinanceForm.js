import React, { useState } from 'react';
import './FinanceForm.scss';

const FinanceForm = ({ handleSubmit }) => {
  const [financeValue, setFinanceValue] = useState('');
  const [financeText, setFinanceText] = useState('');
  return (
    <form className='finances__form' onSubmit={handleSubmit}>
      <h3 className='finances__form__title'>What type of data You want to add</h3>
      <div className='finances__form__type'>
        <label>
          <input type='radio' name='financeType' value='income' />
          income
        </label>
        <label>
          <input type='radio' name='financeType' value='expense' />
          expense
        </label>
      </div>
      <div className='finances__form__time'>
        <label>
          <input type='radio' name='frequencyTime' value='once' />
          once
        </label>
        <label>
          <input type='radio' name='frequencyTime' value='yearly' />
          yearly
        </label>
        <label>
          <input type='radio' name='frequencyTime' value='monthly' />
          monthly
        </label>
        <label>
          <input type='radio' name='frequencyTime' value='weekly' />
          weekly
        </label>
        <label>
          <input type='radio' name='frequencyTime' value='daily' />
          daily
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
