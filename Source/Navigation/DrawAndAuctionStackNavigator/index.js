import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import DrawAndAuctionScreen from '../../Screens/DrawAndAuctionScreen';
import WalletScreen from '../../Screens/WalletScreen';
import DrawScreenDetail from '../../Screens/DrawScreenDetail';
import AuctionDetailScreen from '../../Screens/AuctionDetailScreen';
import ProfileStackNavigator from '../ProfileStackNavigator';
import {View} from 'react-native';

const DrawStack = createNativeStackNavigator();

const DrawStackTabNavigator = props => {
  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
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
    </View>
  );
};

export default DrawStackTabNavigator;
