import React from 'react';
import './Nav.scss';
import { Link, NavLink } from 'react-router-dom';

const Nav = () => {
  return (
    <nav className='nav'>
      <div clasName='nav__menu'>
        <NavLink to='/'>
          <p>Main View</p>
        </NavLink>
        <NavLink to='/finances'>
          <p>Finances View</p>
        </NavLink>
        <NavLink to='/notes'>
          <p>Notes View</p>
        </NavLink>
      </div>
    </nav>
  );
};

export default Nav;
