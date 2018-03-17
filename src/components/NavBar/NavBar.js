import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './NavBar.styl';

export const NavBar = () => {
  return (
    <nav className={s.container}>
      <div>
        <div className={s.logo}>🔥 Logo</div>
      </div>
      <div>
        <NavLink exact to="/" className={s.link} activeClassName={s.linkActive}>🏠 Home</NavLink>
        <NavLink to="/contacts" className={s.link} activeClassName={s.linkActive}>📢 Contacts</NavLink>
      </div>
    </nav>
  );
};
