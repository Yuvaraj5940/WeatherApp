import React,{useContext,useState} from 'react'
import {
    View,
    Text,
    StyleSheet,
    FlatList,
  } from 'react-native';
import { WeatherContext } from './sreens/context';


const Hourlydata = () => {
  const {Loadproduct, active} =  useContext(WeatherContext);
  // console.log(Loadproduct)
  const [HRS, setHRS] = useState([
    {time: '12 AM'},{time: '1 AM'},{time: '2 AM'},{time: '3 AM'},{time: '4 AM'},{time: '5 AM'},{time: '6 AM'},{time: '7 AM'},{time: '8 AM'},
    { time: '9 AM'},{time: '10 AM'}, {  time: '11 AM'},{time: '12 PM'},{time: '1 PM'},{time: '2 PM'},
    {time: '3 PM'},{time: '4 PM'},{time: '5 PM'},{time: '6 PM'},{time: '7 PM'},{time: '8 PM'},{time: '9 PM'},{time: '10 PM'},{time: '11 PM'},
  ]); 
  return (
    <>
        <View style={styles.hr_box}>
            {
              <FlatList
                data={HRS}
                horizontal
                showsHorizontalScrollIndicator={false}
                renderItem={({item, index}) => (
                  <View style={styles.hr_box_in}>
                    <Text style={styles.hr_timing}>{item.time}</Text>
                    <Text style={styles.hr_data}>
                      {active ? Loadproduct?.forecast?.forecastday[0]?.hour[index]?.temp_f : Loadproduct?.forecast?.forecastday[0]?.hour[index]?.temp_c} &deg;
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