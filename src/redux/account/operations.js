import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
axios.defaults.baseURL = 'https://petly-mmyb.onrender.com';

export const getUserData = createAsyncThunk(
  'userData/getUserData',
  async (_, thunkAPI) => {
    try {
      const result = await axios.get('/users/current');
      return result.data;
      // console.log(13, result);
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// Наступні

// export const deletePet = createAsyncThunk(
//   'userData/getUserData',
//   async (_, thunkAPI) => {
//     try {
//       const result = await axios.get('/api/users/current');
//       return result.data;
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error.message);
//     }
//   }
// );
