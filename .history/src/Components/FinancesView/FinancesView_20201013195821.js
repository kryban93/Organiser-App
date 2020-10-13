import React from 'react';
import './FinancesView.scss';
import FinanceForm from '../FinanceForm/FinanceForm';

const FinancesView = () => {
  function handleSubmit(event) {
    event.preventDefault();
    console.log(event.target.financeType);
  }

  return (
    <section>
      <div>
        <h1>This is Finances View</h1>
      </div>
    </section>
  );
};

export default FinancesView;
