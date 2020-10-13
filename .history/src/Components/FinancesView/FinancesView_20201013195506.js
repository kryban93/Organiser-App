import React from 'react';
import './FinancesView.scss';

const FinancesView = () => {
  function handleSubmit(event) {
    event.preventDefault();
    console.log(event.target.financeType);
  }

  return (
    <section>
      <div>
        <h1>This is Finances View</h1>

        <form className='finance__form' onSubmit={handleSubmit}>
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
          <input type='number' placeholder='value' />
          <button>add</button>
        </form>
      </div>
    </section>
  );
};

export default FinancesView;
