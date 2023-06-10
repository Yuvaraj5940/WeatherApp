import React, { useContext } from 'react';
import {
    View,
    Text,
    FlatList,
    StyleSheet,
  } from 'react-native';
import { WeatherContext } from './sreens/context';

const RestData = () => {
  const {
    Loadproduct,
    active,
  } = useContext(WeatherContext);
  const FirstRow=['Sunrice','Wind','Perciptitation']
  const DATA = [
{title:'Sunrice',data: `${Loadproduct?.forecast?.forecastday[0]?.astro?.sunrise}`},
{title:'Wind',data: `${Loadproduct?.current?.wind_kph}`},
{title:'Perciptitation',data: `${Loadproduct?.current?.precip_mm}`},
  ];

  


  return (
    <>
         <View style={styles.box4}>
            <View style={styles.box4_col1}>
              <Text style={styles.box4_row1}>Sunrise</Text>
              <Text style={styles.box4_row2}>{Loadproduct?.forecast?.forecastday[0]?.astro?.sunrise}</Text>
            </View>
            <View style={styles.box4_col1}>
              <Text style={styles.box4_row1}>Wind</Text>
              <Text style={styles.box4_row2}>{Loadproduct?.current?.wind_kph} Km/h</Text>
            </View>
            <View style={styles.box4_col1}>
              <Text style={styles.box4_row1}>Perciptitation</Text>
              <Text style={styles.box4_row2}>{Loadproduct?.current?.precip_mm} mm</Text>
            </View>




          </View>

          <View style={styles.box4}>
            <View style={styles.box4_col1}>
              <Text style={styles.box4_row1}>Sunset</Text>
              <Text style={styles.box4_row2}>{Loadproduct?.forecast?.forecastday[0]?.astro?.sunset}</Text>
            </View>
            <View style={styles.box4_col1}>
              <Text style={styles.box4_row1}>Presure</Text>
              <Text style={styles.box4_row2}>{Loadproduct.current.pressure_mb} mb</Text>
            </View>
            <View style={styles.box4_col1}>
              <Text style={styles.box4_row1}>Humidity</Text>
              <Text style={styles.box4_row2}>{Loadproduct.current.humidity} %</Text>
            </View>
          </View>
    </>
  )
}

export default RestData
const styles=StyleSheet.create({
    box4: {
        display: 'flex',
        flexDirection: 'row',
        marginTop: 30,
        gap: 20,
        justifyContent: 'space-evenly',
      },
      box4_col1: {display: 'flex', paddingLeft:30 },
  box4_row1: {color: '#d1e0e0'},
  box4_row2: {fontSize: 22, color: '#FFFFFF'},
})