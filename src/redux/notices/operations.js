import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:3001/api';

export const getNoticesByCategory = createAsyncThunk('notices/getNotices', async (categoryName, thunkAPI) => {
  try {
    const response = await axios.get(`/notices/category/${categoryName}`);
    return response.data;
  } catch (e) {
    return thunkAPI.rejectWithValue(e.message);
  }
});