import { configureStore } from '@reduxjs/toolkit';
import { phonebookApi } from 'api/phonebookApi';
import { filterContacts } from './filter';

export const store = configureStore({
  reducer: {
    [phonebookApi.reducerPath]: phonebookApi.reducer,
    [filterContacts.name]: filterContacts.reducer,
  },
  middleware: getDefaultMiddleware => [
    ...getDefaultMiddleware(),
    phonebookApi.middleware,
  ],
});
