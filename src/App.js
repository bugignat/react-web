import React from 'react';
import { parse } from 'url';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/es/integration/react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { configureStore } from './store';
import { NavBar } from './components/NavBar/NavBar';
import { Home, About, Contacts, Terms, NotFound } from './pages/index';
import { homepage } from '../package.json';
import logo from './assets/icons/logo.svg';
import './App.css';

const { persistor, store } = configureStore();

const basename = homepage && parse(homepage).pathname;

const App = () => (
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <BrowserRouter basename={basename}>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome to React Baby</h1>
          </header>
          <NavBar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about/" component={About} />
            <Route path="/contacts/" component={Contacts} />
            <Route component={NotFound} />
          </Switch>
          <Route exact path="/about/terms/" component={Terms} />
        </div>
      </BrowserRouter>
    </PersistGate>
  </Provider>
);

export default App;
