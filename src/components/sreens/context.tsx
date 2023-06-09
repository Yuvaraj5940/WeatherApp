import {View, Text} from 'react-native';
import React, {
  createContext,
  useState,
  useCallback,
  useMemo,
  useEffect,
} from 'react';
import axios from 'axios';
import axiosInstance from '../utils/axios';

export const WeatherContext = createContext();
const Context = ({children}) => {
  const [Loadproduct, setLoadProducrt] = useState([]);
  const [isload, setisload] = useState(false);
  const [active, setActive] = useState(false);
  const [errors, seterror] = useState(true);
  const [SName, setSName] = useState('Bangalore');

  const [HRS, setHRS] = useState([
    {
      time: '12 AM',
      deg: 23.8,
    },
    {
      time: '1 AM',
      deg: 23.4,
    },
    {
      time: '2 AM',
      deg: 23.2,
    },
    {
      time: '3 AM',
      deg: 22.9,
    },
    {
      time: '4 AM',
      deg: 22.8,
    },
    {
      time: '5 AM',
      deg: 22.7,
    },
    {
      time: '6 AM',
      deg: 22.6,
    },
    {
      time: '7 AM',
      deg: 22.5,
    },
    {
      time: '8 AM',
      deg: 22.4,
    },
    {
      time: '9 AM',
      deg: 22.3,
    },
    {
      time: '10 AM',
      deg: 22.0,
    },
    {
      time: '11 AM',
      deg: 21.9,
    },
  ]);

  const LoadData = useCallback(async () => {
    try {
      // const res = await axios.get(
      //   `http://api.weatherapi.com/v1/forecast.json?key=43ca3500399e463ba8b101827230506 &q=${SName}&days=3&aqi=no&alerts=no`,
      // );
      const res = await axiosInstance.get(`${SName}&days=3&aqi=no&alerts=no`);
      setLoadProducrt({...res.data});
      setisload(true);
      setHRS([
        {
          time: '12 AM',
          deg: res.data.forecast.forecastday[0].hour[0].temp_c,
          deg_f: res.data.forecast.forecastday[0].hour[0].temp_f,
        },
        {
          time: '1 AM',
          deg: res.data.forecast.forecastday[0].hour[1].temp_c,
          deg_f: res.data.forecast.forecastday[0].hour[1].temp_f,
        },
        {
          time: '2 AM',
          deg: res.data.forecast.forecastday[0].hour[2].temp_c,
          deg_f: res.data.forecast.forecastday[0].hour[2].temp_f,
        },
        {
          time: '3 AM',
          deg: res.data.forecast.forecastday[0].hour[3].temp_c,
          deg_f: res.data.forecast.forecastday[0].hour[3].temp_f,
        },
        {
          time: '4 AM',
          deg: res.data.forecast.forecastday[0].hour[4].temp_c,
          deg_f: res.data.forecast.forecastday[0].hour[4].temp_f,
        },
        {
          time: '5 AM',
          deg: res.data.forecast.forecastday[0].hour[5].temp_c,
          deg_f: res.data.forecast.forecastday[0].hour[5].temp_f,
        },
        {
          time: '6 AM',
          deg: res.data.forecast.forecastday[0].hour[6].temp_c,
          deg_f: res.data.forecast.forecastday[0].hour[6].temp_f,
        },
        {
          time: '7 AM',
          deg: res.data.forecast.forecastday[0].hour[7].temp_c,
          deg_f: res.data.forecast.forecastday[0].hour[7].temp_f,
        },
        {
          time: '8 AM',
          deg: res.data.forecast.forecastday[0].hour[8].temp_c,
          deg_f: res.data.forecast.forecastday[0].hour[8].temp_f,
        },
        {
          time: '9 AM',
          deg: res.data.forecast.forecastday[0].hour[9].temp_c,
          deg_f: res.data.forecast.forecastday[0].hour[9].temp_f,
        },
        {
          time: '10 AM',
          deg: res.data.forecast.forecastday[0].hour[10].temp_c,
          deg_f: res.data.forecast.forecastday[0].hour[10].temp_f,
        },
        {
          time: '11 AM',
          deg: res.data.forecast.forecastday[0].hour[11].temp_c,
          deg_f: res.data.forecast.forecastday[0].hour[11].temp_f,
        },
        {
          time: '12 PM',
          deg: res.data.forecast.forecastday[0].hour[12].temp_c,
          deg_f: res.data.forecast.forecastday[0].hour[12].temp_f,
        },
        {
          time: '1 PM',
          deg: res.data.forecast.forecastday[0].hour[13].temp_c,
          deg_f: res.data.forecast.forecastday[0].hour[13].temp_f,
        },
        {
          time: '2 PM',
          deg: res.data.forecast.forecastday[0].hour[14].temp_c,
          deg_f: res.data.forecast.forecastday[0].hour[14].temp_f,
        },
        {
          time: '3 PM',
          deg: res.data.forecast.forecastday[0].hour[15].temp_c,
          deg_f: res.data.forecast.forecastday[0].hour[15].temp_f,
        },
        {
          time: '4 PM',
          deg: res.data.forecast.forecastday[0].hour[16].temp_c,
          deg_f: res.data.forecast.forecastday[0].hour[16].temp_f,
        },
        {
          time: '5 PM',
          deg: res.data.forecast.forecastday[0].hour[17].temp_c,
          deg_f: res.data.forecast.forecastday[0].hour[17].temp_f,
        },
        {
          time: '6 PM',
          deg: res.data.forecast.forecastday[0].hour[18].temp_c,
          deg_f: res.data.forecast.forecastday[0].hour[18].temp_f,
        },
        {
          time: '7 PM',
          deg: res.data.forecast.forecastday[0].hour[19].temp_c,
          deg_f: res.data.forecast.forecastday[0].hour[19].temp_f,
        },
        {
          time: '8 PM',
          deg: res.data.forecast.forecastday[0].hour[20].temp_c,
          deg_f: res.data.forecast.forecastday[0].hour[20].temp_f,
        },
        {
          time: '9 PM',
          deg: res.data.forecast.forecastday[0].hour[21].temp_c,
          deg_f: res.data.forecast.forecastday[0].hour[21].temp_f,
        },
        {
          time: '10 PM',
          deg: res.data.forecast.forecastday[0].hour[22].temp_c,
          deg_f: res.data.forecast.forecastday[0].hour[22].temp_f,
        },
        {
          time: '11 PM',
          deg: res.data.forecast.forecastday[0].hour[23].temp_c,
          deg_f: res.data.forecast.forecastday[0].hour[23].temp_f,
        },
      ]);

      seterror(false);
      console.log(res.data);
    } catch (error) {
      seterror(true);
    }
  }, [SName]);

  const value = useMemo(
    () => ({
      LoadData,
      Loadproduct,
      errors,
      SName,
      setSName,
      HRS,
      active,
      setActive,
      seterror,
      isload,
    }),
    [
      LoadData,
      Loadproduct,
      errors,
      HRS,
      SName,
      setSName,
      active,
      setActive,
      seterror,
      isload,
    ],
  );

  return (
    <WeatherContext.Provider value={value}>{children}</WeatherContext.Provider>
  );
};

export default Context;
