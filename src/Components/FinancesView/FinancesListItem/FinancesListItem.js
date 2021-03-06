import React from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { deleteFinanceItemActions } from '../../../actions/financesActions';
import * as style from './FinancesListItem.module.scss';
import * as icons from '../../../assets/icons';

const FinancesListItem = ({ financeType, financeTitle, category, financeValue, id }) => {
  const dispatch = useDispatch();

  const deleteItemFromStore = (event) => {
    event.stopPropagation();

    dispatch(deleteFinanceItemActions(id));
  };
  return (
    <li key={id}>
      <div
        className={
          financeType === 'income'
            ? `${style.content} ${style['content--income']}`
            : `${style.content} ${style['content--expense']}`
        }
      >
        <h3 className={style.title}>{financeTitle}</h3>
        {category === 'payment' ? (
          <img src={icons.finance_black} alt='category watermark' className={style.img} />
        ) : category === 'basic costs' ? (
          <img src={icons.cart_black} alt='category watermark' className={style.img} />
        ) : category === 'cash' ? (
          <img src={icons.cash_black} alt='category watermark' className={style.img} />
        ) : category === 'health' ? (
          <img src={icons.health_black} alt='category watermark' className={style.img} />
        ) : category === 'home & bills' ? (
          <img src={icons.home_black} alt='category watermark' className={style.img} />
        ) : category === 'entertainment' ? (
          <img src={icons.entertainment_black} alt='category watermark' className={style.img} />
        ) : category === 'others' ? (
          <img src={icons.other_black} alt='category watermark' className={style.img} />
        ) : null}

        <p className={style.value}>{financeValue.toFixed(2)} $</p>

        <button className={style.btn} onClick={deleteItemFromStore}>
          <img src={icons.trash_black} alt='delete finances list item' className={style.btn__img} />
        </button>
      </div>
    </li>
  );
};

export default FinancesListItem;

FinancesListItem.propTypes = {
  financeType: PropTypes.oneOf(['income', 'expense']).isRequired,
  financeTitle: PropTypes.string,
  category: PropTypes.oneOf([
    'payment',
    'cash',
    'basic costs',
    'health',
    'home & bills',
    'entertainment',
    'others',
    '',
  ]),
  financeValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  id: PropTypes.string.isRequired,
};

FinancesListItem.defaultValue = {
  category: 'others',
};
