import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://petly-mmyb.onrender.com/api';

export const getServices = createAsyncThunk(
  'services/getServices',
  async (_, thunkAPI) => {
    try {
      const res = await axios.get('/services-sidebar');
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
