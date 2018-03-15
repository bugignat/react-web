import React from 'react';
import Helmet from 'react-helmet';
import { NavLink } from 'react-router-dom';

export const About = () => (
  <div>
    <h1>About</h1>
    <h2>
      This is the About page
    </h2>
    <NavLink to="/about/terms/">Terms</NavLink>
    <Helmet title="About" />
  </div>
);
