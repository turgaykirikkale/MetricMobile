import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {View} from 'react-native';
import LoginScreen from '../../Screens/LoginScreen';

const PreLoginStack = createNativeStackNavigator();

const PreLoginStackNavigator = props => {
  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <PreLoginStack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <PreLoginStack.Screen name={'LoginScreen'} component={LoginScreen} />
      </PreLoginStack.Navigator>
    </View>
  );
};

export default PreLoginStackNavigator;
