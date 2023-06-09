import {View, Text, StyleSheet, Image, SafeAreaView} from 'react-native';
import React, {useContext, useEffect} from 'react';
// import {WeatherContext} from './context';

const Home = ({navigation}) => {
  // const {LoadData} = useContext(WeatherContext);
  setTimeout(() => {
    navigation.navigate('next');
  }, 2000);

  return (
    <SafeAreaView style={styles.continer}>
      <Image
        source={require('../asets/images/weather-ap.png')}
        style={styles.img}
      />
      <Image
        source={require('../asets/images/weather-api.png')}
        style={styles.img2}
      />
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  continer: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },
  img: {
    width: 120,
    height: 120,
  },
  img2: {
    width: 130,
    height: 70,
    position: 'absolute',
    bottom: 20,
  },
});
