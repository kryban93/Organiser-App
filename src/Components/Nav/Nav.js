import React from 'react';
import * as style from './Nav.module.scss';
import { NavLink } from 'react-router-dom';
import * as icons from '../../assets/icons/index';
import logo from '../../assets/logo/logo.svg';

const Nav = () => {
  return (
    <nav className={style.nav}>
      <img src={logo} alt='logo' className={style.nav__logo} />

      <div className={style.nav__menu}>
        <NavLink to='/' exact activeClassName={style['nav__menu__item--active']}>
          <div className={style.nav__menu__item}>
            <img src={icons.home_white} className={style.nav__menu__item__img} alt='home' />
          </div>
        </NavLink>
        <NavLink to='/finances' activeClassName={style['nav__menu__item--active']}>
          <div className={style.nav__menu__item}>
            <img src={icons.finance_white} className={style.nav__menu__item__img} alt='finances' />
          </div>
        </NavLink>
        <NavLink to='/notes' activeClassName={style['nav__menu__item--active']}>
          <div className={style.nav__menu__item}>
            <img src={icons.note_white} className={style.nav__menu__item__img} alt='notes' />
          </div>
        </NavLink>
        <NavLink to='/calendar' activeClassName={style['nav__menu__item--active']}>
          <div className={style.nav__menu__item}>
            <img src={icons.calendar_white} className={style.nav__menu__item__img} alt='calendar' />
          </div>
        </NavLink>
      </div>
      <button className={`${style.nav__btn} ${style['nav__btn--logout']}`}>
        <img src={icons.logout_white} alt='logout button' />
      </button>
    </nav>
  );
};

export default Nav;
