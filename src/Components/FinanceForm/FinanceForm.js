import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import './FinanceForm.scss';
import { addFinanceItemAction } from '../../actions';
import FinancesFormCategories from '../FinancesFormCategories/FinancesFormCategories';
import * as icons from '../../assets/icons';

const FinanceForm = () => {
  const [financeValue, setFinanceValue] = useState('');
  const [financeText, setFinanceText] = useState('');
  const [financeCategory, setFinanceCategory] = useState('');
  const dispatch = useDispatch();

  function handleFinancesSubmit(event) {
    event.preventDefault();
    const { financeType } = event.target;
    const formElement = {
      financeType: financeType.value,
      category: financeCategory,
      financeValue:
        financeType.value === 'income' ? parseFloat(financeValue) : parseFloat(`-${financeValue}`),
      financeText: financeText,
    };
    dispatch(addFinanceItemAction(formElement));
  }

  const handleRadioInputChange = (event) => {
    console.log(event.target.value);
    setFinanceCategory(event.target.value);
  };
  return (
    <form className='finances__form' onSubmit={handleFinancesSubmit}>
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
        <input
          id='expense'
          type='radio'
          name='financeType'
          value='expense'
          className='finances__form__type__input'
        />
        <label htmlFor='expense' className='finances__form__type__label'>
          expense
        </label>
      </div>
      <FinancesFormCategories handleRadioInputChange={handleRadioInputChange} />
      <div className='finances__form__content'>
        <label htmlFor='finance-text'>enter description</label>
        <input
          type='text'
          onChange={(e) => setFinanceText(e.target.value)}
          value={financeText}
          name='financeText'
          id='finance-text'
          placeholder='Enter description'
          className='finances__form__description'
        />
        <label htmlFor='finance-value'>enter value</label>
        <input
          type='text'
          onChange={(e) => setFinanceValue(e.target.value)}
          value={financeValue}
          name='financeValue'
          id='finance-value'
          placeholder='value'
          className='finances__form__value'
        />
        <button>add</button>
      </div>
    </form>
  );
};

export default FinanceForm;
