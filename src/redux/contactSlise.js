import { createSlice } from '@reduxjs/toolkit';

const contactSlice = createSlice({
  name: 'contacts',
  initialState: { contacts: [], filterValue: '' },
  reducers: {
    addContact(state, { payload }) {
      state.contacts = [payload, ...state.contacts];
    },
    deleteContact(state, { payload }) {
      state.contacts = state.contacts.filter(contact => contact.id !== payload);
    },
    changeFilter(state, { payload }) {
      state.filterValue = payload;
    },
  },
});

export const { addContact, deleteContact, changeFilter } = contactSlice.actions;
export const contactsReducer = contactSlice.reducer;
