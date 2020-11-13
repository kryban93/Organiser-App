import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import * as style from './BalanceCard.module.scss';
import * as icons from '../../../assets/icons';

const BalanceCard = ({ balanceState }) => {
  useEffect(() => {}, [balanceState]);
  return (
    <div
      className={
        balanceState < 0
          ? `${style.balance} ${style['balance--lower']}`
          : `${style.balance} ${style['balance--higher']}`
      }
    >
      <h3 className={style.balance__title}>Your account balance:</h3>
      <p className={style.balance__value}>{balanceState} $</p>
      <img src={icons.cash_black} alt='balance card watermark' className={style.img} />
    </div>
  );
};

export default BalanceCard;

BalanceCard.propTypes = {
  balanceState: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
};
