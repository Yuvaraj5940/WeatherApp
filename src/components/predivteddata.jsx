import React,{useContext,useState} from 'react';
import {View, Text, StyleSheet, Pressable, Image} from 'react-native';
import { WeatherContext } from './sreens/context';


const Predivteddata = () => {
    const {
        Loadproduct,
        active,
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
      let update = new Date().getDay();
      let day1 = update + 1;
      let day2 = update + 2;
      if (update > 6) {
        update = update % 7;
      }
    
      if (day1 > 6) {
        day1 = day1 % 7;
      }
      if (day2 > 6) {
        day2 = day2 % 7;
      }
  return (
    <>
     <View style={styles.box3_div}>
          <Text style={styles.daytext}>{searchDay[update]}</Text>
          <Image
            style={styles.day_imgs}
            source={{uri: `https:${Loadproduct.current?.condition?.icon}`}}
          />
          <Text style={styles.days_w}>
            {active ? Loadproduct?.current?.temp_f : Loadproduct?.current?.temp_c}&deg;
          </Text>

          <View style={styles.days_div}>
            <Image
              source={require('./asets/icons/down-arrow.png')}
              style={styles.days_div_img}
            />
            <Text style={styles.days_div_d}>
              {active ? Loadproduct?.forecast?.forecastday[0]?.day?.mintemp_f : Loadproduct?.forecast?.forecastday[0]?.day?.mintemp_c}&deg;
            </Text>
          </View>

          <View style={styles.days_div}>
            <Image
              source={require('./asets/icons/up-arrow.png')}
              style={styles.days_div_img}
            />
            <Text style={styles.days_div_d}>
              {active ? Loadproduct?.forecast?.forecastday[0]?.day?.maxtemp_f : Loadproduct?.forecast?.forecastday[0]?.day?.maxtemp_c}&deg;
            </Text>
          </View>
        </View>

        <View style={styles.day1_div}>
          <Text style={styles.daytext}>{searchDay[day1]}</Text>
          <Image
            style={styles.day_imgs}
            source={{uri: `https:${Loadproduct?.forecast?.forecastday[1]?.day?.condition?.icon}`}}
          />
          <Text style={styles.days_w}>
            {active
              ? Loadproduct.forecast.forecastday[1].day.avgtemp_f
              : Loadproduct.forecast.forecastday[1].day.avgtemp_c}
            &deg;
          </Text>

          <View style={styles.days_div}>
            <Image
              source={require('./asets/icons/down-arrow.png')}
              style={styles.days_div_img}
            />
            <Text style={styles.days_div_d}>
              {active
                ? Loadproduct.forecast.forecastday[1].day.mintemp_f
                : Loadproduct.forecast.forecastday[1].day.mintemp_c}
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
                ? Loadproduct.forecast.forecastday[1].day.mintemp_f
                : Loadproduct.forecast.forecastday[1].day.mintemp_c}
              &deg;
            </Text>
          </View>
        </View>

        <View style={styles.day1_div}>
          <Text style={styles.daytext}>{searchDay[day2]}</Text>
          <Image
            style={styles.day_imgs}
            source={{uri: `https:${Loadproduct?.forecast?.forecastday[2]?.day?.condition?.icon}`}}
          />
          <Text style={styles.days_w}>
            {active ? Loadproduct?.forecast?.forecastday[2]?.day?.avgtemp_f : Loadproduct?.forecast?.forecastday[2]?.day?.avgtemp_c}&deg;
          </Text>

          <View style={styles.days_div}>
            <Image
              source={require('./asets/icons/down-arrow.png')}
              style={styles.days_div_img}
            />
            <Text style={styles.days_div_d}>
              {active ? Loadproduct?.forecast?.forecastday[2]?.day?.mintemp_f : Loadproduct?.forecast?.forecastday[2]?.day?.mintemp_c}
              &deg;
            </Text>
          </View>

          <View style={styles.days_div}>
            <Image
              source={require('./asets/icons/up-arrow.png')}
              style={styles.days_div_img}
            />
            <Text style={styles.days_div_d}>
              {active ? Loadproduct?.forecast?.forecastday[2]?.day?.maxtemp_f : Loadproduct?.forecast?.forecastday[2]?.day?.maxtemp_c}
              &deg;
            </Text>
          </View>
        </View>
    </>
  )
}

export default Predivteddata;
const styles= StyleSheet.create({
    box3_div: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
      },
      daytext: {fontSize: 20, color: '#FFFFFF'},
      day_imgs: {
        height: 30,
        width: 30,
        // tintColor: '#FFFFFF',
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
      },
      days_w: {color: '#FFFFFF', fontSize: 18},


})