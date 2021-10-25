import { configureStore } from '@reduxjs/toolkit';
import { phonebookReducer } from './phonebook/phonebook-reducer';
import { authReducer } from './auth/auth-reducer';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const middleware = getDefaultMiddleware => {
  return [
    ...getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [
          FLUSH,
          REHYDRATE,
          PAUSE,
          PERSIST,
          PURGE,
          REGISTER,
          'auth/registration/fulfilled',
          'auth/registration/rejected',
          'auth/login/fulfilled',
          'auth/login/rejected',
          'auth/refresh/fulfilled',
          'auth/refresh/rejected',
        ],
      },
    }),
  ];
};

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['token'],
};

export const store = configureStore({
  reducer: {
    auth: persistReducer(persistConfig, authReducer),
    phonebook: phonebookReducer,
  },
  devTools: process.env.NODE_ENV === 'development',
  middleware,
});

export const persistor = persistStore(store);
