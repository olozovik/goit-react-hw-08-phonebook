import { createAsyncThunk } from '@reduxjs/toolkit';
import { fetchRegistration } from '../../services/connectionsApi';

export const registration = createAsyncThunk(
  'auth/registration',
  async (userData, { rejectWithValue }) => {
    try {
      return await fetchRegistration(userData);
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);
