import React from 'react';
import './Nav.scss';
import { NavLink } from 'react-router-dom';
import * as icons from '../../assets/icons/index';

const Nav = () => {
  return (
    <nav className='nav'>
      <div className='nav__menu'>
        <NavLink to='/'>
          <div className='nav__menu__item'>
            <img src={icons.home_white} className='nav__menu__item__img' alt='home' />
            <p className='nav__menu__item__text'>home</p>
          </div>
        </NavLink>
        <NavLink to='/finances'>
          <div className='nav__menu__item'>
            <img src={icons.finance_white} className='nav__menu__item__img' alt='finances' />
            <p className='nav__menu__item__text'>finance</p>
          </div>
        </NavLink>
        <NavLink to='/notes'>
          <div className='nav__menu__item'>
            <img src={icons.note_white} className='nav__menu__item__img' alt='notes' />
            <p className='nav__menu__item__text'>notes</p>
          </div>
        </NavLink>
      </div>
    </nav>
  );
};

export default Nav;
