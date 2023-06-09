import React from 'react';
import {  
    Text,
    StyleSheet,
  } from 'react-native';

const Cityname = ({props}) => {
  return (
    <>
        <Text numberOfLines={1} style={styles.cityname}>
              {props.cname}
            </Text>
            <Text style={styles.contry}>{props.cuntry}</Text>
    </>
  )
}

export default Cityname
const styles=StyleSheet.create({
    cityname: {
        fontSize: 30,
        color: '#FFFFFF',
        width: '100%',
        textAlign: 'center',
        // overflow: 'scroll',
      },
      contry: {color: '#d1e0e0'},


})