import { createSlice } from '@reduxjs/toolkit';
import { login, registration } from './auth-operations';

const initialState = {
  name: '',
  email: '',
  token: null,
  error: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(registration.pending, state => {
        state.error = null;
      })
      .addCase(registration.fulfilled, (state, action) => {
        state.name = action.payload.data.user.name;
        state.email = action.payload.data.user.email;
        state.token = action.payload.data.token;
      })
      .addCase(registration.rejected, (state, action) => {
        state.error = action.payload;
        state.name = '';
        state.email = '';
        state.token = null;
      })
      .addCase(login.pending, state => {
        state.name = '';
        state.email = '';
        state.token = null;
        state.error = null;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.name = action.payload.data.user.name;
        state.email = action.payload.data.user.email;
        state.token = action.payload.data.token;
      })
      .addCase(login.rejected, (state, action) => {
        state.error = action.payload;
        state.name = '';
        state.email = '';
        state.token = null;
      });
  },
});

export const authReducer = authSlice.reducer;
