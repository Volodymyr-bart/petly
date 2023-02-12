import { createSlice } from '@reduxjs/toolkit';
import {
  addNotice,
  getAllFavoriteNotices,
  getAllOwnNotices,
  getNoticesByCategory,
} from './operations';

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
    noticeAdd: [],
  },
  extraReducers: builder => {
    builder
      // Category
      .addCase(getNoticesByCategory.pending, handlePending)
      .addCase(getNoticesByCategory.fulfilled, (state, action) => {
        state.isLoadingNotices = false;
        state.errorNotices = null;
        state.notices = action.payload.result;
      })
      .addCase(getNoticesByCategory.rejected, handleRejected)
      // Own notices
      .addCase(getAllOwnNotices.pending, handlePending)
      .addCase(getAllOwnNotices.fulfilled, (state, action) => {
        state.isLoadingNotices = false;
        state.errorNotices = null;
        state.notices = action.payload.result;
      })
      .addCase(getAllOwnNotices.rejected, handleRejected)
      // Favorite notices
      .addCase(getAllFavoriteNotices.pending, handlePending)
      .addCase(getAllFavoriteNotices.fulfilled, (state, action) => {
        state.isLoadingNotices = false;
        state.errorNotices = null;
        state.notices = action.payload.result;
      })
      .addCase(getAllFavoriteNotices.rejected, handleRejected)
      // add notices
      .addCase(addNotice.pending, handlePending)
      .addCase(addNotice.fulfilled, (state, action) => {
        // state.notices.push(action.payload);
        state.isLoadingNotices = false;
        state.errorNotices = null;
        state.noticeAdd = action.payload.result;
      })
      .addCase(addNotice.rejected, handleRejected);
  },
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
