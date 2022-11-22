import React, {useEffect, useState} from 'react';
import {View} from 'react-native';
import Lottie from 'lottie-react-native';
import {getDataFromStorage} from '../../Utils/Storage';
import {CommonActions} from '@react-navigation/native';
import {setAuthTokenToHeader} from '../../Service';
const SplashScreen = props => {
  const [authToken, setAuthToken] = useState(false);
  const {navigation} = props;

  const type = props.route.params?.type;
  useEffect(() => {
    async function fetchMyAPI() {
      let incomingValue = await getDataFromStorage('Login');

      setAuthToken(incomingValue);
      setAuthTokenToHeader(incomingValue);
    }
    fetchMyAPI();
  });
  const fromPages = async () => {
    // let incomingToken = await getDataFromStorage('Token');

    if (authToken) {
      navigation.dispatch(
        CommonActions.reset({
          index: 1,
          routes: [{name: 'AppStackTabNavigator'}],
        }),
      );
    } else {
      navigation.dispatch(
        CommonActions.reset({
          index: 1,
          routes: [{name: 'PreLoginStackNavigator'}],
        }),
      );
    }
  };

  const initiliaze = async () => {
    // let incomingToken = await getDataFromStorage('Token');

    if (authToken) {
      navigation.navigate('AppStackTabNavigator');
    } else {
      navigation.navigate('PreLoginStackNavigator');
    }
  };

  console.log('authToken', authToken);
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#1E98D4',
      }}>
      <Lottie
        source={
          type === 1
            ? require('../../Assets/Splash/circular-loader.json')
            : require('../../Assets/Splash/splash.json')
        }
        autoPlay
        loop={false}
        speed={0.8}
        onAnimationFinish={type === 1 ? () => fromPages() : () => initiliaze()}
      />
    </View>
  );
};

export default SplashScreen;
