import { createSlice } from '@reduxjs/toolkit';
import { getServices } from './operations';

const handlePending = state => {
  state.isLoadingNews = true;
};

const handleRejected = (state, action) => {
  state.isLoadingNews = false;
  state.errorNews = action.payload;
};

const servicesSlice = createSlice({
  name: 'services',
  initialState: {
    services: [],
    isLoadingNews: false,
    errorNews: null,
  },
  extraReducers: {
    [getServices.pending]: handlePending,
    [getServices.rejected]: handleRejected,
    [getServices.fulfilled](state, action) {
      state.isLoadingServices = false;
      state.errorServices = null;
      state.Services = action.payload;
    },
  },
});

export const servicesReducer = servicesSlice.reducer;
