
import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  ActivityIndicator,
  StyleSheet,
} from 'react-native';
import useWeatherController from '../viewControllers/useWeatherController';

const HomeScreen = () => {
  const [searchCity, setSearchCity] = useState('London');

  const {
    fetchWeather,
    weatherData,
    loading,
    error,
    currentCity,
  } = useWeatherController();

  const handleSearch = () => {
    if (searchCity.trim()) {
      fetchWeather(searchCity);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>
      Weather App
      </Text>
     
      <TextInput
        style={styles.input}
        value={searchCity}
        onChangeText={setSearchCity}
        placeholder="Enter city name"
      />
      <Button title="Search" onPress={handleSearch} />

      {loading && <ActivityIndicator size="large" />}
      {error && <Text style={styles.error}>{error}</Text>}

      {weatherData?.temperature && (
        <View style={styles.weatherContainer}>
          <Text style={styles.city}>{currentCity}</Text>
          <Text style={styles.temperature}>{weatherData.temperature}°C</Text>
          <Text>Wind: {weatherData.windspeed} km/h</Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, justifyContent: 'center' },
  input: { borderWidth: 1, padding: 10, marginBottom: 10 },
  heading:{fontWeight: 20, fontSize: 40, marginHorizontal: 40, marginBottom:20,},
  error: { color: 'red', marginTop: 10 },
  weatherContainer: { marginTop: 20, alignItems: 'center' },
  city: { fontSize: 20, fontWeight: 'bold' },
  temperature: { fontSize: 40 },
});

export default HomeScreen;
