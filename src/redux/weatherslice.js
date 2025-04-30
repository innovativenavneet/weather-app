
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  weatherData: {},
  loading: false,
  error: null,
  lastUpdated: null,
  city: '',
};

const weatherSlice = createSlice({
  name: 'weather',
  initialState,
  reducers: {
    fetchWeatherStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    fetchWeatherSuccess: (state, action) => {
      state.loading = false;
      state.weatherData = action.payload.weatherData;
      state.city = action.payload.city;
      state.lastUpdated = new Date().toISOString();
    },
    fetchWeatherFails: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const {
  fetchWeatherStart,
  fetchWeatherSuccess,
  fetchWeatherFails,
} = weatherSlice.actions;

export default weatherSlice.reducer;
