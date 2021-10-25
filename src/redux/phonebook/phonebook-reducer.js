import { createSlice } from '@reduxjs/toolkit';
import {
  fetchAddContact,
  fetchContacts,
  fetchDeleteContact,
} from './phonebook-operations';

const initialState = {
  filter: '',
  contacts: [],
  error: null,
};

const phonebookSlice = createSlice({
  name: 'phonebook',
  initialState,
  reducers: {
    changeFilter(state, actions) {
      state.filter = actions.payload;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchAddContact.pending, state => {
        state.error = null;
      })
      .addCase(fetchAddContact.fulfilled, (state, action) => {
        state.contacts.push(action.payload);
      })
      .addCase(fetchAddContact.rejected, (state, action) => {
        state.error = action.payload;
      })
      .addCase(fetchContacts.pending, state => {
        state.error = null;
      })
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.contacts = action.payload;
      })
      .addCase(fetchContacts.rejected, (state, action) => {
        state.error = action.payload;
      })
      .addCase(fetchDeleteContact.pending, state => {
        state.error = null;
      })
      .addCase(fetchDeleteContact.fulfilled, (state, action) => {
        state.contacts = state.contacts.filter(
          contact => contact.id !== action.payload,
        );
      })
      .addCase(fetchDeleteContact.rejected, (state, action) => {
        state.error = action.payload;
      });
  },
});

export const phonebookReducer = phonebookSlice.reducer;
export const { changeFilter } = phonebookSlice.actions;
