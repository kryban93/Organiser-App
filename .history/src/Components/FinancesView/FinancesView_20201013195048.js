import React from 'react';
import './FinancesView.scss';

const FinancesView = () => {
  return (
    <section>
      <div>
        <h1>This is Finances View</h1>

        <form className='finance__form'>
          <h3>What type of data You want to add</h3>
          <div>
            <label>
              <input type='radio' name='financeType' value='Income' />
              Income
            </label>
            <label>
              <input type='radio' name='financeType' value='Outcome' />
              Outcome
            </label>
          </div>
          <div>
            <select>
              <option>once</option>
              <option>yearly</option>
              <option>monthly</option>
              <option>weekly</option>
              <option>daily</option>
              <option>custon</option>
            </select>
          </div>
          <input type='text' placeholder='value' />
        </form>
      </div>
    </section>
  );
};

export default FinancesView;
