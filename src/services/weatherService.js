// services/weatherService.js
import axios from 'axios';

/**
 * Fetch coordinates using city name.
 */
export const getCoordinatesForCity = async (city) => {
  const url = `https://geocoding-api.open-meteo.com/v1/search?name=${city}`;
  const response = await axios.get(url);

  if (!response.data.results || response.data.results.length === 0) {
    throw new Error('City not found');
  }

  const { latitude, longitude } = response.data.results[0];
  return { latitude, longitude };
};

/**
 * Fetch weather using coordinates.
 */
export const getWeatherByCoordinates = async (latitude, longitude) => {
  const url = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true`;
  const response = await axios.get(url);
  return response.data.current_weather;
};
