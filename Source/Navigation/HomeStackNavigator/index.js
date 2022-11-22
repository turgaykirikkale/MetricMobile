import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '../../Screens/HomeScreen';
import WalletScreen from '../../Screens/WalletScreen';
import TradeScreen from '../../Screens/TradeScreen';
import DepositScreen from '../../Screens/DepositScreen';
import WithdrawScreen from '../../Screens/WithdrawScreen';
import ProfileStackNavigator from '../ProfileStackNavigator';
import {View} from 'react-native';

const HomeStack = createNativeStackNavigator();

const HomeStackTabNavigator = props => {
  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <HomeStack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <HomeStack.Screen name={'HomeScreen'} component={HomeScreen} />
        <HomeStack.Screen name={'WalletScreen'} component={WalletScreen} />
        <HomeStack.Screen name={'TradeScreen'} component={TradeScreen} />
        <HomeStack.Screen name={'DepositScreen'} component={DepositScreen} />
        <HomeStack.Screen name={'WithdrawScreen'} component={WithdrawScreen} />
        <HomeStack.Screen
          name={'ProfileStackNavigator'}
          component={ProfileStackNavigator}
        />
      </HomeStack.Navigator>
    </View>
  );
};

export default HomeStackTabNavigator;
