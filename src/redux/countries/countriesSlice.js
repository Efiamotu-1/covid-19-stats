import axios from 'axios';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState = {
  loading: false,
  countries: [],
  error: '',
};

const countries = {
  method: 'GET',
  url: 'https://covid-19-statistics.p.rapidapi.com/regions',
  headers: {
    'X-RapidAPI-Key': '9ed98ef6e3msh4fd54766474141fp1d9687jsn221039c58679',
    'X-RapidAPI-Host': 'covid-19-statistics.p.rapidapi.com',
  },
};

export const fetchCountries = createAsyncThunk('countries/fetchCountries', () => axios.request(countries).then((response) => {
  const stats = response.data.data;
  // console.log(stats)
  const statData = Object.keys(response.data.data).map((id) => ({
    iso: stats[id].iso,
    name: stats[id].name,
  }));
    // console.log(statData);
  return statData;
}).catch((error) => error));

const countriesSlice = createSlice({
  name: 'countries',
  initialState,

  extraReducers: (builder) => {
    builder.addCase(fetchCountries.pending, (state) => ({
      ...state,
      loading: true,
    }))
      .addCase(fetchCountries.fulfilled, (state, action) => ({
        ...state,
        loading: false,
        countries: action.payload,

      }))
      .addCase(fetchCountries.rejected, (state, action) => ({
        ...state,
        loading: false,
        countries: [],
        error: action.error.message,
      }));
  },
});

export default countriesSlice.reducer;
