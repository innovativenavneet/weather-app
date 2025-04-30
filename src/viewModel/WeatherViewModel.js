
  import {
    getCoordinatesForCity,
    getWeatherByCoordinates,
  } from '../services/weatherService';

  import {fetchWeatherStart,fetchWeatherSuccess,fetchWeatherFails} from "../redux/weatherslice";
  
  /**
   * ViewModel for the weather module.
   * Handles weather business logic, separating it from controller and services.
   */
  const useWeatherViewModel = () => {
    const fetchWeatherData = (city) => async (dispatch) => {
        try {
          dispatch(fetchWeatherStart());
          console.log('City:', city); 
          const { latitude, longitude } = await getCoordinatesForCity(city);
          console.log('Coordinates:', latitude, longitude); 
          const weatherData = await getWeatherByCoordinates(latitude, longitude);
          console.log('Weather:', weatherData); 
          dispatch(fetchWeatherSuccess({ weatherData, city }));
        } catch (error) {
          console.error('Weather fetch failed:', error.message); 
          dispatch(fetchWeatherFails(error.message));
        }
      };
      
    return {
      fetchWeatherData,
    };
  };
  
  export default useWeatherViewModel;
  