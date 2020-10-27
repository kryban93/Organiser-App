import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import * as style from './FinanceForm.module.scss';
import { addFinanceItemAction } from '../../actions';
import FinancesFormCategories from '../FinancesFormCategories/FinancesFormCategories';
import * as icons from '../../assets/icons';

const FinanceForm = ({ handleCloseFormModal }) => {
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
    <div className={style.wrapper}>
      <form className={style.form} onSubmit={handleFinancesSubmit}>
        <button onClick={handleCloseFormModal} className={style[`form__btn--close`]}>
          <img src={icons.close_black} alt='close note form' />
        </button>
        <h2 className={style.form__title}>Select data type</h2>
        <div className={style.form__type}>
          <input
            id='income'
            type='radio'
            name='financeType'
            value='income'
            className={style.form__type__input}
            defaultChecked
          />
          <label htmlFor='income' className={style.form__type__label}>
            income
          </label>
          <input
            id='expense'
            type='radio'
            name='financeType'
            value='expense'
            className={style.form__type__input}
          />
          <label htmlFor='expense' className={style.form__type__label}>
            expense
          </label>
        </div>
        <FinancesFormCategories handleRadioInputChange={handleRadioInputChange} />
        <div className={style.form__content}>
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
    </div>
  );
};

export default FinanceForm;
