import React from 'react';
import PropTypes from 'prop-types';
import * as style from './FinancesList.module.scss';
import FinancesListItem from '../FinancesListItem/FinancesListItem';

const FinancesList = ({ financesArray }) => {
  return (
    <ul className={style.list}>
      {financesArray.map(({ id, payload }) => (
        <FinancesListItem {...payload} id={id} key={id} />
      ))}
    </ul>
  );
};

export default FinancesList;

FinancesList.propTypes = {
  financesArray: PropTypes.array.isRequired,
};
