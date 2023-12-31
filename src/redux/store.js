import { configureStore } from '@reduxjs/toolkit';
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
import { contactReducer } from './contacts/contactSlice';
import { authReducer } from './auth/authSlice';
import { filterReducer } from './contacts/filterSlice';
import { combineReducers } from '@reduxjs/toolkit';

// const persistConfig = {
//   key: 'root',
//   storage,
// };

const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};

const reducers = combineReducers({
  contacts: contactReducer,
  filter: filterReducer,
  auth: persistReducer(authPersistConfig, authReducer),
});

// const persistedReducer = persistReducer(persistConfig, reducer);

export const store = configureStore({
  reducer: reducers,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
  devTools: process.env.NODE_ENV === 'development',
});

export const persistor = persistStore(store);
