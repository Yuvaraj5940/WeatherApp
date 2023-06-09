import React from 'react';
import {
    View,
    Text,
    StyleSheet,
  } from 'react-native';

const RestData = ({props}) => {
  return (
    <>
         <View style={styles.box4}>
            <View style={styles.box4_col1}>
              <Text style={styles.box4_row1}>Sunrise</Text>
              <Text style={styles.box4_row2}>{props.sunrice}</Text>
            </View>
            <View style={styles.box4_col1}>
              <Text style={styles.box4_row1}>Wind</Text>
              <Text style={styles.box4_row2}>{props.wind} Km/h</Text>
            </View>
            <View style={styles.box4_col1}>
              <Text style={styles.box4_row1}>Perciptitation</Text>
              <Text style={styles.box4_row2}>{props.preci} mm</Text>
            </View>
          </View>

          <View style={styles.box4}>
            <View style={styles.box4_col1}>
              <Text style={styles.box4_row1}>Sunset</Text>
              <Text style={styles.box4_row2}>{props.sunset}</Text>
            </View>
            <View style={styles.box4_col1}>
              <Text style={styles.box4_row1}>Presure</Text>
              <Text style={styles.box4_row2}>{props.presur} mb</Text>
            </View>
            <View style={styles.box4_col1}>
              <Text style={styles.box4_row1}>Humidity</Text>
              <Text style={styles.box4_row2}>{props.humidity} %</Text>
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
      box4_col1: {display: 'flex', gap: 10},
  box4_row1: {color: '#d1e0e0'},
  box4_row2: {fontSize: 22, color: '#FFFFFF'},
})