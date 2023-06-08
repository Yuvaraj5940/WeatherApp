import {View, Text, StyleSheet, Pressable, Image} from 'react-native';
import React, {useContext, useState} from 'react';
import {FlatList} from 'react-native-gesture-handler';
import {WeatherContext} from './context';
import LinearGradient from 'react-native-linear-gradient';

const Three = ({navigation}) => {
  const date = Date().toString().split(' ');
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
  // let update = 6;
  let day1 = update + 1;
  let day2 = update + 2;
  // console.log(update);
  if (update > 6) {
    update = update % 7;
  }

  if (day1 > 6) {
    day1 = day1 % 7;
  }
  if (day2 > 6) {
    day2 = day2 % 7;
  }
  // console.log(day1,day2)
  // console.log(
  //   'finding days',
  //   searchDay[update],
  //   searchDay[day1],
  //   searchDay[day2],
  // );

  const {
    LoadData,
    one,
    Loadproduct,
    weatrerData,
    HRS,
    SName,
    setSName,
    active,
    setActive,
  } = useContext(WeatherContext);
  const [name, setName] = useState('Haveri');
  const hrs = [
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
  ];
  // console.log('date', date);

  return (
    <LinearGradient colors={['#34cbff', '#4c669f']} style={styles.modelView}>
      <Pressable onPress={() => navigation.navigate('next')}>
        <Image
          source={require('../asects/icons/down-arrow.png')}
          style={styles.nav_img}
        />
      </Pressable>
      <View style={styles.modelbox1}>
        <Text numberOfLines={1} style={styles.cityname}>
          {weatrerData.Name}
        </Text>
        <Text style={styles.smtext}>{weatrerData.country}</Text>
      </View>

      <View style={styles.hr} />

      <View style={styles.box2}>
        {
          <FlatList
            data={HRS}
            horizontal
            showsHorizontalScrollIndicator={false}
            renderItem={({item}) => (
              <View style={styles.timebox}>
                <Text style={styles.smtext}>{item.time}</Text>
                <Text style={styles.hr_data}>
                  {active ? item.deg_f : item.deg}&deg;
                </Text>
              </View>
            )}
          />
        }
      </View>

      <View style={styles.hr1} />

      <View style={styles.box3}>
        <View style={styles.box3_div}>
          <Text style={styles.daytext}>{searchDay[update]}</Text>
          <Image
            style={styles.day_imgs}
            source={{uri: `https:${weatrerData.dimg}`}}
          />
          <Text style={styles.days_w}>
            {active ? weatrerData.temp_f : weatrerData.temp_c}&deg;
          </Text>

          <View style={styles.days_div}>
            <Image
              source={require('../asects/icons/down-arrow.png')}
              style={styles.days_div_img}
            />
            <Text style={styles.days_div_d}>
              {active ? weatrerData.mintemp_f : weatrerData.mintemp_c}&deg;
            </Text>
          </View>

          <View style={styles.days_div}>
            <Image
              source={require('../asects/icons/up-arrow.png')}
              style={styles.days_div_img}
            />
            <Text style={styles.days_div_d}>
              {active ? weatrerData.maxtemp_f : weatrerData.maxtemp_c}&deg;
            </Text>
          </View>
        </View>

        <View style={styles.day1_div}>
          <Text style={styles.daytext}>{searchDay[day1]}</Text>
          <Image
            style={styles.day_imgs}
            source={{uri: `https:${weatrerData.day2_img}`}}
          />
          <Text style={styles.days_w}>
            {active ? weatrerData.day2_temp_f : weatrerData.day2_temp_c}&deg;
          </Text>

          <View style={styles.days_div}>
            <Image
              source={require('../asects/icons/down-arrow.png')}
              style={styles.days_div_img}
            />
            <Text style={styles.days_div_d}>
              {active ? weatrerData.day2_mintemp_f : weatrerData.day2_mintemp_c}
              &deg;
            </Text>
          </View>

          <View style={styles.days_div}>
            <Image
              source={require('../asects/icons/up-arrow.png')}
              style={styles.days_div_img}
            />
            <Text style={styles.days_div_d}>
              {active ? weatrerData.day2_maxtemp_f : weatrerData.day2_maxtemp_c}
              &deg;
            </Text>
          </View>
        </View>

        <View style={styles.day1_div}>
          <Text style={styles.daytext}>{searchDay[day2]}</Text>
          {/* <Image
            source={require('../asects/images/rain.png')}
            style={{
              height: 20,
              width: 20,
              // tintColor: '#FFFFFF',
              alignSelf: 'center',
            }}
          /> */}
          <Image
            style={styles.day_imgs}
            source={{uri: `https:${weatrerData.day3_img}`}}
          />
          <Text style={styles.days_w}>
            {active ? weatrerData.day3_temp_f : weatrerData.day3_temp_c}&deg;
          </Text>

          <View style={styles.days_div}>
            <Image
              source={require('../asects/icons/down-arrow.png')}
              style={styles.days_div_img}
            />
            <Text style={styles.days_div_d}>
              {active ? weatrerData.day3_mintemp_f : weatrerData.day3_mintemp_c}
              &deg;
            </Text>
          </View>

          <View style={styles.days_div}>
            <Image
              source={require('../asects/icons/up-arrow.png')}
              style={styles.days_div_img}
            />
            <Text style={styles.days_div_d}>
              {active ? weatrerData.day3_maxtemp_f : weatrerData.day3_maxtemp_c}
              &deg;
            </Text>
          </View>
        </View>
      </View>

      <View style={styles.box4}>
        <View style={styles.box4_row}>
          <View style={styles.box4_row_h}>
            <Text style={styles.smtext}>Sunrise</Text>
            <Text style={styles.box4_row_data}>{weatrerData.sunrise}</Text>
          </View>
          <View style={styles.box4_row_h}>
            <Text style={styles.smtext}>Wind</Text>
            <Text style={styles.box4_row_data}>
              {weatrerData.wind_kph} Km/h
            </Text>
          </View>
          <View style={styles.box4_row_h}>
            <Text style={styles.smtext}>Perciptitation</Text>
            <Text style={styles.box4_row_data}>{weatrerData.precip_mm} mm</Text>
          </View>
        </View>

        <View style={styles.box4_row}>
          <View style={styles.box4_row_h}>
            <Text style={styles.smtext}>Sunset</Text>
            <Text style={styles.box4_row_data}>{weatrerData.sunset}</Text>
          </View>
          <View style={styles.box4_row_h}>
            <Text style={styles.smtext}>Presure</Text>
            <Text style={styles.box4_row_data}>
              {weatrerData.pressure_mb} mb
            </Text>
          </View>
          <View style={styles.box4_row_h}>
            <Text style={styles.smtext}>Humidity</Text>
            <Text style={styles.box4_row_data}>{weatrerData.humidity} %</Text>
          </View>
        </View>
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
  hr: {borderWidth: 0.6, borderColor: '#d1e0e0', width: '100%'},
  hr1: {borderWidth: 0.5, borderColor: '#d1e0e0', width: '100%'},
  smtext: {color: '#d1e0e0'},
  cityname: {fontSize: 30, color: '#FFFFFF'},
  box2: {display: 'flex', flexDirection: 'row', gap: 20},
  timebox: {display: 'flex', gap: 10, padding: 20},
  hr_data: {color: '#FFFFFF', fontSize: 23},
  box3: {
    width: '100%',
    height: '35%',
    justifyContent: 'space-evenly',
  },
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
  days_w: {color: '#FFFFFF', fontSize: 18},
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
  box4: {
    display: 'flex',
    gap: 20,
    backgroundColor: '#00b0eb',
    paddingBottom: 50,
  },
  box4_row: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: 30,
    gap: 20,
    justifyContent: 'space-evenly',
  },
  box4_row_h: {display: 'flex', gap: 10},
  box4_row_data: {fontSize: 22, color: '#FFFFFF'},
});
