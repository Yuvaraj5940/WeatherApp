/* eslint-disable react-native/no-inline-styles */
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
} from 'react-native';
// import {debounce} from 'lodash';
import {WeatherContext} from './context';
import LinearGradient from 'react-native-linear-gradient';

const MainPage = ({navigation}) => {
  const [active, setActive] = useState(false);
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
  const [name, setName] = useState('bangalore');
  const [wdata, setWdata] = useState({});
  const {LoadData, one, Loadproduct, weatrerData, HRS, SName, setSName} =
    useContext(WeatherContext);


  // console.log(one);
  // console.log('Loadproduct', Loadproduct);
  // console.log('weatrerData', weatrerData);
  // console.log('hrs.....', HRS);
  // console.log('wdata', wdata);

  useEffect(() => {
    const getData = setTimeout(() => {
      LoadData();
    }, 2000);
    return () => clearTimeout(getData);
  }, [SName]);

  console.log(SName);

  return (
    <LinearGradient colors={['#00bfff','#4c669f']} style={styles.container}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <TextInput
          style={styles.searcInput}
          placeholder="Search City"
          placeholderTextColor="#FFFFFF"
          onChangeText={setSName}
        />
        <Pressable onPress={() => setActive(!active)}>
          {active ? (
            <Text style={{fontSize: 22, color: '#FFFFFF'}}>&deg;F</Text>
          ) : (
            <Text style={{fontSize: 22, color: '#FFFFFF'}}>&deg;C</Text>
          )}
        </Pressable>
      </View>

      <View style={styles.box1}>
        <Text style={{color: '#FFFFFF', fontSize: 20}}>
          {searchDay[update]}, {date[1]} {date[2]}
        </Text>
        <Text
          numberOfLines={1}
          style={{
            fontSize: 30,
            color: '#FFFFFF',
            width: '100%',
            textAlign: 'center',
            // overflow: 'scroll',
          }}>
          {weatrerData.Name}
        </Text>
        <Text style={{color: '#d1e0e0'}}>{weatrerData.country}</Text>
      </View>

      <View style={styles.box2}>
        <View
          style={{
            width: '55%',
            justifyContent: 'center',
            alignItems: 'center',
            gap: 10,
          }}>
          <Text style={{fontSize: 75, color: '#FFFFFF'}}>
            {active ? weatrerData.temp_f : weatrerData.temp_c}&deg;
          </Text>

          <Text style={{color: '#d1e0e0'}}>
            Feels Like {active ? weatrerData.temp_f : weatrerData.temp_c} &deg;
          </Text>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-evenly',
              gap: 10,
            }}>
            <View style={{display: 'flex', flexDirection: 'row', gap: 5}}>
              <Image
                source={require('../asects/icons/down-arrow.png')}
                style={{height: 17, width: 17, tintColor: '#FFFFFF'}}
              />

              <Text style={{color: '#FFFFFF'}}>
                {active ? weatrerData.mintemp_f : weatrerData.mintemp_c}&deg;
              </Text>
            </View>
            <View style={{display: 'flex', flexDirection: 'row', gap: 5}}>
              <Image
                source={require('../asects/icons/up-arrow.png')}
                style={{height: 17, width: 17, tintColor: '#FFFFFF'}}
              />
              <Text style={{color: '#FFFFFF'}}>
                {active ? weatrerData.maxtemp_f : weatrerData.maxtemp_c}&deg;
              </Text>
            </View>
          </View>
        </View>

        <View style={{width: '45%', height: '40%', alignItems: 'center'}}>
          {/* <Image
            source={require('../asects/icons/partly-cloudy.png')}
            style={styles.img}
          /> */}
          <Image
            style={styles.img}
            source={{uri: `https:${weatrerData.dimg}`}}
          />
        </View>
      </View>

      <Text
        style={{
          color: '#FFFFFF',
          fontWeight: 'bold',
          fontSize: 30,
          textAlign: 'center',
          margin: 20,
        }}>
        {weatrerData.text}
      </Text>

      <View style={{borderWidth: 0.5, borderColor: '#d1e0e0', width: '100%'}} />

      <View style={{display: 'flex', flexDirection: 'row', gap: 20}}>
        {
          <FlatList
            data={HRS}
            horizontal
            showsHorizontalScrollIndicator={false}
            renderItem={({item}) => (
              <View style={{display: 'flex', gap: 10, padding: 20}}>
                <Text style={{color: '#d1e0e0'}}>{item.time}</Text>
                <Text style={{color: '#FFFFFF', fontSize: 20}}>
                  {active ? item.deg_f : item.deg} &deg;
                </Text>
              </View>
            )}
          />
        }
      </View>

      <View style={{borderWidth: 0.5, borderColor: '#d1e0e0', width: '100%'}} />

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

      <Pressable
        style={{marginTop: 20}}
        onPress={() => navigation.navigate('three')}>
        <Image
          source={require('../asects/icons/up-arrow.png')}
          style={{
            height: 25,
            width: 30,
            tintColor: '#d1e0e0',
            alignSelf: 'center',
          }}
        />
      </Pressable>
    </LinearGradient>
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
  searcInput: {
    backgroundColor: '#b0c4de',
    // borderWidth:1,
    width: '80%',
    height: 40,
    borderRadius: 20,
    fontSize: 15,
    marginHorizontal: 10,
    paddingHorizontal: 15,
    // color:'#FFFFFF'
  },
  box1: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10,
    margin: 10,
  },
  img: {
    // flex:1,
    width: 140,
    height: 150,
    justifyContent: 'center',
    alignSelf: 'center',
  },
  box2: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: 30,
  },
  modelView: {
    display: 'flex',
    width: '100%',
    height: '98%',
    backgroundColor: '#00bfff',
    position: 'absolute',
    top: 10,
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
