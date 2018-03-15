import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './NavBar.styl';

export const NavBar = () => (
  <nav className={s.container}>
    <NavLink exact to="/" activeStyle={{ color: 'red' }}>
      Home
    </NavLink>
    <NavLink to="/about/" activeStyle={{ color: 'red' }}>
      About
    </NavLink>
    <NavLink to="/contacts/" activeStyle={{ color: 'red' }}>
      Contacts
    </NavLink>
  </nav>
);
