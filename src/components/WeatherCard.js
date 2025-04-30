
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const WeatherCard = ({ weatherData }) => {
  return (
    <View style={styles.card}>
      <Text style={styles.city}>{weatherData.name}</Text>
      <Text style={styles.temp}>{Math.round(weatherData.main.temp)}°C</Text>
      <Text style={styles.desc}>
        {weatherData.weather[0].description}
      </Text>
      <Text style={styles.updated}>
        Updated: {new Date().toLocaleTimeString()}
      </Text>
    </View>
  );
};


const styles = StyleSheet.create({
    card: {
        marginTop: 20,
        padding: 20,
        borderWidth: 1,
        borderRadius: 10,
        alignItems: 'center',
    },
    temp: { fontSize: 40, fontWeight: 'bold' },
    wind : { fontSize: 40, fontWeight: 'bold' },
    time :  { fontSize: 40, fontWeight: 'bold' }
})

export default WeatherCard;