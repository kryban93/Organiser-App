import React, { useEffect, useState } from 'react';
import './FinancesView.scss';
import FinanceForm from '../FinanceForm/FinanceForm';
import BalanceCard from '../BalanceCard/BalanceCard';

const FinancesView = () => {
  const [financesList, setFinancesList] = useState([]);
  const [balanceState, setBalanceState] = useState([]);

  useEffect(() => {
    function calculateBalance() {
      const IncomeValuesArray = financesList.map(({ financeValue, financeType }) => {
        if (financeType === 'income') {
          return financeValue;
        } else return 0;
      });
      const ExpenseValuesArray = financesList.map(({ financeValue, financeType }) => {
        if (financeType === 'expense') {
          return financeValue;
        } else return 0;
      });

      const totalIncomeValue = IncomeValuesArray.reduce((a, b) => a + b, 0);
      const totalExpenseValue = ExpenseValuesArray.reduce((a, b) => a + b, 0);
      setBalanceState((totalIncomeValue + totalExpenseValue).toFixed(2));
    }
    calculateBalance();
  }, [financesList]);

  function handleSubmit(event) {
    event.preventDefault();
    const { financeType, frequencyTime, financeValue, financeText } = event.target;
    const formElement = {
      financeType: financeType.value,
      frequencyTime: frequencyTime.value,
      financeValue:
        financeType.value === 'income' ? parseFloat(financeValue.value) : parseFloat(`-${financeValue.value}`),
      financeText: financeText.value,
    };
    const financeTemporaryArray = financesList.concat();

    financeTemporaryArray.push(formElement);
    setFinancesList(financeTemporaryArray);
  }

  return (
    <section>
      <div>
        <h1 className='finances__title'>This is Finances View</h1>

        <div className='finances__content'>
          <ul className='finances__content__list'>
            {financesList.map(({ financeType, frequencyTime, financeText, financeValue }) => (
              <li key={financeText}>
                <div
                  className={
                    financeType === 'income'
                      ? 'finances__content__list__item finances__content__list__item--income'
                      : 'finances__content__list__item finances__content__list__item--expense'
                  }
                >
                  <h3>{financeText}</h3>
                  <h4>{frequencyTime}</h4>
                  <p>{financeValue}</p>
                </div>
              </li>
            ))}
          </ul>
          <BalanceCard balanceState={balanceState} />
        </div>
        <FinanceForm handleSubmit={handleSubmit} />
      </div>
    </section>
  );
};

export default FinancesView;
