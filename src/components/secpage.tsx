/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Image,
  Pressable,
  FlatList,
  Modal,
} from 'react-native';
// import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const MainPage = () => {
  const [active, setActive] = useState(false);
  const date = Date().toString().split(' ');
  const [name, setName] = useState('Bangalore');
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
  return (
    <View style={styles.container}>
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
        <Text style={{fontSize: 30, color: '#FFFFFF'}}>{name}</Text>
        <Text style={{color: '#d1e0e0'}}>India</Text>
      </View>

      <View style={styles.box2}>
        <View
          style={{
            width: '50%',
            justifyContent: 'center',
            alignItems: 'center',
            gap: 10,
          }}>
          <Text style={{fontSize: 80, color: '#FFFFFF'}}>29&deg;</Text>
          <Text style={{color: '#d1e0e0'}}>Feels Like 29.9&deg;</Text>
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
              <Text style={{color: '#FFFFFF'}}>22.6&deg;</Text>
            </View>
            <View style={{display: 'flex', flexDirection: 'row', gap: 5}}>
              <Image
                source={require('../asects/icons/up-arrow.png')}
                style={{height: 17, width: 17, tintColor: '#FFFFFF'}}
              />
              <Text style={{color: '#FFFFFF'}}>36.8&deg;</Text>
            </View>
          </View>
        </View>

        <View style={{width: '45%', height: '40%', alignItems: 'center'}}>
          <Image
            source={require('../asects/icons/partly-cloudy.png')}
            style={styles.img}
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
        Partly cloudy
      </Text>

      <View style={{borderWidth: 0.5, borderColor: '#d1e0e0', width: '100%'}} />

      <View style={{display: 'flex', flexDirection: 'row', gap: 20}}>
        {
          <FlatList
            data={hrs}
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

      <Pressable style={{marginTop: 20}} onPress={() => setActive(!active)}>
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

      <Modal transparent={true} visible={active} animationType="slide">
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
            <Text style={{fontSize: 30, color: '#FFFFFF'}}>{name}</Text>
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
      </Modal>
    </View>
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
    height: 120,
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
