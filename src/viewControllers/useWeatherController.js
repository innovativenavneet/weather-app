
import { useDispatch, useSelector } from 'react-redux';
import useWeatherViewModel from '../viewModel/WeatherViewModel';

/**
 * Controller hook that bridges Redux state with ViewModel.
 */
const useWeatherController = () => {
  const dispatch = useDispatch();
  const { fetchWeatherData } = useWeatherViewModel();
// weatherData in the store gets updated, and any component using:
  const {
    weatherData,
    loading,
    lastUpdated,
    error,
    city,
  } = useSelector((state) => state.weather);

  const fetchWeather = (cityName) => {
    console.log('Fetching weather for:', cityName);
    dispatch(fetchWeatherData(cityName));
  };
  

  return {
    fetchWeather,
    weatherData,
    loading,
    lastUpdated,
    error,
    currentCity: city,
  };
};

export default useWeatherController;
