import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import DrawAndAuctionScreen from '../../Screens/DrawAndAuctionScreen';
import WalletScreen from '../../Screens/WalletScreen';
import DrawScreenDetail from '../../Screens/DrawScreenDetail';
import AuctionDetailScreen from '../../Screens/AuctionDetailScreen';
import ProfileStackNavigator from '../ProfileStackNavigator';
import {View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
const DrawStack = createNativeStackNavigator();

const DrawStackTabNavigator = props => {
  return (
    <LinearGradient
      colors={['white', '#ced7ea', '#7189ba']}
      style={{
        flex: 1,
      }}>
      <DrawStack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <DrawStack.Screen
          name={'DrawAndAuctionScreen'}
          component={DrawAndAuctionScreen}
        />
        <DrawStack.Screen name={'WalletScreen'} component={WalletScreen} />
        <DrawStack.Screen
          name={'DrawScreenDetail'}
          component={DrawScreenDetail}
        />
        <DrawStack.Screen
          name={'AuctionDetailScreen'}
          component={AuctionDetailScreen}
        />
        <DrawStack.Screen
          name={'ProfileStackNavigator'}
          component={ProfileStackNavigator}
        />
      </DrawStack.Navigator>
    </LinearGradient>
  );
};

export default DrawStackTabNavigator;
