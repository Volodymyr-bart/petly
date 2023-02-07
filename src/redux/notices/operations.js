import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// axios.defaults.baseURL = 'http://localhost:3001/api';

export const getNoticesByCategory = createAsyncThunk(
  'notices/getNotices',
  async (categoryName, thunkAPI) => {
    try {
      console.log(categoryName);
      const response = await axios.get(`/notices/category/${categoryName}`);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const getOneNoticeById = async (noticeId) => {
  try {
    const response = await axios.get(`/notices/${noticeId}`);
    return response.data;
  } catch (e) {
    return console.error(e.message);
  }
};
