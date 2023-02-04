import { createSlice } from '@reduxjs/toolkit';
import { getServices } from './operations';

const handlePending = state => {
  state.isLoadingServices = true;
};

const handleRejected = (state, action) => {
  state.isLoadingServices = false;
  state.errorNews = action.payload;
};

const servicesSlice = createSlice({
  name: 'services',
  initialState: {
    services: [],
    isLoadingServices: false,
    errorNews: null,
  },
  extraReducers: {
    [getServices.pending]: handlePending,
    [getServices.rejected]: handleRejected,
    [getServices.fulfilled](state, action) {
      state.isLoadingServices = false;
      state.errorServices = null;
      state.services = action.payload;
    },
  },
});

export const servicesReducer = servicesSlice.reducer;
