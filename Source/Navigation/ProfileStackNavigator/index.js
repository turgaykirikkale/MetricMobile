import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {View} from 'react-native';
import ProfileScreen from '../../Screens/ProfileScreen';
import AccountScreen from '../../Screens/AccountScreen';

const ProfileStack = createNativeStackNavigator();

const ProfileStackNavigator = props => {
  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <ProfileStack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <ProfileStack.Screen name={'ProfileScreen'} component={ProfileScreen} />
        <ProfileStack.Screen name={'AccountScreen'} component={AccountScreen} />
      </ProfileStack.Navigator>
    </View>
  );
};

export default ProfileStackNavigator;
