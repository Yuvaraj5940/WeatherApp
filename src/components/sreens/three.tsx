import {View, StyleSheet, Pressable, Image} from 'react-native';
import React, {useContext} from 'react';
import {WeatherContext} from './context';
import LinearGradient from 'react-native-linear-gradient';
import Cityname from '../cityname';
import Hourlydata from '../hourdata';
import RestData from '../RestData';
import Predivteddata from '../predicteddata';
import Hr from '../Hr';

const Three = ({navigation}) => {
  const {Loadproduct} = useContext(WeatherContext);
  return (
    <LinearGradient colors={['#34cbff', '#4c669f']} style={styles.modelView}>
      <Pressable onPress={() => navigation.navigate('next')}>
        <Image
          source={require('../asets/icons/down-arrow.png')}
          style={styles.nav_img}
        />
      </Pressable>
      <View style={styles.modelbox1}>
        <Cityname
          props={{
            cname: Loadproduct.location.name,
            cuntry: Loadproduct.location.country,
          }}
        />
      </View>
      <Hr />

      <View style={styles.box2}>
        <Hourlydata />
      </View>

      <Hr />

      <View style={styles.box3}>
        <Predivteddata />
      </View>

      <View style={styles.box4}>
        <RestData
          props={{
            sunrice: Loadproduct?.forecast?.forecastday[0]?.astro?.sunrise,
            wind: Loadproduct.current?.wind_kph,
            prici: Loadproduct.current?.precip_mm,
            sunset: Loadproduct.forecast?.forecastday[0]?.astro?.sunset,
            presur: Loadproduct.current?.pressure_mb,
            humidity: Loadproduct.current?.humidity,
          }}
        />
      </View>
    </LinearGradient>
  );
};

export default Three;

const styles = StyleSheet.create({
  modelView: {
    display: 'flex',
    width: '100%',
    height: '100%',
    backgroundColor: '#00bfff',
    position: 'absolute',
    paddingTop: 20,
    flexWrap: 'wrap',
  },
  nav_img: {
    height: 25,
    width: 30,
    tintColor: '#d1e0e0',
    alignSelf: 'center',
  },
  modelbox1: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10,
    margin: 30,
  },
  box2: {display: 'flex', flexDirection: 'row', gap: 20},
  box3: {
    width: '100%',
    height: '35%',
    justifyContent: 'space-evenly',
  },
  box4: {
    display: 'flex',
    gap: 20,
    backgroundColor: '#00b0eb',
    paddingBottom: 50,
    paddingTop: 10,
  },
});
