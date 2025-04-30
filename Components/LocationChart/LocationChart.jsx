import {View, Image, TouchableOpacity} from 'react-native';
import React, {useState, useEffect} from 'react';
import locationIcon from '../../assets/Images/LocationChart.png';
import TextShared from '../TextShared/TextShared';
import styles from './style';

export default function LocationChart() {
  const [isLocationOn, setIsLocationOn] = useState(false);
  const [weatherData, setWeatherData] = useState(null);
  const [currentTime, setCurrentTime] = useState(new Date());

  // Update time every minute
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 60000); // Update every 60 seconds
    return () => clearInterval(timer);
  }, []);

  // Fetch weather data for Cairo, Egypt (fixed location) using fetch
  const fetchWeatherData = async () => {
    try {
      const API_KEY = '749dc7f497a5e4492c2764e0f2a4830e'; // Replace with your API key
      const latitude = 30.0444; // Cairo latitude
      const longitude = 31.2357; // Cairo longitude
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=${API_KEY}`,
      );
      const data = await response.json();
      if (!response.ok) {
        throw new Error('Weather API error: ' + data.message);
      }
      setWeatherData(data);
    } catch (error) {
      console.error('Error fetching weather data:', error);
    }
  };

  // Handle button press to toggle state and fetch weather data
  const handleLocationToggle = () => {
    setIsLocationOn(true);
    fetchWeatherData();
  };

  // Format the current date as "DD MMM YYYY"
  const formatDate = () => {
    return currentTime
      .toLocaleDateString('en-GB', {
        day: '2-digit',
        month: 'short',
      })
      .toUpperCase();
  };
  const formatYear = () => {
    return currentTime
      .toLocaleDateString('en-GB', {
        year: 'numeric',
      })
      .toUpperCase();
  };

  // Format the current time as "HH:MM AM/PM"
  const formatTime = () => {
    const hours = currentTime.getHours();
    const minutes = currentTime.getMinutes();
    const formattedHours = hours % 12 || 12;
    const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;
    const ampm = hours >= 12 ? 'PM' : 'AM';
    return {time: `${formattedHours}:${formattedMinutes} `, ampm};
  };

  const {time, ampm} = formatTime();

  return (
    <View style={styles.container}>
      {!isLocationOn ? (
        <>
          <View style={styles.iconContainer}>
            <Image source={locationIcon} />
          </View>
          <View style={styles.textContainer}>
            <TextShared
              text={'You need to turn on the location.'}
              color={'rgba(255, 255, 255, 1)'}
              textAlign={'center'}
              fontSize={11}
              fontWeight={'500'}
            />
          </View>
          <View>
            <TouchableOpacity
              onPress={handleLocationToggle}
              style={styles.btnContainer}>
              <TextShared
                text={'Turn on the location'}
                fontSize={11}
                color={'rgba(255, 255, 255, 1)'}
                fontWeight={'500'}
              />
            </TouchableOpacity>
          </View>
        </>
      ) : (
        <>
          {/* Weather UI */}
          <View style={styles.weatherHeader}>
            <TextShared
              text={'TODAY'}
              color={'rgba(255, 255, 255, 1)'}
              fontSize={20}
              fontWeight={'300'}
            />
            <View>
              <TextShared
                text={formatDate()}
                color={'rgba(255, 255, 255, 1)'}
                fontSize={6}
                fontWeight={'400'}
              />
              <TextShared
                text={formatYear()}
                color={'rgba(255, 255, 255, 1)'}
                fontSize={8}
                fontWeight={'400'}
              />
            </View>
          </View>
          <View style={styles.timeContainer}>
            <TextShared
              text={time}
              color={'rgba(255, 255, 255, 1)'}
              fontSize={24}
              fontWeight={'700'}
            />
            <TextShared
              text={ampm}
              color={'rgba(220, 237, 236, 0.82)'}
              fontSize={10}
              fontWeight={'400'}
              style={{
                transform: [{rotate: '90deg'}],
              }}
            />
          </View>
          <View style={styles.weatherDetails}>
            {weatherData && (
              <View style={{flexDirection:"column",alignItems:"center"}}>
                <View style={{flexDirection:"row",alignItems:"center"}}>

                <Image
                  source={{
                    uri: `https://openweathermap.org/img/wn/${weatherData.weather[0].icon}.png`,
                  }}
                  style={{width: 24, height: 24}}
                  />
                <TextShared
                  text={`${Math.round(weatherData.main.temp)}°`}
                  color={'rgba(255, 255, 255, 1)'}
                  fontSize={24}
                  fontWeight={'100'}
                  style={{marginHorizontal: 8}}
                  />
                  </View>
                <TextShared
                  text={weatherData.weather[0].description.toUpperCase()}
                  color={'rgba(255, 255, 255, 1)'}
                  fontSize={7}
                  fontWeight={'300'}
                />
              </View>
            )}
          </View>
        </>
      )}
    </View>
  );
}
