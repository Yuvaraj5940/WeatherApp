import React, {createContext, useState, useCallback, useMemo} from 'react';
import axiosInstance from '../utils/axios';

export const WeatherContext = createContext();
const Context = ({children}) => {
  const [Loadproduct, setLoadProducrt] = useState([]);
  const [isload, setisload] = useState(false);
  const [active, setActive] = useState(false);
  const [errors, seterror] = useState(true);
  const [SName, setSName] = useState('Bangalore');

  const LoadData = useCallback(async () => {
    try {
      const res = await axiosInstance.get(`${SName}&days=7&aqi=no&alerts=no`);
      setLoadProducrt({...res.data});
      setisload(true);
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
      active,
      setActive,
      seterror,
      isload,
    }),
    [
      LoadData,
      Loadproduct,
      errors,
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
