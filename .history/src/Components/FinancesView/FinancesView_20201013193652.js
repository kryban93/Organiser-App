import React from 'react';
import './FinancesView.module.scss';

const FinancesView = () => {
  return (
    <section>
      <div>
        <h1>This is Finances View</h1>

        <form>
          <label>
            <input type='radio' value='option1' checked={true} />
            Option 1
          </label>
        </form>
      </div>
    </section>
  );
};

export default FinancesView;
