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

// export const fetchflags = createAsyncThunk('stats/fetchflags', () => {
//   return axios.get(`
//   https://restcountries.com/v3.1/all`)
//   .then(response => {
//     // console.log(response.data)
//     return response.data
//   })

// })
// // const axios = require("axios");
// // const countryFlags = (country) => {
//   axios.get(`
//   https://restcountries.com/v3.1/alpha/per`)
//   .then(response => console.log(response.data))
// // }
// // countryFlags('england')

// // const msg = () => {
// //   return 'hello'
// // }

// const stateDetails = (iso) => ({
//   method: 'GET',
//   url: 'https://covid-19-statistics.p.rapidapi.com/reports',
//   params: {
//     iso: `${iso}`,
//   },
//   headers: {
//     'X-RapidAPI-Key': '9ed98ef6e3msh4fd54766474141fp1d9687jsn221039c58679',
//     'X-RapidAPI-Host': 'covid-19-statistics.p.rapidapi.com'
//   }
// });

const TodayCasesoptions = {
  method: 'GET',
  url: 'https://covid-19-statistics.p.rapidapi.com/reports/total',
  params: { date: format(new Date(), 'yyyy-dd-MM') },
  headers: {
    'X-RapidAPI-Key': '9ed98ef6e3msh4fd54766474141fp1d9687jsn221039c58679',
    'X-RapidAPI-Host': 'covid-19-statistics.p.rapidapi.com',
  },
};

// const countries = {
//   method: 'GET',
//   url: 'https://covid-19-statistics.p.rapidapi.com/regions',
//   headers: {
//     'X-RapidAPI-Key': '9ed98ef6e3msh4fd54766474141fp1d9687jsn221039c58679',
//     'X-RapidAPI-Host': 'covid-19-statistics.p.rapidapi.com'
//   }
// };

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
    // console.log(statData);
    return statData;
  })
  .catch((error) => error));

// export const fetchCountries = createAsyncThunk('stats/fetchCountries', () => {
//   return axios.request(countries).then(function (response) {
//     const stats = response.data.data;
//     // console.log(stats)
//    const statData = Object.keys(response.data.data).map((id) => ({
//     iso: stats[id].iso,
//     name: stats[id].name,
//   }));
//   // console.log(statData);
//   return statData;
//   }).catch(function (error) {
//     return error;
//   });

// })

// export const fetchCovidReport = createAsyncThunk('stats/fetchCovidReport', (iso) => {
//   return axios.request(stateDetails(iso)).then(function (response) {
//     const stats = response.data.data;
//     const statData = Object.keys(response.data.data).map((id) => ({
//       confirmed: stats[id].confirmed,
//       deaths: stats[id].deaths,
//       recovered: stats[id].recovered,
//       active: stats[id].active,
//       date: stats[id].date,
//       state: stats[id].region.province,
//       last_update: stats[id].last_update,
//       fatality_rate: stats[id].fatality_rate,
//     }));
//     return statData
//   }).catch(function (error) {
//     return error
//     ;
//   });
// })

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

    // builder.addCase(fetchCountries.pending, (state) => ({
    //   ...state,
    //   loading : true,
    // }))
    // .addCase(fetchCountries.fulfilled, (state, action) => ({
    //   ...state,
    //   loading: false,
    //   countries: action.payload,

    // }))
    // .addCase(fetchCountries.rejected, (state, action) => ({
    //   ...state,
    //   loading: false,
    //   countries: [],
    //   error: action.error.message,
    // }));

    // builder.addCase(fetchCovidReport.pending, (state) => ({
    //   ...state,
    //   loading : true,
    // }))
    // .addCase(fetchCovidReport.fulfilled, (state, action) => ({
    //   ...state,
    //   loading: false,
    //   stateDetails: action.payload,

    // }))
    // .addCase(fetchCovidReport.rejected, (state, action) => ({
    //   ...state,
    //   loading: false,
    //   stateDetails: [],
    //   error: action.error.message,
    // }));

    // builder.addCase(fetchflags.pending, (state) => ({
    //   ...state,
    //   loading : true,
    // }))
    // .addCase(fetchflags.fulfilled, (state, action) => ({
    //   ...state,
    //   loading: false,
    //   flag: action.payload,

    // }))
    // .addCase(fetchflags.rejected, (state, action) => ({
    //   ...state,
    //   loading: false,
    //   flag: [],
    //   error: action.error.message,
    // }));
  },
});

export const { filter } = statsSlice.actions;
export default statsSlice.reducer;
