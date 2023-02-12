import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// axios.defaults.baseURL = 'http://localhost:3001/api';

export const getNoticesByCategory = createAsyncThunk(
  'notices/getNotices',
  async (categoryName, thunkAPI) => {
    try {
      // console.log(categoryName);
      const response = await axios.get(`/notices/category/${categoryName}`);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const getAllOwnNotices = createAsyncThunk(
  'notices/getOwnNotices',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get(`/notices/ads/my`);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const getAllFavoriteNotices = createAsyncThunk(
  'notices/getFavoriteNotices',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get(`/notices/ads/favorite`);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const getOneNoticeById = async noticeId => {
  try {
    const response = await axios.get(`/notices/${noticeId}`);
    return response.data;
  } catch (e) {
    return console.error(e.message);
  }
};

export const addToFavorite = async noticeId => {
  try {
    const response = await axios.patch(`/notices/${noticeId}/favorite-add`);
    return response.data;
  } catch (e) {
    return console.error(e.message);
  }
};

export const removeFromFavorite = async noticeId => {
  try {
    const response = await axios.patch(`/notices/${noticeId}/favorite-remove`);
    return response.data;
  } catch (e) {
    return console.error(e.message);
  }
};

export const removeFromOwn = async noticeId => {
  try {
    const response = await axios.delete(`/notices/${noticeId}`);
    return response.data;
  } catch (e) {
    return console.error('removing from own err: ', e.message);
  }
};

export const getAllFavoriteNoticesWithoutR = async () => {
  try {
    const response = await axios.get(`/notices/ads/favorite`);
    return response.data;
  } catch (e) {
    return console.error(e.message);
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

export const addNotice = createAsyncThunk(
  'notices/addNotice',
  async (newNotice, thunkAPI) => {
    console.log('............................1', newNotice);
    if (!newNotice.petAvatar) delete newNotice['petAvatar'];
    let formImageData = new FormData();

    for (const key in newNotice) {
      formImageData.append(key, newNotice[key]);
    }
    console.log('............................2', formImageData);

    try {
      const res = await axios.post('/notices', formImageData);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// export const addNotice = async () => {
//   try {
//     console.log("adding");
//     const response = await axios.post("/notices",
//       {
//         category: "in-good-hands",
//         title: "nice kitten",
//         name: "some name",
//         birthday: "01.01.2022",
//         breed: "common home",
//         theSex: "male",
//         location: "New York",
//         price: "25",
//         comments: "no comments jnijnibuvrbgn"
//       });
//     console.log('response: ', response.data);
//     return response.data;
//   } catch (e) {
//     return console.error("adding error: ", e.message);
//   }
// };
