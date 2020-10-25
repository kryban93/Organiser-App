import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import './FinancesView.scss';
import FinanceForm from '../FinanceForm/FinanceForm';
import BalanceCard from '../BalanceCard/BalanceCard';

const FinancesView = () => {
  const [balanceState, setBalanceState] = useState(0);

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

      const totalIncomeValue = IncomeValuesArray.reduce((a, b) => a + b, 0);
      const totalExpenseValue = ExpenseValuesArray.reduce((a, b) => a + b, 0);
      setBalanceState((totalIncomeValue + totalExpenseValue).toFixed(2));
    }
    calculateBalance();
  }, [financesArray]);

  return (
    <section>
      <div>
        <h1 className='finances__title'>This is Finances View</h1>

        <div className='finances__content'>
          <ul className='finances__content__list'>
            {financesArray.map(
              ({ id, payload: { financeType, category, financeValue, financeText } }) => (
                <li key={financeText}>
                  <div
                    className={
                      financeType === 'income'
                        ? 'finances__content__list__item finances__content__list__item--income'
                        : 'finances__content__list__item finances__content__list__item--expense'
                    }
                  >
                    <h3>{financeText}</h3>
                    <h4>{category}</h4>
                    <p>{financeValue}</p>
                  </div>
                </li>
              )
            )}
          </ul>
          <BalanceCard balanceState={balanceState} />
        </div>

        <FinanceForm />
      </div>
    </section>
  );
};

export default FinancesView;
