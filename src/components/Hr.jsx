import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    Image,
  } from 'react-native';

const Hr = () => {
  return (
    <>
        <View style={styles.hr} />

    </>
  )
}

export default Hr;
const styles=StyleSheet.create({
    hr: {borderWidth: 0.6, borderColor: '#d1e0e0', width: '100%'},

})