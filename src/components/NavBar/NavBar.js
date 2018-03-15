import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './NavBar.styl';

export const NavBar = () => (
  <nav className={s.container}>
    <NavLink exact to="/" className={s.link} activeClassName={s.linkActive}>
      Home
    </NavLink>
    <NavLink to="/about/" className={s.link} activeClassName={s.linkActive}>
      About
    </NavLink>
    <NavLink to="/contacts/" className={s.link} activeClassName={s.linkActive}>
      Contacts
    </NavLink>
  </nav>
);
