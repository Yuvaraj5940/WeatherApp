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
import {debounce} from 'lodash';
import {WeatherContext} from './context';
// import axiosInstance from './utils/axios';

const MainPage = ({navigation}) => {
  // const [active, setActive] = useState(false);
  const date = Date().toString().split(' ');
  const [name, setName] = useState('bangalore');
  const [wdata, setWdata] = useState({});
  const [DataList, setdataList] = useState({
    Name: 'Bangalore',
    country: 'India',
    temp_c: '28',
    temp_f: '28',
    maxtemp_c: '36.8',
    maxtemp_f: '35.6',
    mintemp_c: '22.6',
    mintemp_f: '21.6',
    dimg: '//cdn.weatherapi.com/weather/64x64/night/116.png',
    text: 'Pratialy Cloudy',
    wind_kph: '13',
    precip_mm: '0',
    pressure_mb: '1016',
    humidity: '70',
    sunrise: '5.53',
    sunset: '6.43',
  });
  const {LoadData, one, Loadproduct, weatrerData} = useContext(WeatherContext);
  // const [Current, setcurrent] = useState([]);
  // const [Forecast, setforecast] = useState([]);

  useEffect(() => {
    LoadData();
  }, []);

  // useEffect(() => {
  //   if(Object.keys(weatrerData).length>0){

  //     setWdata(weatrerData);
  //   }

  // }, [LoadData]);
  console.log(one);
  console.log('Loadproduct', Loadproduct);
  console.log('weatrerData', weatrerData);
  const [Hrs, setHrs] = useState([
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

  const hrs = [
    {
      time: '12 AM',
      deg: 20,
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
  console.log('hrs', Hrs);
  // if (Object.keys(Loadproduct).length > 0) {
  //   // setWdata(Loadproduct.forecast);
  //   console.log(Loadproduct.forecast.forecastday[0].date)
  //   console.log(Loadproduct.forecast.forecastday[1].date)
  //   console.log(Loadproduct.forecast.forecastday[2].date)
  // }
  // console.log('DataList', Object.keys(Loadproduct).length);
  console.log('wdata', wdata);
  useEffect(() => {
    const getData = setTimeout(() => {
      try {
        const res = axios
          .get(
            `http://api.weatherapi.com/v1/forecast.json?key=43ca3500399e463ba8b101827230506 &q=${name}&days=1&aqi=no&alerts=no`,
          )
          .then(res => {
            setWdata(res.data);
            setdataList({
              Name: res.data.location.name,
              country: res.data.location.country,
              temp_c: res.data.current.temp_c,
              temp_f: res.data.current.temp_f,
              maxtemp_c: res.data.forecast.forecastday[0].day.maxtemp_c,
              maxtemp_f: res.data.forecast.forecastday[0].day.maxtemp_f,
              mintemp_c: res.data.forecast.forecastday[0].day.mintemp_c,
              mintemp_f: res.data.forecast.forecastday[0].day.mintemp_f,
              dimg: res.data.current.condition.icon,
              text: res.data.current.condition.text,
              wind_kph: res.data.current.wind_kph,
              precip_mm: res.data.current.precip_mm,
              pressure_mb: res.data.current.pressure_mb,
              humidity: res.data.current.humidity,
              sunrise: res.data.forecast.forecastday[0].astro.sunrise,
              sunset: res.data.forecast.forecastday[0].astro.sunset,
            });
            setHrs([
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
                time: '12 AM',
                deg: res.data.forecast.forecastday[0].hour[12].temp_c,
                deg_f: res.data.forecast.forecastday[0].hour[12].temp_f,
              },
              {
                time: '13 AM',
                deg: res.data.forecast.forecastday[0].hour[13].temp_c,
                deg_f: res.data.forecast.forecastday[0].hour[13].temp_f,
              },
              {
                time: '14 AM',
                deg: res.data.forecast.forecastday[0].hour[14].temp_c,
                deg_f: res.data.forecast.forecastday[0].hour[14].temp_f,
              },
              {
                time: '15 AM',
                deg: res.data.forecast.forecastday[0].hour[15].temp_c,
                deg_f: res.data.forecast.forecastday[0].hour[15].temp_f,
              },
              {
                time: '16 AM',
                deg: res.data.forecast.forecastday[0].hour[16].temp_c,
                deg_f: res.data.forecast.forecastday[0].hour[16].temp_f,
              },
              {
                time: '17 AM',
                deg: res.data.forecast.forecastday[0].hour[17].temp_c,
                deg_f: res.data.forecast.forecastday[0].hour[17].temp_f,
              },
              {
                time: '18 AM',
                deg: res.data.forecast.forecastday[0].hour[18].temp_c,
                deg_f: res.data.forecast.forecastday[0].hour[18].temp_f,
              },
              {
                time: '19 AM',
                deg: res.data.forecast.forecastday[0].hour[19].temp_c,
                deg_f: res.data.forecast.forecastday[0].hour[19].temp_f,
              },
              {
                time: '20 AM',
                deg: res.data.forecast.forecastday[0].hour[20].temp_c,
                deg_f: res.data.forecast.forecastday[0].hour[20].temp_f,
              },
              {
                time: '21 AM',
                deg: res.data.forecast.forecastday[0].hour[21].temp_c,
                deg_f: res.data.forecast.forecastday[0].hour[21].temp_f,
              },
              {
                time: '22 AM',
                deg: res.data.forecast.forecastday[0].hour[22].temp_c,
                deg_f: res.data.forecast.forecastday[0].hour[22].temp_f,
              },
              {
                time: '23 AM',
                deg: res.data.forecast.forecastday[0].hour[23].temp_c,
                deg_f: res.data.forecast.forecastday[0].hour[23].temp_f,
              },
            ]);
          });
      } catch (error) {}

      // loadProducts();
    }, 3000);
    return () => clearTimeout(getData);
  }, [name]);

  // console.log('wdata', wdata);
  // console.log(Object.keys(wdata));
  // console.log(Object.keys(wdata.location));

  // if (Object.keys(wdata).length > 0) {
  //   // console.log('wdata', wdata);
  //   nn = {
  //     Name: wdata.location.name,
  //     country: wdata.location.country,
  //     temp_c: wdata.current.temp_c,
  //     temp_f: wdata.current.temp_f,
  //     maxtemp_c: wdata.forecast.forecastday[0].day.maxtemp_c,
  //     maxtemp_f: wdata.forecast.forecastday[0].day.maxtemp_f,
  //     mintemp_c: wdata.forecast.forecastday[0].day.mintemp_c,
  //     mintemp_f: wdata.forecast.forecastday[0].day.mintemp_f,
  //     dimg: wdata.current.condition.icon,
  //     text: wdata.current.condition.text,
  //     wind_kph: wdata.current.wind_kph,
  //     precip_mm: wdata.current.precip_mm,
  //     pressure_mb: wdata.current.pressure_mb,
  //     humidity: wdata.current.humidity,
  //     sunrise: wdata.forecast.forecastday[0].astro.sunrise,
  //     sunset: wdata.forecast.forecastday[0].astro.sunset,
  //   };
  //   console.log('forecast', wdata.forecast.forecastday[0].astro.sunrise);
  //   // console.log('keys', Object.keys(wdata));
  //   // // console.log('vals', Object.values(wdata.current));
  //   // console.log('keys', Object.keys(wdata.forecast));
  //   // console.log('keys', Object.keys(wdata.location));
  //   // console.log('cuntry', Object.values(wdata.location));
  //   // setdataList(nn);
  // }
  // console.log('DataList', DataList);

  return (
    <ScrollView style={styles.container}>
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
          onChangeText={setName}
        />
        <Pressable>
          <Text style={{fontSize: 25, color: '#FFFFFF'}}> &deg;C</Text>
        </Pressable>
      </View>

      <View style={styles.box1}>
        <Text style={{color: '#FFFFFF', fontSize: 20}}>
          {date[0]}, {date[1]} {date[2]}
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
          {name}
        </Text>
        <Text style={{color: '#d1e0e0'}}>{DataList.country}</Text>
      </View>

      <View style={styles.box2}>
        <View
          style={{
            width: '50%',
            justifyContent: 'center',
            alignItems: 'center',
            gap: 10,
          }}>
          <Text style={{fontSize: 80, color: '#FFFFFF'}}>
            {DataList.temp_c}&deg;
          </Text>
          <Text style={{color: '#d1e0e0'}}>
            Feels Like {DataList.temp_c}&deg;
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

              <Text style={{color: '#FFFFFF'}}>{DataList.mintemp_c}&deg;</Text>
            </View>
            <View style={{display: 'flex', flexDirection: 'row', gap: 5}}>
              <Image
                source={require('../asects/icons/up-arrow.png')}
                style={{height: 17, width: 17, tintColor: '#FFFFFF'}}
              />
              <Text style={{color: '#FFFFFF'}}>{DataList.maxtemp_c}&deg;</Text>
            </View>
          </View>
        </View>

        <View style={{width: '45%', height: '40%', alignItems: 'center'}}>
          {/* <Image
            source={require('../asects/icons/partly-cloudy.png')}
            style={styles.img}
          /> */}
          <Image style={styles.img} source={{uri: `https:${DataList.dimg}`}} />
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
        {DataList.text}
      </Text>

      <View style={{borderWidth: 0.5, borderColor: '#d1e0e0', width: '100%'}} />

      <View style={{display: 'flex', flexDirection: 'row', gap: 20}}>
        {
          <FlatList
            data={Hrs}
            horizontal
            showsHorizontalScrollIndicator={false}
            renderItem={({item}) => (
              <View style={{display: 'flex', gap: 10, padding: 20}}>
                <Text style={{color: '#d1e0e0'}}>{item.time}</Text>
                <Text style={{color: '#FFFFFF', fontSize: 20}}>
                  {item.deg}&deg;
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
            {DataList.sunrise}
          </Text>
        </View>
        <View style={{display: 'flex', gap: 10}}>
          <Text style={{color: '#d1e0e0'}}>Wind</Text>
          <Text style={{fontSize: 22, color: '#FFFFFF'}}>
            {DataList.wind_kph} Km/h
          </Text>
        </View>
        <View style={{display: 'flex', gap: 10}}>
          <Text style={{color: '#d1e0e0'}}>Perciptitation</Text>
          <Text style={{fontSize: 22, color: '#FFFFFF'}}>
            {DataList.precip_mm} mm
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
            {DataList.sunset}
          </Text>
        </View>
        <View style={{display: 'flex', gap: 10}}>
          <Text style={{color: '#d1e0e0'}}>Presure</Text>
          <Text style={{fontSize: 22, color: '#FFFFFF'}}>
            {DataList.pressure_mb} mb
          </Text>
        </View>
        <View style={{display: 'flex', gap: 10}}>
          <Text style={{color: '#d1e0e0'}}>Humidity</Text>
          <Text style={{fontSize: 22, color: '#FFFFFF'}}>
            {DataList.humidity} %
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

      {/* model */}

      {/* <Modal transparent={true} visible={active} animationType="slide">
        <View style={styles.modelView}>
          <Pressable style={{marginTop: 20}} onPress={() => setActive(!active)}>
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
              {name}
            </Text>
            <Text style={{color: '#d1e0e0'}}>India</Text>
          </View>

          <View style={styles.hr} />

          <View style={{display: 'flex', flexDirection: 'row', gap: 20}}>
            {
              <FlatList
                data={hrs}
                horizontal
                showsHorizontalScrollIndicator={false}
                renderItem={({item}) => (
                  <View style={{display: 'flex', gap: 10, padding: 20}}>
                    <Text style={{color: '#d1e0e0'}}>{item.time}</Text>
                    <Text style={{color: '#FFFFFF', fontSize: 23}}>
                      {item.deg}&deg;
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
              <Text style={{fontSize: 20, color: '#FFFFFF'}}>Saturday</Text>
              <Image
                source={require('../asects/images/sun.png')}
                style={{
                  height: 20,
                  width: 20,
                  // tintColor: '#FFFFFF',
                  alignSelf: 'center',
                }}
              />
              <Text style={{color: '#FFFFFF', fontSize: 18}}>84.2&deg;</Text>

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
                <Text style={{color: '#FFFFFF', fontSize: 20}}>22.6&deg;</Text>
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
                <Text style={{color: '#FFFFFF', fontSize: 20}}>36.8&deg;</Text>
              </View>
            </View>

            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-evenly',
                alignItems: 'center',
              }}>
              <Text style={{fontSize: 20, color: '#FFFFFF'}}>Sunday</Text>
              <Image
                source={require('../asects/images/sunny.png')}
                style={{
                  height: 20,
                  width: 20,
                  // tintColor: '#FFFFFF',
                  alignSelf: 'center',
                }}
              />
              <Text style={{color: '#FFFFFF', fontSize: 18}}>81.7&deg;</Text>

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
                <Text style={{color: '#FFFFFF', fontSize: 20}}>73.9&deg;</Text>
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
                <Text style={{color: '#FFFFFF', fontSize: 20}}>93.7&deg;</Text>
              </View>
            </View>

            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-evenly',
                alignItems: 'center',
              }}>
              <Text style={{fontSize: 20, color: '#FFFFFF'}}>Monday</Text>
              <Image
                source={require('../asects/images/rain.png')}
                style={{
                  height: 20,
                  width: 20,
                  // tintColor: '#FFFFFF',
                  alignSelf: 'center',
                }}
              />
              <Text style={{color: '#FFFFFF', fontSize: 18}}>80.8&deg;</Text>

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
                <Text style={{color: '#FFFFFF', fontSize: 20}}>72.9&deg;</Text>
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
                <Text style={{color: '#FFFFFF', fontSize: 20}}>93.2&deg;</Text>
              </View>
            </View>
          </View>

          <View
            style={{
              display: 'flex',
              gap: 20,
              backgroundColor: '#00b0eb',
              paddingBottom: 40,
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
                <Text style={{fontSize: 22, color: '#FFFFFF'}}>05:53 AM</Text>
              </View>
              <View style={{display: 'flex', gap: 10}}>
                <Text style={{color: '#d1e0e0'}}>Wind</Text>
                <Text style={{fontSize: 22, color: '#FFFFFF'}}>13 Km/h</Text>
              </View>
              <View style={{display: 'flex', gap: 10}}>
                <Text style={{color: '#d1e0e0'}}>Perciptitation</Text>
                <Text style={{fontSize: 22, color: '#FFFFFF'}}>0 mm</Text>
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
                <Text style={{fontSize: 22, color: '#FFFFFF'}}>06:43 PM</Text>
              </View>
              <View style={{display: 'flex', gap: 10}}>
                <Text style={{color: '#d1e0e0'}}>Presure</Text>
                <Text style={{fontSize: 22, color: '#FFFFFF'}}>1016 mb</Text>
              </View>
              <View style={{display: 'flex', gap: 10}}>
                <Text style={{color: '#d1e0e0'}}>Humidity</Text>
                <Text style={{fontSize: 22, color: '#FFFFFF'}}>70 %</Text>
              </View>
            </View>
          </View>
        </View>
      </Modal> */}
    </ScrollView>
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
