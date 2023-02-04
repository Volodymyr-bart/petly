import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// axios.defaults.baseURL = 'https://petly-mmyb.onrender.com';
axios.defaults.baseURL = 'http://localhost:3001/api';

export const getNews = createAsyncThunk('news/getNews', async (_, thunkAPI) => {
  try {
    const res = await axios.get('/news');
    return res.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});
