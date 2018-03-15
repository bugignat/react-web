import { applyMiddleware, createStore, compose } from 'redux';
import { persistStore } from 'redux-persist';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';
import { rootReducer } from './reducers';

const logger = createLogger({ collapsed: true });

export const configureStore = () => {
  const store = createStore(rootReducer, compose(applyMiddleware(thunk, logger)));
  const persistor = persistStore(store);
  return { persistor, store };
};
