import React from 'react';
import { hydrate, render } from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import App from './App';
import './index.styl';

const rootElement = document.getElementById('root');

if (rootElement.hasChildNodes()) {
  console.log('App: Hydrate');
  hydrate(<App />, rootElement);
} else {
  console.log('App: Render');
  render(<App />, rootElement);
}

if (module.hot) {
  module.hot.accept('./App', () => {
    render(<App />, rootElement);
  });
}

registerServiceWorker();
