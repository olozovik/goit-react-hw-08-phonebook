import { configureStore } from '@reduxjs/toolkit';
import { phonebookReducer } from './phonebook/phonebook-reducer';
import { authReducer } from './auth/auth-reducer';
// import { logger } from 'redux-logger';

const middleware = getDefaultMiddleware => {
  // if (process.env.NODE_ENV === 'development') {
  // return [...getDefaultMiddleware(), phonebookApi.middleware, logger];
  // }
  return [...getDefaultMiddleware()];
};

const store = configureStore({
  reducer: {
    auth: authReducer,
    phonebook: phonebookReducer,
  },
  devTools: process.env.NODE_ENV === 'development',
  middleware,
});

export { store };
