import { applyMiddleware, createStore, compose } from 'redux';
import { persistStore } from 'redux-persist';
import thunk from 'redux-thunk';
import { rootReducer } from './reducers';

const middlewares = [thunk];

const isDevelop = process.env.NODE_ENV !== 'production';

if (isDevelop) {
  const { createLogger } = require('redux-logger');
  const logger = createLogger({ collapsed: true });
  middlewares.push(logger);
}

export const configureStore = () => {
  const store = createStore(rootReducer, compose(applyMiddleware(...middlewares)));
  const persistor = persistStore(store);
  return { persistor, store };
};
