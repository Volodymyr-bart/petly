import { createSlice } from '@reduxjs/toolkit';
import { getNotices } from './operations';

const handlePending = state => {
  state.isLoadingNotices = true;
};

const handleRejected = (state, action) => {
  state.isLoadingNotices = false;
  state.errorNotices = action.payload;
};

const noticesSlice = createSlice({
  name: 'notices',
  initialState: {
    notices: [],
    isLoadingNotices: false,
    errorNotices: null,
  },
  extraReducers: {
    [getNotices.pending]: handlePending,
    [getNotices.rejected]: handleRejected,
    [getNotices.fulfilled](state, action) {
      state.isLoadingNotices = false;
      state.errorNotices = null;
      state.notices = action.payload;
    },
  },
});

export const noticesReducer = noticesSlice.reducer;