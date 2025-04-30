// redux/store.js
import { configureStore } from '@reduxjs/toolkit';
import weatherReducer from '../redux/weatherslice';

const store = configureStore({
  reducer: {
    weather: weatherReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
});

export default store;
