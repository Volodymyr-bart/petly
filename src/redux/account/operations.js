import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { toast } from 'react-hot-toast';

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

export const changeUserData = async newData => {
  if (!newData.petAvatar) delete newData['userAvatar'];

  newData['userAvatar'] = newData['imageData'];
  delete newData['imageData'];

  let resultData = new FormData();

  for (const key in newData) {
    resultData.append(key, newData[key]);
  }
  try {
    console.log('Result for request', newData, ...resultData);
    const result = await axios.patch('/users/update', resultData);
    return result.data;
  } catch (error) {
    toast.error('Invalid format');
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

export const getAllOwnNoticesWithoutR = async () => {
  try {
    const response = await axios.get(`/notices/ads/my`);
    return response.data;
  } catch (e) {
    return console.error(e.message);
  }
};

// export const addUserImage = createAsyncThunk(
//   'userData/addUserImage',
//   async (newPhoto, thunkAPI) => {
//     console.log(11, newPhoto);
//     // if (!newPhoto.petAvatar) delete newPhoto['petAvatar'];
//     let formImageData = new FormData();

//     for (const key in newPhoto) {
//       formImageData.append(key, newPhoto[key]);
//     }

//     try {
//       console.log(12, formImageData);
//       // const res = await axios.post('/notices', formImageData);
//       // return res.data;
//       return 'res.data';
//     } catch (error) {
//       return 'thunkAPI.rejectWithValue(error.message)';
//     }
//   }
// );

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
