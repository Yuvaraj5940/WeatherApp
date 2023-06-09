import React from 'react'
import {
    View,
    Text,
    StyleSheet,
    FlatList,
  } from 'react-native';

const Hourlydata = ({props}) => {
  return (
    <>
        <View style={styles.hr_box}>
            {
              <FlatList
                data={props.HRS}
                horizontal
                showsHorizontalScrollIndicator={false}
                renderItem={({item}) => (
                  <View style={styles.hr_box_in}>
                    <Text style={styles.hr_timing}>{item.time}</Text>
                    <Text style={styles.hr_data}>
                      {props.active ? item.deg_f : item.deg} &deg;
                    </Text>
                  </View>
                )}
              />
            }
          </View>
    </>
  )
}

export default Hourlydata
const styles=StyleSheet.create({
    hr_box: {display: 'flex', flexDirection: 'row', gap: 20},
    hr_box_in: {display: 'flex', gap: 10, padding: 20},
    hr_timing: {color: '#d1e0e0'},
    hr_data: {color: '#FFFFFF', fontSize: 20},
})