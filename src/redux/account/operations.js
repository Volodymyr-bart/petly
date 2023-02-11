import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const getUserData = createAsyncThunk(
  'userData/getUserData',
  async (_, thunkAPI) => {
    try {
      const result = await axios.get('/users/current');
      return result.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const changeUserData = async data => {
  try {
    const result = await axios.patch('/users/update', data);
    return result.data;
  } catch (error) {
    console.log('Error');
  }
};

export const deletePetData = async id => {
  try {
    const result = await axios.delete(`/users/delete/${id}`);
    return result.data;
  } catch (error) {
    return console.log('Error');
  }
};

// Послання нащадкам: "Тарілку після гречки мийте відразу"

// export const changeUserData = createAsyncThunk(
//   'userData/changeUserData',
//   async (data, thunkAPI) => {
//     try {
//       const result = await axios.patch('/users/update', data);
//       console.log('data to send', data);
//       return result.data;
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error.message);
//     }
//   }
// );

// export const deletePetData = createAsyncThunk(
//   'petData/deletePetData',
//   async (id, thunkAPI) => {
//     try {
//       const result = await axios.delete(`/users/delete/${id}`);
//       console.log('result', result);
//       return getUserData();
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error.message);
//     }
//   }
// );
