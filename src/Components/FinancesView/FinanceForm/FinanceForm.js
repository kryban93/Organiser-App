import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import * as style from './FinanceForm.module.scss';
import { addFinanceItemAction } from '../../../actions/financesActions';
import FinancesFormCategories from '../FinancesFormCategories/FinancesFormCategories';
import * as icons from '../../../assets/icons';

const FinanceForm = ({ handleCloseFormModal }) => {
  const [financeValue, setFinanceValue] = useState('00.00');
  const [financeType, setFinanceType] = useState('income');
  const [financeTitle, setFinanceTitle] = useState('Title');
  const [financeCategory, setFinanceCategory] = useState('');
  const dispatch = useDispatch();

  function handleFinancesSubmit(event) {
    event.preventDefault();
    const formElement = {
      financeType: financeType,
      category: financeCategory,
      financeValue:
        financeType === 'income' ? parseFloat(financeValue) : parseFloat(`-${financeValue}`),
      financeTitle: financeTitle,
    };
    dispatch(addFinanceItemAction(formElement));
  }

  const handleRadioInputChange = (event) => {
    setFinanceCategory(event.target.value);
  };

  return (
    <div className={style.wrapper}>
      <form className={style.form} onSubmit={handleFinancesSubmit}>
        <button
          onClick={handleCloseFormModal}
          className={`${style.form__btn} ${style[`form__btn--close`]}`}
        >
          <img src={icons.close_black} alt='close note form' />
        </button>
        <h2 className={style.form__title}>Select data type</h2>
        <div className={style.form__type}>
          <input
            id='income'
            type='radio'
            name='financeType'
            value={financeType}
            className={style.form__type__input}
            defaultChecked
            onChange={(event) => setFinanceType(event.target.value)}
          />
          <label htmlFor='income' className={style.form__type__label}>
            income
          </label>
          <input
            id='expense'
            type='radio'
            name='financeType'
            value={financeType}
            className={style.form__type__input}
            onChange={(event) => setFinanceType(event.target.value)}
          />
          <label htmlFor='expense' className={style.form__type__label}>
            expense
          </label>
        </div>
        <FinancesFormCategories handleRadioInputChange={handleRadioInputChange} />
        <div className={style.form__content}>
          <div className={style.form__content__item}>
            <label htmlFor='finance-text'>enter description</label>
            <input
              type='text'
              onChange={(e) => setFinanceTitle(e.target.value)}
              value={financeTitle}
              name='financeTitle'
              id='finance-text'
              className='finances__form__description'
            />
          </div>
          <div className={style.form__content__item}>
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
          </div>
          <button className={`${style.form__btn} ${style['form__btn--submit']}`}>add</button>
        </div>
      </form>
    </div>
  );
};

export default FinanceForm;

FinanceForm.propTypes = {
  handleCloseFormModal: PropTypes.func.isRequired,
};
