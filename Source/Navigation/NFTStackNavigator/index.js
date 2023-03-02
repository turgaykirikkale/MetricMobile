import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import NFTScreen from '../../Screens/NFTScreen';
import WalletScreen from '../../Screens/WalletScreen';
import TradeScreen from '../../Screens/TradeScreen';
import DepositScreen from '../../Screens/DepositScreen';
import WithdrawScreen from '../../Screens/WithdrawScreen';
import NFTItemDetail from '../../Screens/NFTItemDetail';
import ProfileStackNavigator from '../ProfileStackNavigator';
import MarketStackTabNavigator from '../MarketStackNavigator';
import LinearGradient from 'react-native-linear-gradient';
const NFTStack = createNativeStackNavigator();

const NFTStackTabNavigator = props => {
  return (
    <LinearGradient
      colors={['#7189ba', '#ced7ea', '#7189ba']}
      style={{
        flex: 1,
      }}>
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
        <NFTStack.Screen
          name={'MarketStackTabNavigator'}
          component={MarketStackTabNavigator}
        />
      </NFTStack.Navigator>
    </LinearGradient>
  );
};

export default NFTStackTabNavigator;
