import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const getUserData = createAsyncThunk(
  'userData/getUserData',
  async (_, thunkAPI) => {
    try {
      const result = await axios.get('/users/current');
      // console.log(13, result);
      return result.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// Наступні

export const changeUserData = createAsyncThunk(
  'userData/changeUserData',
  async (data, thunkAPI) => {
    try {
      // console.log(123456, data.inputData, data.path);
      // Написати запит на зміну даних користувача
      const result = await axios.get('/api/users/current');
      return result.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// export const deletePetData = createAsyncThunk(
//   'petData/deletePetData',
//   async (id, thunkAPI) => {
//     try {
//       // console.log('1000', id);
//       // Написати запит на зміну даних користувача
//       const result = await axios.delete(`/users/delete/${id}`);
//       console.log('result', result);
//       return getUserData();
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error.message);
//     }
//   }
// );

export const deletePetData = async id => {
  try {
    // console.log('1000', id);
    // Написати запит на зміну даних користувача
    const result = await axios.delete(`/users/delete/${id}`);
    // console.log('result', result);
    return result.data;
  } catch (error) {
    return console.log('Error');
  }
};
