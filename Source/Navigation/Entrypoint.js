import React from 'react';
import AppStackTabNavigator from './AppStackNavigator';
import PreLoginStackNavigator from './PreLoginStackNavigator';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SplashScreen from '../Screens/SplashScreen';
const Stack = createNativeStackNavigator();

const Entrypoint = props => {
  const {isAnonymous} = props;
  console.log(isAnonymous);
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name={'SplashScreen'} component={SplashScreen} />
        <Stack.Screen
          name={'PreLoginStackNavigator'}
          component={PreLoginStackNavigator}
        />
        <Stack.Screen
          name={'AppStackTabNavigator'}
          component={AppStackTabNavigator}
        />
        {/* <Stack.Screen name={'InitializeScreen'} component={InitializeScreen} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Entrypoint;
