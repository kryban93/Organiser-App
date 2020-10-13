import React from 'react';
import './FinancesView.module.scss';

const FinancesView = () => {
  return (
    <section>
      <div>
        <h1>This is Finances View</h1>

        <form>
          <label>
            <input type='radio' value='Income' />
            Income
          </label>
          <label>
            <input type='radio' value='Outcome' />
            Outcome
          </label>
        </form>
      </div>
    </section>
  );
};

export default FinancesView;
