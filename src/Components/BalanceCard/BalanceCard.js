import React, { useEffect } from 'react';
import './BalanceCard.scss';

const BalanceCard = ({ balanceState }) => {
  useEffect(() => {}, [balanceState]);
  return (
    <div className={balanceState < 0 ? 'balance balance--lower' : 'balance balance--higher'}>
      <h3 className='balance__title'>Your account balance:</h3>
      <p className='balance__value'>{balanceState}</p>
    </div>
  );
};

export default BalanceCard;
