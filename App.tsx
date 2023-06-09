import {View, Text} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Context from './src/components/sreens/context';
import Home from './src/components/sreens/home';
import MainPage from './src/components/sreens/secpage';
import Three from './src/components/sreens/three';
// import StackNavigator from './src/components/three';

const Stack = createStackNavigator();

const App = () => {
  return (
    <Context>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Welocome"
            component={Home}
            options={{header: () => null}}
          />
          <Stack.Screen
            name="next"
            component={MainPage}
            options={{header: () => null}}
          />
          <Stack.Screen
            name="three"
            component={Three}
            options={{header: () => null}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Context>
  );
};

export default App;
