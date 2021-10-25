import { createSlice } from '@reduxjs/toolkit';
import { login, logout, getCurrentUser, registration } from './auth-operations';

const initialState = {
  name: '',
  email: '',
  isLogged: false,
  token: null,
  error: null,
  isLoading: false,
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
        state.isLogged = true;
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
        state.isLogged = true;
      })
      .addCase(login.rejected, (state, action) => {
        state.error = action.payload;
        state.name = '';
        state.email = '';
        state.token = null;
      })
      .addCase(logout.pending, state => {
        state.error = null;
      })
      .addCase(logout.fulfilled, state => {
        state.name = '';
        state.email = '';
        state.token = null;
        state.isLogged = false;
      })
      .addCase(logout.rejected, (state, action) => {
        state.error = action.payload;
      })
      .addCase(getCurrentUser.pending, state => {
        state.isLoading = true;
      })
      .addCase(getCurrentUser.fulfilled, (state, action) => {
        state.name = action.payload.data.name;
        state.email = action.payload.data.email;
        state.isLogged = true;
        state.isLoading = false;
      })
      .addCase(getCurrentUser.rejected, (state, action) => {
        state.error = action.payload;
        state.isLoading = false;
      });
  },
});

export const authReducer = authSlice.reducer;
