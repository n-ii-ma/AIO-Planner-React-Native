import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';

export const getWeather = createAsyncThunk(
  'weather/getWeather',
  async apiAddress => {
    const response = await axios.get(apiAddress);
    return response.data;
  },
);

const weatherSlice = createSlice({
  name: 'weather',
  initialState: {
    today: {},
    isLoading: false,
    hasError: false,
  },
  extraReducers: builder => {
    builder
      .addCase(getWeather.pending, state => {
        state.isLoading = true;
        state.hasError = false;
      })
      .addCase(getWeather.fulfilled, (state, action) => {
        state.today = action.payload;
        state.isLoading = false;
        state.hasError = false;
      })
      .addCase(getWeather.rejected, state => {
        state.today = {};
        state.isLoading = false;
        state.hasError = true;
      });
  },
});

// Selectors
export const selectWeatherToday = state => state.weather.today;
export const selectWeatherIsLoading = state => state.weather.isLoading;
export const selectWeatherHasError = state => state.weather.hasError;

// Reducer
export default weatherSlice.reducer;
