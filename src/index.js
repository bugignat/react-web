import React from 'react';
import { hydrate, render } from 'react-dom';
import { loadComponents, getState } from 'loadable-components';
import App from './App';
import './index.styl';
window.snapSaveState = () => getState();

const rootElement = document.getElementById('root');

if (rootElement.hasChildNodes()) {
  console.log('App: Hydrate');
  loadComponents().then(() => {
    hydrate(<App/>, rootElement);
  });
} else {
  console.log('App: Render');
  render(<App />, rootElement);
}

if (module.hot) {
  module.hot.accept('./App', () => {
    render(<App />, rootElement);
  });
}
