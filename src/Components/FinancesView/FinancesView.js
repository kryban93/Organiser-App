import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import * as style from './FinancesView.module.scss';
import FinanceForm from '../FinanceForm/FinanceForm';
import BalanceCard from '../BalanceCard/BalanceCard';
import * as icons from '../../assets/icons';
import FinancesList from '../FinancesList/FinancesList';

const FinancesView = () => {
  const [balanceState, setBalanceState] = useState(0);
  const [isFormOpen, setFormOpenState] = useState(false);

  const financesArray = useSelector((state) => state.financesOperationsReducer);

  useEffect(() => {
    function calculateBalance() {
      const IncomeValuesArray = financesArray.map(({ payload: { financeValue, financeType } }) => {
        if (financeType === 'income') {
          return financeValue;
        } else return 0;
      });
      const ExpenseValuesArray = financesArray.map(({ payload: { financeValue, financeType } }) => {
        if (financeType === 'expense') {
          return financeValue;
        } else return 0;
      });

      const totalIncomeValue = parseFloat(IncomeValuesArray.reduce((a, b) => a + b, 0));
      const totalExpenseValue = parseFloat(ExpenseValuesArray.reduce((a, b) => a + b, 0));
      setBalanceState((totalIncomeValue + totalExpenseValue).toFixed(2));
    }
    calculateBalance();
  }, [financesArray, balanceState]);

  const handleCloseFormModal = (event) => {
    event.stopPropagation();
    setFormOpenState(false);
  };

  return (
    <section className={style.wrapper}>
      <header>
        {financesArray.length > 0 ? (
          <h1 className={style.title}>Watch your budget</h1>
        ) : (
          <h1 className={style.title}>Add some data..</h1>
        )}
      </header>

      <div className={style.content}>
        {financesArray.length > 0 ? <BalanceCard balanceState={balanceState} /> : null}
        <FinancesList financesArray={financesArray} />
      </div>

      {isFormOpen && <FinanceForm handleCloseFormModal={handleCloseFormModal} />}

      <button className={style.btn} onClick={() => setFormOpenState(true)}>
        <img
          src={icons.addFinance_white}
          className={style.btn__img}
          alt='open finances form button'
        />
      </button>
    </section>
  );
};

export default FinancesView;
