import React from 'react';
import { parse } from 'url';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/es/integration/react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { configureStore } from './store';
import { NavBar } from './components/NavBar/NavBar';
import { Home, About, Contacts, NotFound } from './pages/index';
import { homepage } from '../package.json';

const { persistor, store } = configureStore();

const basename = homepage && parse(homepage).pathname;

const App = () => (
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <BrowserRouter basename={basename}>
        <div className="App">
          <NavBar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about/" component={About} />
            <Route path="/contacts/" component={Contacts} />
            <Route component={NotFound} />
          </Switch>
        </div>
      </BrowserRouter>
    </PersistGate>
  </Provider>
);

export default App;
