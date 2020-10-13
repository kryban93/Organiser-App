import React from 'react';
import './FinancesView.scss';

const FinancesView = () => {
  return (
    <section>
      <div>
        <h1>This is Finances View</h1>

        <form className='finance__form'>
          <h3>What type of data You want to add</h3>
          <label>
            <input type='radio' name='financeType' value='Income' />
            Income
          </label>
          <label>
            <input type='radio' name='financeType' value='Outcome' />
            Outcome
          </label>
        </form>
      </div>
    </section>
  );
};

export default FinancesView;
