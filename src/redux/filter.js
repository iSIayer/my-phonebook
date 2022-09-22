import { createSlice } from '@reduxjs/toolkit';

export const filterContacts = createSlice({
  name: 'filter',
  initialState: { value: '' },
  reducers: {
    filterItems: (state, acion) => {
      return { ...state, value: acion.payload };
    },
  },
});

export const { filterItems } = filterContacts.actions;
