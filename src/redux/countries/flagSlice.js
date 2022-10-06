import axios from 'axios';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState = {
  loading: false,
  flag: [],
  error: '',
};

export const fetchflags = createAsyncThunk('flag/fetchflags', () => axios.get(`
    https://restcountries.com/v3.1/all`)
  .then((response) => response.data));
const flagSlice = createSlice({
  name: 'flag',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchflags.pending, (state) => ({
      ...state,
      loading: true,
    }))
      .addCase(fetchflags.fulfilled, (state, action) => ({
        ...state,
        loading: false,
        flag: action.payload,

      }))
      .addCase(fetchflags.rejected, (state, action) => ({
        ...state,
        loading: false,
        flag: [],
        error: action.error.message,
      }));
  },
});

export default flagSlice.reducer;
