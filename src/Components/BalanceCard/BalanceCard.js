import React from 'react';
import './BalanceCard.scss';

const BalanceCard = ({ balanceState }) => {
  return (
    <div>
      <h3>Your account balance:</h3>
      <p>{balanceState}</p>
    </div>
  );
};

export default BalanceCard;
