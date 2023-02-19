import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '../../Screens/HomeScreen';
import WalletScreen from '../../Screens/WalletScreen';
import TradeScreen from '../../Screens/TradeScreen';
import DepositScreen from '../../Screens/DepositScreen';
import WithdrawScreen from '../../Screens/WithdrawScreen';
import StartUsingScreen from '../../Screens/StartToUsingScreen';
import ProfileStackNavigator from '../ProfileStackNavigator';
import {View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const HomeStack = createNativeStackNavigator();

const HomeStackTabNavigator = props => {
  return (
    <LinearGradient
      colors={['white', '#ced7ea', '#7189ba']}
      style={{
        flex: 1,
      }}>
      <View style={{flex: 1}}>
        <HomeStack.Navigator
          screenOptions={{
            headerShown: false,
          }}>
          <HomeStack.Screen name={'HomeScreen'} component={HomeScreen} />
          <HomeStack.Screen name={'WalletScreen'} component={WalletScreen} />
          <HomeStack.Screen name={'TradeScreen'} component={TradeScreen} />
          <HomeStack.Screen name={'DepositScreen'} component={DepositScreen} />
          <HomeStack.Screen
            name={'WithdrawScreen'}
            component={WithdrawScreen}
          />
          <HomeStack.Screen
            name={'StartUsingScreen'}
            component={StartUsingScreen}
          />
          <HomeStack.Screen
            name={'ProfileStackNavigator'}
            component={ProfileStackNavigator}
          />
        </HomeStack.Navigator>
      </View>
    </LinearGradient>
  );
};

export default HomeStackTabNavigator;
