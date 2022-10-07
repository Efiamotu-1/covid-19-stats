import axios from 'axios';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState = {
  loading: false,
  stateDetails: [],
  error: '',
};

const stateDetails = (iso) => ({
  method: 'GET',
  url: 'https://covid-19-statistics.p.rapidapi.com/reports',
  params: {
    iso: `${iso}`,
  },
  headers: {
    'X-RapidAPI-Key': '9ed98ef6e3msh4fd54766474141fp1d9687jsn221039c58679',
    'X-RapidAPI-Host': 'covid-19-statistics.p.rapidapi.com',
  },
});

export const fetchCovidReport = createAsyncThunk('covidStats/fetchCovidReport', (iso) => axios.request(stateDetails(iso)).then((response) => {
  const stats = response.data.data;
  const statData = Object.keys(response.data.data).map((id) => ({
    confirmed: stats[id].confirmed,
    deaths: stats[id].deaths,
    recovered: stats[id].recovered,
    active: stats[id].active,
    date: stats[id].date,
    state: stats[id].region.province,
    last_update: stats[id].last_update,
    fatality_rate: stats[id].fatality_rate,
  }));
  return statData;
}).catch((error) => error));

const covidStatsSlice = createSlice({
  name: 'covidStats',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchCovidReport.pending, (state) => ({
      ...state,
      loading: true,
    }))
      .addCase(fetchCovidReport.fulfilled, (state, action) => ({
        ...state,
        loading: false,
        stateDetails: action.payload,

      }))
      .addCase(fetchCovidReport.rejected, (state, action) => ({
        ...state,
        loading: false,
        stateDetails: [],
        error: action.error.message,
      }));
  },
});

export default covidStatsSlice.reducer;
