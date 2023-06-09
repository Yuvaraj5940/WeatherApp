import axios from 'axios';
import React, {useCallback, useContext, useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Image,
  Pressable,
  FlatList,
  Modal,
  ScrollView,
  ActivityIndicator,
} from 'react-native';
// import {debounce} from 'lodash';
import {WeatherContext} from './context';
import LinearGradient from 'react-native-linear-gradient';
import Cityname from '../cityname';
import Hourlydata from '../hourdata';
import RestData from '../RestData';
import MainData from '../mainData';
import Hr from '../Hr';

const MainPage = ({navigation}) => {
  const date = Date().toString().split(' ');
  let update = new Date().getDay();
  const {
    LoadData,
    errors,
    Loadproduct,
     SName,
    setSName,
    active,
    seterror,
    setActive,
    isload,
  } = useContext(WeatherContext);
  const searchDay = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];

  useEffect(() => {
    seterror(false);
    const getData = setTimeout(() => {
      LoadData();
    }, 1500);
    return () => clearTimeout(getData);
  }, [SName]);

  return (
    <>
      {isload ? (
        <LinearGradient
          colors={['#34cbff', '#4c669f']}
          style={styles.container}>
          <View style={styles.hedbox}>
            <TextInput
              style={[
                styles.searcInput,
                {
                  borderColor:
                    SName !== '' ? (errors ? 'red' : '#34cbff') : '#34cbff',
                },
              ]}
              placeholder="Search City"
              placeholderTextColor="#FFFFFF"
              onChangeText={setSName}
            />
            <Pressable onPress={() => setActive(!active)}>
              {active ? (
                <Text style={styles.headbtn}>&deg;F</Text>
              ) : (
                <Text style={styles.headbtn}>&deg;C</Text>
              )}
            </Pressable>
          </View>

          <View style={styles.box1}>
            <Text style={styles.daydate}>
              {searchDay[update]}, {date[1]} {date[2]}
            </Text>
            <Cityname
              props={{
                cname: Loadproduct.location.name,
                cuntry: Loadproduct.location.country,
              }}
            />
          </View>
          <MainData
            Vals={{
              active: active,
              temp_c: Loadproduct.current?.temp_c,
              temp_f: Loadproduct.current?.temp_f,
              min_tem_f: Loadproduct.forecast?.forecastday[0]?.day?.mintemp_f,
              min_tem_c: Loadproduct.forecast?.forecastday[0]?.day?.mintemp_c,
              max_tem_f: Loadproduct.forecast?.forecastday[0]?.day?.maxtemp_f,
              max_tem_c: Loadproduct.forecast?.forecastday[0]?.day?.maxtemp_c,
              weather_img: Loadproduct.current?.condition?.icon,
            }}
          />

          <Text style={styles.box3}>
            {Loadproduct?.current?.condition?.text}
          </Text>

          <Hr />
          <Hourlydata />
          <Hr />
          <RestData
            props={{
              sunrice: Loadproduct.forecast.forecastday[0].astro.sunrise,
              wind: Loadproduct.current.wind_kph,
              prici: Loadproduct.current.precip_mm,
              sunset: Loadproduct.forecast.forecastday[0].astro.sunset,
              presur: Loadproduct.current.pressure_mb,
              humidity: Loadproduct.current.humidity,
            }}
          />

          <Pressable
            style={{marginTop: 20}}
            onPress={() => navigation.navigate('three')}>
            <Image
              source={require('../asets/icons/up-arrow.png')}
              style={styles.navbtn}
            />
          </Pressable>
        </LinearGradient>
      ) : (
        <View style={[styles.cont, styles.horizontal]}>
          <ActivityIndicator size="large" color="#00ff00" />
        </View>
      )}
    </>
  );
};

export default MainPage;
const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    display: 'flex',
    backgroundColor: '#00bfff',
    paddingTop: 20,
  },
  hedbox: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  headbtn: {fontSize: 30, color: '#FFFFFF'},
  daydate: {color: '#FFFFFF', fontSize: 20},
  box3: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 33,
    textAlign: 'center',
    margin: 22,
  },
  searcInput: {
    backgroundColor: '#b0c4de',
    borderWidth: 1,
    width: '80%',
    height: 40,
    borderRadius: 20,
    fontSize: 15,
    marginHorizontal: 10,
    paddingHorizontal: 15,
  },
  box1: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10,
    margin: 10,
  },
  navbtn: {
    height: 25,
    width: 30,
    tintColor: '#d1e0e0',
    alignSelf: 'center',
  },
  cont: {
    flex: 1,
    justifyContent: 'center',
  },
  horizontal: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
  },
});
