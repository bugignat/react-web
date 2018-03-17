import React from 'react';
import Page from '../../components/Page/Page';
import s from './NotFound.styl';

const NotFound = () => (
  <Page title="404">
    <h1 className={s.title}>404</h1>
    <p>This is the 404 page</p>
  </Page>
);

export default NotFound;
