import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import NFTScreen from '../../Screens/NFTScreen';
import {View} from 'react-native';
import WalletScreen from '../../Screens/WalletScreen';
import TradeScreen from '../../Screens/TradeScreen';
import DepositScreen from '../../Screens/DepositScreen';
import WithdrawScreen from '../../Screens/WithdrawScreen';
import NFTItemDetail from '../../Screens/NFTItemDetail';
import ProfileStackNavigator from '../ProfileStackNavigator';

const NFTStack = createNativeStackNavigator();

const NFTStackTabNavigator = props => {
  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <NFTStack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <NFTStack.Screen name={'NFTScreen'} component={NFTScreen} />
        <NFTStack.Screen name={'NFTItemDetail'} component={NFTItemDetail} />
        <NFTStack.Screen name={'WalletScreen'} component={WalletScreen} />
        <NFTStack.Screen name={'TradeScreen'} component={TradeScreen} />
        <NFTStack.Screen name={'DepositScreen'} component={DepositScreen} />
        <NFTStack.Screen name={'WithdrawScreen'} component={WithdrawScreen} />
        <NFTStack.Screen
          name={'ProfileStackNavigator'}
          component={ProfileStackNavigator}
        />
      </NFTStack.Navigator>
    </View>
  );
};

export default NFTStackTabNavigator;
