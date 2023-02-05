import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// axios.defaults.baseURL = 'https://petly-mmyb.onrender.com';

export const getNotices = createAsyncThunk('notices/getNotices', async (_, thunkAPI) => {
  try {
    const response = await axios.get('/notices');
    return response.data;
  } catch (e) {
    return thunkAPI.rejectWithValue(e.message);
  }
});