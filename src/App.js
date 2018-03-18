import React from 'react';
import { parse } from 'url';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/es/integration/react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { configureStore } from './store';
import NavBar from './components/NavBar/NavBar';
import Modals from './components/Modals/Modals';
import { Home, Contacts, NotFound } from './routes/index';
import { homepage } from '../package.json';
import s from './index.styl';

const { persistor, store } = configureStore();

const basename = homepage && parse(homepage).pathname;

const routes = [
  {
    title: 'Home',
    path: '/',
    exact: true,
    component: Home,
  },
  {
    title: 'Contacts',
    path: '/contacts',
    exact: true,
    component: Contacts,
  },
];

const App = () => (
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <BrowserRouter basename={basename}>
        <div className={s.wrapper}>
          <div className={s.navbar}>
            <NavBar />
          </div>
          <div className={s.content}>
            <Switch>
              {routes.map(route => (
                <Route key={route.title} {...route} />
              ))}
              <Route component={NotFound} />
            </Switch>
          </div>
          <Modals />
        </div>
      </BrowserRouter>
    </PersistGate>
  </Provider>
);

export default App;
