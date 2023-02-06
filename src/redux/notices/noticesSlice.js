import { createSlice } from '@reduxjs/toolkit';
import { getNoticesByCategory } from './operations';

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
  extraReducers: (builder) => {
    builder
      .addCase(getNoticesByCategory.pending, handlePending)
      .addCase(getNoticesByCategory.fulfilled, (state, action) => {
        state.isLoadingNotices = false;
        state.errorNotices = null;
        state.notices = action.payload.noticesByCategory;
      })
      .addCase(getNoticesByCategory.rejected, handleRejected)
  }
  // extraReducers: {
  //   [getNoticesByCategory.pending]: handlePending,
  //   [getNoticesByCategory.rejected]: handleRejected,
  //   [getNoticesByCategory.fulfilled](state, action) {
  //     state.isLoadingNotices = false;
  //     state.errorNotices = null;
  //     state.notices = action.payload.noticesByCategory;
  //   },
  // },
});

export const noticesReducer = noticesSlice.reducer;