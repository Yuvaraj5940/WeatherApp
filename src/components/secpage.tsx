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
  const {
    LoadData,
    errors,
    Loadproduct,
    weatrerData,
    HRS,
    SName,
    setSName,
    active,
    seterror,
    setActive,
    isload,
  } = useContext(WeatherContext);

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
        
            {
              
            }
          

          <View style={styles.box1}>
            <Text style={styles.daydate}>
              {searchDay[update]}, {date[1]} {date[2]}
            </Text>
            <Text numberOfLines={1} style={styles.cityname}>
              {weatrerData.Name}
            </Text>
            <Text style={styles.contry}>{weatrerData.country}</Text>
          </View>

          <View style={styles.box2}>
            <View style={styles.box2_col1}>
              <Text style={styles.bigh}>
                {active ? weatrerData.temp_f : weatrerData.temp_c}&deg;
              </Text>

              <Text style={styles.feels}>
                Feels Like {active ? weatrerData.temp_f : weatrerData.temp_c}{' '}
                &deg;
              </Text>
              <View style={styles.box2_row3}>
                <View style={styles.box2_row3_col}>
                  <Image
                    source={require('../asects/icons/down-arrow.png')}
                    style={styles.box2_row3_img}
                  />

                  <Text style={{color: '#FFFFFF'}}>
                    {active ? weatrerData.mintemp_f : weatrerData.mintemp_c}
                    &deg;
                  </Text>
                </View>
                <View style={styles.box2_row3_col}>
                  <Image
                    source={require('../asects/icons/up-arrow.png')}
                    style={styles.box2_row3_img}
                  />
                  <Text style={{color: '#FFFFFF'}}>
                    {active ? weatrerData.maxtemp_f : weatrerData.maxtemp_c}
                    &deg;
                  </Text>
                </View>
              </View>
            </View>

            <View style={styles.box2_img}>
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

          <Text style={styles.box3}>{weatrerData.text}</Text>

          <View style={styles.hr} />

          <View style={styles.hr_box}>
            {
              <FlatList
                data={HRS}
                horizontal
                showsHorizontalScrollIndicator={false}
                renderItem={({item}) => (
                  <View style={styles.hr_box_in}>
                    <Text style={styles.hr_timing}>{item.time}</Text>
                    <Text style={styles.hr_data}>
                      {active ? item.deg_f : item.deg} &deg;
                    </Text>
                  </View>
                )}
              />
            }
          </View>

          <View style={styles.hr} />

          <View style={styles.box4}>
            <View style={styles.box4_col1}>
              <Text style={styles.box4_row1}>Sunrise</Text>
              <Text style={styles.box4_row2}>{weatrerData.sunrise}</Text>
            </View>
            <View style={styles.box4_col1}>
              <Text style={styles.box4_row1}>Wind</Text>
              <Text style={styles.box4_row2}>{weatrerData.wind_kph} Km/h</Text>
            </View>
            <View style={styles.box4_col1}>
              <Text style={styles.box4_row1}>Perciptitation</Text>
              <Text style={styles.box4_row2}>{weatrerData.precip_mm} mm</Text>
            </View>
          </View>

          <View style={styles.box5}>
            <View style={styles.box4_col1}>
              <Text style={styles.box4_row1}>Sunset</Text>
              <Text style={styles.box4_row2}>{weatrerData.sunset}</Text>
            </View>
            <View style={styles.box4_col1}>
              <Text style={styles.box4_row1}>Presure</Text>
              <Text style={styles.box4_row2}>{weatrerData.pressure_mb} mb</Text>
            </View>
            <View style={styles.box4_col1}>
              <Text style={styles.box4_row1}>Humidity</Text>
              <Text style={styles.box4_row2}>{weatrerData.humidity} %</Text>
            </View>
          </View>

          <Pressable
            style={{marginTop: 20}}
            onPress={() => navigation.navigate('three')}>
            <Image
              source={require('../asects/icons/up-arrow.png')}
              style={styles.navbtn}
            />
          </Pressable>
        </LinearGradient>
      ) : (
        <Text>loading</Text>
      )}
    </>

    // <LinearGradient colors={['#34cbff', '#4c669f']} style={styles.container}>
    //   <View style={styles.hedbox}>
    //     <TextInput
    //       style={[
    //         styles.searcInput,
    //         {
    //           borderColor:
    //             SName !== '' ? (errors ? 'red' : '#34cbff') : '#34cbff',
    //         },
    //       ]}
    //       placeholder="Search City"
    //       placeholderTextColor="#FFFFFF"
    //       onChangeText={setSName}
    //     />
    //     <Pressable onPress={() => setActive(!active)}>
    //       {active ? (
    //         <Text style={styles.headbtn}>&deg;F</Text>
    //       ) : (
    //         <Text style={styles.headbtn}>&deg;C</Text>
    //       )}
    //     </Pressable>
    //   </View>

    //   <View style={styles.box1}>
    //     <Text style={styles.daydate}>
    //       {searchDay[update]}, {date[1]} {date[2]}
    //     </Text>
    //     <Text numberOfLines={1} style={styles.cityname}>
    //       {weatrerData.Name}
    //     </Text>
    //     <Text style={styles.contry}>{weatrerData.country}</Text>
    //   </View>

    //   <View style={styles.box2}>
    //     <View style={styles.box2_col1}>
    //       <Text style={styles.bigh}>
    //         {active ? weatrerData.temp_f : weatrerData.temp_c}&deg;
    //       </Text>

    //       <Text style={styles.feels}>
    //         Feels Like {active ? weatrerData.temp_f : weatrerData.temp_c} &deg;
    //       </Text>
    //       <View style={styles.box2_row3}>
    //         <View style={styles.box2_row3_col}>
    //           <Image
    //             source={require('../asects/icons/down-arrow.png')}
    //             style={styles.box2_row3_img}
    //           />

    //           <Text style={{color: '#FFFFFF'}}>
    //             {active ? weatrerData.mintemp_f : weatrerData.mintemp_c}&deg;
    //           </Text>
    //         </View>
    //         <View style={styles.box2_row3_col}>
    //           <Image
    //             source={require('../asects/icons/up-arrow.png')}
    //             style={styles.box2_row3_img}
    //           />
    //           <Text style={{color: '#FFFFFF'}}>
    //             {active ? weatrerData.maxtemp_f : weatrerData.maxtemp_c}&deg;
    //           </Text>
    //         </View>
    //       </View>
    //     </View>

    //     <View style={styles.box2_img}>
    //       {/* <Image
    //         source={require('../asects/icons/partly-cloudy.png')}
    //         style={styles.img}
    //       /> */}
    //       <Image
    //         style={styles.img}
    //         source={{uri: `https:${weatrerData.dimg}`}}
    //       />
    //     </View>
    //   </View>

    //   <Text style={styles.box3}>{weatrerData.text}</Text>

    //   <View style={styles.hr} />

    //   <View style={styles.hr_box}>
    //     {
    //       <FlatList
    //         data={HRS}
    //         horizontal
    //         showsHorizontalScrollIndicator={false}
    //         renderItem={({item}) => (
    //           <View style={styles.hr_box_in}>
    //             <Text style={styles.hr_timing}>{item.time}</Text>
    //             <Text style={styles.hr_data}>
    //               {active ? item.deg_f : item.deg} &deg;
    //             </Text>
    //           </View>
    //         )}
    //       />
    //     }
    //   </View>

    //   <View style={styles.hr} />

    //   <View style={styles.box4}>
    //     <View style={styles.box4_col1}>
    //       <Text style={styles.box4_row1}>Sunrise</Text>
    //       <Text style={styles.box4_row2}>{weatrerData.sunrise}</Text>
    //     </View>
    //     <View style={styles.box4_col1}>
    //       <Text style={styles.box4_row1}>Wind</Text>
    //       <Text style={styles.box4_row2}>{weatrerData.wind_kph} Km/h</Text>
    //     </View>
    //     <View style={styles.box4_col1}>
    //       <Text style={styles.box4_row1}>Perciptitation</Text>
    //       <Text style={styles.box4_row2}>{weatrerData.precip_mm} mm</Text>
    //     </View>
    //   </View>

    //   <View style={styles.box5}>
    //     <View style={styles.box4_col1}>
    //       <Text style={styles.box4_row1}>Sunset</Text>
    //       <Text style={styles.box4_row2}>{weatrerData.sunset}</Text>
    //     </View>
    //     <View style={styles.box4_col1}>
    //       <Text style={styles.box4_row1}>Presure</Text>
    //       <Text style={styles.box4_row2}>{weatrerData.pressure_mb} mb</Text>
    //     </View>
    //     <View style={styles.box4_col1}>
    //       <Text style={styles.box4_row1}>Humidity</Text>
    //       <Text style={styles.box4_row2}>{weatrerData.humidity} %</Text>
    //     </View>
    //   </View>

    //   <Pressable
    //     style={{marginTop: 20}}
    //     onPress={() => navigation.navigate('three')}>
    //     <Image
    //       source={require('../asects/icons/up-arrow.png')}
    //       style={styles.navbtn}
    //     />
    //   </Pressable>
    // </LinearGradient>
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
  box2_col1: {
    width: '55%',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10,
  },
  box2_row3_img: {height: 17, width: 17, tintColor: '#FFFFFF'},
  hr_box: {display: 'flex', flexDirection: 'row', gap: 20},
  cityname: {
    fontSize: 30,
    color: '#FFFFFF',
    width: '100%',
    textAlign: 'center',
    // overflow: 'scroll',
  },
  contry: {color: '#d1e0e0'},
  bigh: {fontSize: 75, color: '#FFFFFF'},
  feels: {color: '#d1e0e0'},
  box2_row3: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    gap: 10,
  },
  box2_row3_col: {display: 'flex', flexDirection: 'row', gap: 5},
  box2_img: {width: '45%', height: '40%', alignItems: 'center'},
  box3: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 33,
    textAlign: 'center',
    margin: 22,
  },
  hr_box_in: {display: 'flex', gap: 10, padding: 20},
  hr_timing: {color: '#d1e0e0'},
  hr_data: {color: '#FFFFFF', fontSize: 20},
  box4: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: 30,
    gap: 20,
    justifyContent: 'space-evenly',
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
    // borderColor: '#FFFFFF'
  },
  box1: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10,
    margin: 10,
  },
  box4_col1: {display: 'flex', gap: 10},
  box4_row1: {color: '#d1e0e0'},
  box4_row2: {fontSize: 22, color: '#FFFFFF'},
  box5: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: 30,
    gap: 20,
    justifyContent: 'space-evenly',
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
    marginTop: 10,
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
  navbtn: {
    height: 25,
    width: 30,
    tintColor: '#d1e0e0',
    alignSelf: 'center',
  },
});
