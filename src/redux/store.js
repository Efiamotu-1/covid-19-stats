import { configureStore } from '@reduxjs/toolkit';
import statsReducer from './statistics/statsSlice';

const store = configureStore({
  reducer: {
    stats: statsReducer,
  },
});

export default store;
