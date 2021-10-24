import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  contact: [],
  filter: '',
};

const phonebookSlice = createSlice({
  name: 'phonebook',
  initialState,
  reducers: {
    changeFilter(state, actions) {
      state.filter = actions.payload;
    },
  },
});

export const phonebookReducer = phonebookSlice.reducer;
export const { changeFilter } = phonebookSlice.actions;
