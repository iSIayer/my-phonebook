import { createSlice } from '@reduxjs/toolkit';

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    filter: '',
  },
  reducers: {
    filter(state, { payload }) {
      state.filter = payload;
    },
  },
});

export const { filter } = contactsSlice.actions;

//Selectors

export const getFilter = state => state.contacts.filter;
