const initialState = {
    loading: false,
    weatherData: null,
    error: null,
    lastUpdated: null, 
    city: '', 
  };
  
  export default function weatherReducer(state = initialState, action) {
    switch (action.type) {
      case 'FETCH_WEATHER_REQUEST':
        return { ...state, loading: true, error: null };
      case 'FETCH_WEATHER_SUCCESS':
        return {
          ...state,
          loading: false,
          weatherData: action.payload,
          lastUpdated: Date.now(),
          city: action.meta?.city || state.city,
        };
      case 'FETCH_WEATHER_FAILURE':
        return { ...state, loading: false, error: action.payload };
      case 'RESET_WEATHER':
        return initialState;
      default:
        return state;
    }
  }