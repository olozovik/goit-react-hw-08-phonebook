import { createAsyncThunk } from '@reduxjs/toolkit';
import { fetchLogin, fetchRegistration } from '../../services/connectionsApi';

export const registration = createAsyncThunk(
  'auth/registration',
  async (newUser, { rejectWithValue }) => {
    try {
      return await fetchRegistration(newUser);
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);

export const login = createAsyncThunk(
  'auth/login',
  async (user, { rejectWithValue }) => {
    try {
      return await fetchLogin(user);
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);
