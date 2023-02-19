import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ProfileScreen from '../../Screens/ProfileScreen';
import AccountScreen from '../../Screens/AccountScreen';
import LinearGradient from 'react-native-linear-gradient';

const ProfileStack = createNativeStackNavigator();

const ProfileStackNavigator = props => {
  return (
    <LinearGradient
      colors={['#7189ba', '#ced7ea', '#7189ba']}
      style={{
        flex: 1,
      }}>
      <ProfileStack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <ProfileStack.Screen name={'ProfileScreen'} component={ProfileScreen} />
        <ProfileStack.Screen name={'AccountScreen'} component={AccountScreen} />
      </ProfileStack.Navigator>
    </LinearGradient>
  );
};

export default ProfileStackNavigator;
