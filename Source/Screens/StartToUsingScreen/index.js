import React from 'react';
import {View, Text, SafeAreaView} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import MMStandarHeader from '../../Components/UI/MMStandartHeader';

function StartUsingScreen(props) {
  const {navigation} = props;
  return (
    <LinearGradient
      colors={['white', '#ced7ea', '#7189ba']}
      style={{
        flex: 1,
      }}>
      <SafeAreaView>
        <MMStandarHeader
          navigation={navigation}
          backButton
          headerMiddle={`Let's Start`}
          navigateToProfileStack={() =>
            navigation.navigate('ProfileStackNavigator')
          }
        />
        <View>
          <Text>StartScreen</Text>
        </View>
      </SafeAreaView>
    </LinearGradient>
  );
}

export default StartUsingScreen;
