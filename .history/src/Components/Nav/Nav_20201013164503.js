import React from 'react';
import './Nav.module.scss';
import { Link, NavLink } from 'react-router-dom';

const Nav = () => {
  return (
    <nav>
      <Link to='/finances'>
        <p>Finances View</p>
      </Link>
    </nav>
  );
};

export default Nav;
