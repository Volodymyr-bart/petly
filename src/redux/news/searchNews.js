import { createSlice } from '@reduxjs/toolkit';

const searchNewsSlice = createSlice({
  name: 'searchNews',

  initialState: '',

  reducers: {
    searchNewsSet(state, action) {
      return (state = action.payload);
    },
  },
});

export const { searchNewsSet } = searchNewsSlice.actions;
export const searchNewsReducer = searchNewsSlice.reducer;
