import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    Image,
  } from 'react-native';

const MainData = ({Vals}) => {
  return (
    <>
        <View style={styles.box2}>
            <View style={styles.box2_col1}>
              <Text style={styles.bigh}>
                {Vals.active
                  ? Vals.temp_f
                  : Vals.temp_c}
                &deg;
              </Text>
              <Text style={styles.feels}>
                Feels Like
                {Vals.active
                  ? Vals.temp_f
                  : Vals.temp_c}
                &deg;
              </Text>
              <View style={styles.box2_row3}>
                <View style={styles.box2_row3_col}>
                  <Image
                    source={require('../asects/icons/down-arrow.png')}
                    style={styles.box2_row3_img}
                  />
                  <Text style={{color: '#FFFFFF'}}>
                    {Vals.active
                      ? Vals.min_tem_f
                      : Vals.min_tem_c}
                    &deg;
                  </Text>
                </View>
                <View style={styles.box2_row3_col}>
                  <Image
                    source={require('./asets/icons/up-arrow.png')}
                    style={styles.box2_row3_img}
                  />
                  <Text style={{color: '#FFFFFF'}}>
                    {Vals.active
                      ? Vals.max_tem_f
                      : Vals.max_tem_c}
                    &deg;
                  </Text>
                </View>
              </View>
            </View>

            <View style={styles.box2_img}>
              <Image
                style={styles.img}
                source={{uri: `https:${Vals.weather_img}`}}
              />
            </View>
        </View>
    </>
  )
}

export default MainData;
const styles=StyleSheet.create({
    box2: {
        display: 'flex',
        flexDirection: 'row',
        marginTop: 10,
      },
      box2_col1: {
        width: '55%',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 10,
      },
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
      box2_row3_img: {height: 17, width: 17, tintColor: '#FFFFFF'},
      img: {
        // flex:1,
        width: 140,
        height: 150,
        justifyContent: 'center',
        alignSelf: 'center',
      },
})