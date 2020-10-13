import React from 'react';
import './Nav.module.scss';
import { Link, NavLink } from 'react-router-dom';

const Nav = () => {
  return (
    <nav className='nav'>
      <div clasName='nav__menu'>
        <Link to='/'>
          <p>Main View</p>
        </Link>
        <Link to='/finances'>
          <p>Finances View</p>
        </Link>
        <Link to='/notes'>
          <p>Notes View</p>
        </Link>
      </div>
    </nav>
  );
};

export default Nav;
