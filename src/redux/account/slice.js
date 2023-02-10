import { createSlice } from '@reduxjs/toolkit';
import { getUserData, changeUserData, deletePetData } from './operations';

const handlePending = state => {
  state.isLoadingUserData = true;
};

const handleRejected = (state, action) => {
  state.isLoadingUserData = false;
  state.errorUserData = action.payload;
};

const userDataSlice = createSlice({
  name: 'userData',
  initialState: {
    userData: {},
    isLoadingUserData: false,
    errorUserData: null,
  },
  extraReducers: builder =>
    builder
      .addCase(getUserData.pending, handlePending)
      .addCase(getUserData.rejected, handleRejected)
      .addCase(getUserData.fulfilled, (state, action) => {
        state.isLoadingUserData = false;
        state.errorUserData = null;
        state.userData = action.payload;
      })
      .addCase(changeUserData.pending, handlePending)
      .addCase(changeUserData.rejected, handleRejected)
      .addCase(changeUserData.fulfilled, (state, action) => {
        state.isLoadingUserData = false;
        state.errorUserData = null;
        state.userData = action.payload;
      }),
  // .addCase(deletePetData.pending, handlePending)
  // .addCase(deletePetData.rejected, handleRejected)
  // .addCase(deletePetData.fulfilled, (state, action) => {
  //   state.isLoadingUserData = false;
  //   state.errorUserData = null;
  //   state.userData = action.payload;
  // }),
});

export const userDataReducer = userDataSlice.reducer;
