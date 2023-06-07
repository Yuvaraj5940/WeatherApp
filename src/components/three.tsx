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
    console.log('vals', update % 7);
  }

  if (day1 > 6) {
    day1 = day1 % 7;
  }
  if (day2 > 6) {
    day2 = day2 % 7;
  }
  // console.log(day1,day2)
  console.log(
    'finding days',
    searchDay[update],
    searchDay[day1],
    searchDay[day2],
  );

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
  console.log('date', date);

  return (
    <LinearGradient colors={['#34cbff', '#4c669f']} style={styles.modelView}>
      <Pressable
        style={{marginTop: 20}}
        onPress={() => navigation.navigate('next')}>
        <Image
          source={require('../asects/icons/down-arrow.png')}
          style={{
            height: 25,
            width: 30,
            tintColor: '#d1e0e0',
            alignSelf: 'center',
          }}
        />
      </Pressable>
      <View style={styles.modelbox1}>
        <Text numberOfLines={1} style={{fontSize: 30, color: '#FFFFFF'}}>
          {weatrerData.Name}
        </Text>
        <Text style={{color: '#d1e0e0'}}>{weatrerData.country}</Text>
      </View>

      <View style={styles.hr} />

      <View style={{display: 'flex', flexDirection: 'row', gap: 20}}>
        {
          <FlatList
            data={HRS}
            horizontal
            showsHorizontalScrollIndicator={false}
            renderItem={({item}) => (
              <View style={{display: 'flex', gap: 10, padding: 20}}>
                <Text style={{color: '#d1e0e0'}}>{item.time}</Text>
                <Text style={{color: '#FFFFFF', fontSize: 23}}>
                  {active ? item.deg_f : item.deg}&deg;
                </Text>
              </View>
            )}
          />
        }
      </View>

      <View style={styles.hr1} />

      <View
        style={{
          width: '100%',
          height: '35%',
          justifyContent: 'space-evenly',
        }}>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-evenly',
          }}>
          <Text style={{fontSize: 20, color: '#FFFFFF'}}>
            {searchDay[update]}
          </Text>
          <Image
            style={{
              height: 30,
              width: 30,
              // tintColor: '#FFFFFF',
              alignSelf: 'center',
            }}
            source={{uri: `https:${weatrerData.dimg}`}}
          />
          <Text style={{color: '#FFFFFF', fontSize: 18}}>
            {active ? weatrerData.temp_f : weatrerData.temp_c}&deg;
          </Text>

          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              gap: 5,
              alignItems: 'center',
            }}>
            <Image
              source={require('../asects/icons/down-arrow.png')}
              style={{height: 15, width: 15, tintColor: '#d1e0e0'}}
            />
            <Text style={{color: '#FFFFFF', fontSize: 20}}>
              {active ? weatrerData.mintemp_f : weatrerData.mintemp_c}&deg;
            </Text>
          </View>

          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              gap: 5,
              alignItems: 'center',
            }}>
            <Image
              source={require('../asects/icons/up-arrow.png')}
              style={{height: 15, width: 15, tintColor: '#d1e0e0'}}
            />
            <Text style={{color: '#FFFFFF', fontSize: 20}}>
              {active ? weatrerData.maxtemp_f : weatrerData.maxtemp_c}&deg;
            </Text>
          </View>
        </View>

        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-evenly',
            alignItems: 'center',
          }}>
          <Text style={{fontSize: 20, color: '#FFFFFF'}}>
            {searchDay[day1]}
          </Text>
          <Image
            style={{
              height: 30,
              width: 30,
              // tintColor: '#FFFFFF',
              alignSelf: 'center',
            }}
            source={{uri: `https:${weatrerData.day2_img}`}}
          />
          <Text style={{color: '#FFFFFF', fontSize: 18}}>
            {active ? weatrerData.day2_temp_f : weatrerData.day2_temp_c}&deg;
          </Text>

          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              gap: 5,
              alignItems: 'center',
            }}>
            <Image
              source={require('../asects/icons/down-arrow.png')}
              style={{height: 15, width: 15, tintColor: '#d1e0e0'}}
            />
            <Text style={{color: '#FFFFFF', fontSize: 20}}>
              {active ? weatrerData.day2_mintemp_f : weatrerData.day2_mintemp_c}&deg;
            </Text>
          </View>

          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              gap: 5,
              alignItems: 'center',
            }}>
            <Image
              source={require('../asects/icons/up-arrow.png')}
              style={{height: 15, width: 15, tintColor: '#d1e0e0'}}
            />
            <Text style={{color: '#FFFFFF', fontSize: 20}}>
              {active ? weatrerData.day2_maxtemp_f : weatrerData.day2_maxtemp_c}&deg;
            </Text>
          </View>
        </View>

        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-evenly',
            alignItems: 'center',
          }}>
          <Text style={{fontSize: 20, color: '#FFFFFF'}}>
            {searchDay[day2]}
          </Text>
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
            style={{
              height: 30,
              width: 30,
              // tintColor: '#FFFFFF',
              alignSelf: 'center',
            }}
            source={{uri: `https:${weatrerData.day3_img}`}}
          />
          <Text style={{color: '#FFFFFF', fontSize: 18}}>
            {active ? weatrerData.day3_temp_f : weatrerData.day3_temp_c}&deg;
          </Text>

          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              gap: 5,
              alignItems: 'center',
            }}>
            <Image
              source={require('../asects/icons/down-arrow.png')}
              style={{height: 15, width: 15, tintColor: '#d1e0e0'}}
            />
            <Text style={{color: '#FFFFFF', fontSize: 20}}>
              {active ? weatrerData.day3_mintemp_f : weatrerData.day3_mintemp_c}&deg;
            </Text>
          </View>

          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              gap: 5,
              alignItems: 'center',
            }}>
            <Image
              source={require('../asects/icons/up-arrow.png')}
              style={{height: 15, width: 15, tintColor: '#d1e0e0'}}
            />
            <Text style={{color: '#FFFFFF', fontSize: 20}}>
              {active ? weatrerData.day3_maxtemp_f : weatrerData.day3_maxtemp_c}&deg;
            </Text>
          </View>
        </View>
      </View>

      <View
        style={{
          display: 'flex',
          gap: 20,
          backgroundColor: '#00b0eb',
          paddingBottom: 50,
        }}>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            marginTop: 30,
            gap: 20,
            justifyContent: 'space-evenly',
          }}>
          <View style={{display: 'flex', gap: 10}}>
            <Text style={{color: '#d1e0e0'}}>Sunrise</Text>
            <Text style={{fontSize: 22, color: '#FFFFFF'}}>
              {weatrerData.sunrise}
            </Text>
          </View>
          <View style={{display: 'flex', gap: 10}}>
            <Text style={{color: '#d1e0e0'}}>Wind</Text>
            <Text style={{fontSize: 22, color: '#FFFFFF'}}>
              {weatrerData.wind_kph} Km/h
            </Text>
          </View>
          <View style={{display: 'flex', gap: 10}}>
            <Text style={{color: '#d1e0e0'}}>Perciptitation</Text>
            <Text style={{fontSize: 22, color: '#FFFFFF'}}>
              {weatrerData.precip_mm} mm
            </Text>
          </View>
        </View>

        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            marginTop: 30,
            gap: 20,
            justifyContent: 'space-evenly',
          }}>
          <View style={{display: 'flex', gap: 10}}>
            <Text style={{color: '#d1e0e0'}}>Sunset</Text>
            <Text style={{fontSize: 22, color: '#FFFFFF'}}>
              {weatrerData.sunset}
            </Text>
          </View>
          <View style={{display: 'flex', gap: 10}}>
            <Text style={{color: '#d1e0e0'}}>Presure</Text>
            <Text style={{fontSize: 22, color: '#FFFFFF'}}>
              {weatrerData.pressure_mb} mb
            </Text>
          </View>
          <View style={{display: 'flex', gap: 10}}>
            <Text style={{color: '#d1e0e0'}}>Humidity</Text>
            <Text style={{fontSize: 22, color: '#FFFFFF'}}>
              {weatrerData.humidity} %
            </Text>
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
    // top: 10,
    flexWrap: 'wrap',
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
});
