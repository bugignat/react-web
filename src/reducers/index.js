import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { authReducer } from './auth';

const authPersist = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};

export const rootReducer = combineReducers({
  auth: persistReducer(authPersist, authReducer),
  // other reducers,
});
