import axios from 'axios';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { format } from 'date-fns';

const initialState = {
  loading: false,
  statistics: [],
  countries: [],
  stateDetails: [],
  flag: '',
  error: '',
};

const TodayCasesoptions = {
  method: 'GET',
  url: 'https://covid-19-statistics.p.rapidapi.com/reports/total',
  params: { date: format(new Date(), 'yyyy-dd-MM') },
  headers: {
    'X-RapidAPI-Key': '9ed98ef6e3msh4fd54766474141fp1d9687jsn221039c58679',
    'X-RapidAPI-Host': 'covid-19-statistics.p.rapidapi.com',
  },
};

export const fetchTodayStats = createAsyncThunk('stats/fetchTodayStats', () => axios.request(TodayCasesoptions)
  .then((response) => {
    const stats = response.data;
    const statData = Object.keys(response.data).map((id) => ({
      confirmed: stats[id].confirmed,
      deaths: stats[id].deaths,
      recovered: stats[id].recovered,
      active: stats[id].active,
      fatality_rate: stats[id].fatality_rate,
    }));
    return statData;
  })
  .catch((error) => error));

const statsSlice = createSlice({
  name: 'stats',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchTodayStats.pending, (state) => ({
      ...state,
      loading: true,
    }))
      .addCase(fetchTodayStats.fulfilled, (state, action) => ({
        ...state,
        loading: false,
        statistics: action.payload,
        error: '',
      }))
      .addCase(fetchTodayStats.rejected, (state, action) => ({
        loading: false,
        statistics: [],
        error: action.error.message,
      }));
  },
});

export const { filter } = statsSlice.actions;
export default statsSlice.reducer;
