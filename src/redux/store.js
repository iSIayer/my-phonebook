import { configureStore } from '@reduxjs/toolkit';
import { phonebookApi } from 'components/api/phonebookApi';
import { contactsSlice } from 'redux/contacts/contactsSlice';
import authReducer from './auth/auth-slice';
import storage from 'redux-persist/lib/storage';
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

const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};

export const store = configureStore({
  reducer: {
    auth: persistReducer(authPersistConfig, authReducer),
    contacts: contactsSlice.reducer,
    [phonebookApi.reducerPath]: phonebookApi.reducer,
  },
  middleware: getDefaultMiddleware => [
    ...getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
    phonebookApi.middleware,
  ],
});

export const persistor = persistStore(store);
