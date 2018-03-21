import React from 'react';
import { parse } from 'url';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/es/integration/react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import AOS from 'aos';
import { configureStore } from './store';
import NavBar from './components/NavBar/NavBar';
import Modals from './components/Modals/Modals';
import { Home, Contacts, NotFound } from './routes/index';
import { homepage } from '../package.json';
import s from './index.styl';
import 'aos/dist/aos.css';
import 'swiper/dist/css/swiper.min.css';

const { persistor, store } = configureStore();

const basename = homepage && parse(homepage).pathname;

class App extends React.Component {

  componentDidMount() {
    AOS.init({
      offset: 0,
      duration: 800,
      delay: 100,
      once: true,
    });
  }

  componentDidUpdate() {
    AOS.refresh();
  }

  render() {
    return (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <BrowserRouter basename={basename}>
            <div className={s.wrapper}>
              <NavBar />
              <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/contacts/" component={Contacts} />
                <Route component={NotFound} />
              </Switch>
              <Modals />
            </div>
          </BrowserRouter>
        </PersistGate>
      </Provider>
    );
  }
}

export default App;
