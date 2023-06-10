import React, {useContext, useState} from 'react';
import {View, Text, StyleSheet, Pressable, Image, FlatList} from 'react-native';
import {WeatherContext} from './sreens/context';

const Predivteddata = () => {
  const {Loadproduct, active} = useContext(WeatherContext);
  const searchDay = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];
  let update = new Date().getDay();
    return (
    <>
      <FlatList
        data={searchDay}
        showsHorizontalScrollIndicator={false}
        renderItem={({item, index}) => (
          <View style={styles.day1_div}>
            <Text style={styles.daytext}>{(update + index) < 6? searchDay[update+index]:searchDay[(update+index) % 7]}</Text>
            <Image
              style={styles.day_imgs}
              source={{
                uri: `https:${Loadproduct?.forecast?.forecastday[index]?.day?.condition?.icon}`,
              }}
            />
            <Text style={styles.days_w}>
              {active
                ? Loadproduct?.forecast?.forecastday[index]?.day?.avgtemp_f
                : Loadproduct?.forecast?.forecastday[index]?.day?.avgtemp_c}
              &deg;
            </Text>

            <View style={styles.days_div}>
              <Image
                source={require('./asets/icons/down-arrow.png')}
                style={styles.days_div_img}
              />
              <Text style={styles.days_div_d}>
                {active
                  ? Loadproduct?.forecast?.forecastday[index]?.day?.mintemp_f
                  : Loadproduct?.forecast?.forecastday[index]?.day?.mintemp_c}
                &deg;
              </Text>
            </View>

            <View style={styles.days_div}>
              <Image
                source={require('./asets/icons/up-arrow.png')}
                style={styles.days_div_img}
              />
              <Text style={styles.days_div_d}>
                {active
                  ? Loadproduct?.forecast?.forecastday[index]?.day?.maxtemp_f
                  : Loadproduct?.forecast?.forecastday[index]?.day?.maxtemp_c}
                &deg;
              </Text>
            </View>
          </View>
        )}
      />
    </>
  );
};

export default Predivteddata;
const styles = StyleSheet.create({
  daytext: {fontSize: 20, color: '#FFFFFF'},
  day_imgs: {
    height: 30,
    width: 30,
    alignSelf: 'center',
  },
  days_div: {
    display: 'flex',
    flexDirection: 'row',
    gap: 5,
    alignItems: 'center',
  },
  days_div_img: {height: 15, width: 15, tintColor: '#d1e0e0'},
  days_div_d: {color: '#FFFFFF', fontSize: 20},
  day1_div: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    padding: 20,
  },
  days_w: {color: '#FFFFFF', fontSize: 18},
});
