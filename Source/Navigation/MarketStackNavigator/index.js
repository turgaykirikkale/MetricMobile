import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import MarketScreen from '../../Screens/MarketScreen';
import WalletScreen from '../../Screens/WalletScreen';
import TradeScreen from '../../Screens/TradeScreen';
import DepositScreen from '../../Screens/DepositScreen';
import WithdrawScreen from '../../Screens/WithdrawScreen';
import MarketItemBuyAndInfoScreen from '../../Screens/MarketItemBuyAndInfoScreen';
import ProfileStackNavigator from '../ProfileStackNavigator';
import {View} from 'react-native';

const MarketStack = createNativeStackNavigator();

const MarketStackTabNavigator = props => {
  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <MarketStack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <MarketStack.Screen name={'MarketScreen'} component={MarketScreen} />
        <MarketStack.Screen name={'WalletScreen'} component={WalletScreen} />
        <MarketStack.Screen name={'TradeScreen'} component={TradeScreen} />
        <MarketStack.Screen name={'DepositScreen'} component={DepositScreen} />
        <MarketStack.Screen
          name={'WithdrawScreen'}
          component={WithdrawScreen}
        />
        <MarketStack.Screen
          name={'MarketItemBuyAndInfoScreen'}
          component={MarketItemBuyAndInfoScreen}
        />
        <MarketStack.Screen
          name={'ProfileStackNavigator'}
          component={ProfileStackNavigator}
        />
      </MarketStack.Navigator>
    </View>
  );
};

export default MarketStackTabNavigator;
