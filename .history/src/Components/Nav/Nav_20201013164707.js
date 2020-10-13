import React from 'react';
import './Nav.module.scss';
import { Link, NavLink } from 'react-router-dom';

const Nav = () => {
  return (
    <nav>
      <Link to='/'>
        <p>Main View</p>
      </Link>
      <Link to='/finances'>
        <p>Finances View</p>
      </Link>
      <Link to='/notes'>
        <p>Notes View</p>
      </Link>
    </nav>
  );
};

export default Nav;
