import {View, Text} from 'react-native';
import React, {createContext, useState, useCallback, useMemo} from 'react';
import axios from 'axios';

export const WeatherContext = createContext();
const Context = ({children}) => {
  const [Loadproduct, setLoadProducrt] = useState([]);
  const [weatrerData, setweatherData] = useState([]);
  const [errors, seterror] = useState(null);
  const [one, setone] = useState('hvhjg');

  const LoadData = useCallback(async () => {
    try {
      const res = await axios.get(
        'http://api.weatherapi.com/v1/forecast.json?key=43ca3500399e463ba8b101827230506 &q=bangalore&days=3&aqi=no&alerts=no',
      );
      setLoadProducrt(res.data);
      setweatherData({
        Name: res.data.location.name,
        country: res.data.location.country,
        temp_c: res.data.current.temp_c,
        temp_f: res.data.current.temp_f,
        maxtemp_c: res.data.forecast.forecastday[0].day.maxtemp_c,
        maxtemp_f: res.data.forecast.forecastday[0].day.maxtemp_f,
        mintemp_c: res.data.forecast.forecastday[0].day.mintemp_c,
        mintemp_f: res.data.forecast.forecastday[0].day.mintemp_f,
        dimg: res.data.current.condition.icon,
        text: res.data.current.condition.text,
        wind_kph: res.data.current.wind_kph,
        precip_mm: res.data.current.precip_mm,
        pressure_mb: res.data.current.pressure_mb,
        humidity: res.data.current.humidity,
        sunrise: res.data.forecast.forecastday[0].astro.sunrise,
        sunset: res.data.forecast.forecastday[0].astro.sunset,
      });
      // .then(res => {
      // setLoadProducrt(res.data);
      // setweatherData({
      //   Name: res.data.location.name,
      //   country: res.data.location.country,
      //   temp_c: res.data.current.temp_c,
      //   temp_f: res.data.current.temp_f,
      //   maxtemp_c: res.data.forecast.forecastday[0].day.maxtemp_c,
      //   maxtemp_f: res.data.forecast.forecastday[0].day.maxtemp_f,
      //   mintemp_c: res.data.forecast.forecastday[0].day.mintemp_c,
      //   mintemp_f: res.data.forecast.forecastday[0].day.mintemp_f,
      //   dimg: res.data.current.condition.icon,
      //   text: res.data.current.condition.text,
      //   wind_kph: res.data.current.wind_kph,
      //   precip_mm: res.data.current.precip_mm,
      //   pressure_mb: res.data.current.pressure_mb,
      //   humidity: res.data.current.humidity,
      //   sunrise: res.data.forecast.forecastday[0].astro.sunrise,
      //   sunset: res.data.forecast.forecastday[0].astro.sunset,
      // });
      // });
    } catch (error) {
      seterror(error);
    }
  }, []);
  const value = useMemo(
    () => ({LoadData, Loadproduct, weatrerData, errors, one}),
    [LoadData, Loadproduct, weatrerData, errors],
  );

  return (
    <WeatherContext.Provider value={value}>{children}</WeatherContext.Provider>
  );
};

export default Context;
