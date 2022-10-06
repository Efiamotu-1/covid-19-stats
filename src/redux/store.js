import { configureStore } from '@reduxjs/toolkit';
import countriesSlice from './countries/countriesSlice';
import flagSlice from './countries/flagSlice';
import covidStatsSlice from './statistics/covidStatsSlice';
import statsReducer from './statistics/statsSlice';

const store = configureStore({
  reducer: {
    stats: statsReducer,
    stateStats: covidStatsSlice,
    country: countriesSlice,
    flags: flagSlice,
  },
});

export default store;
