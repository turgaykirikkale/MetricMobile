import _ from 'lodash';
import React from 'react';
import {SafeAreaView, ScrollView, Text} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import LinearGradient from 'react-native-linear-gradient';
import MMButton from '../../Components/UI/MMButton';
import MMStandarHeader from '../../Components/UI/MMStandartHeader';
import {FlexibleDesigns} from '../../Utils/FlexibleDesign';
import {removeDataFromStorage} from '../../Utils/Storage';
import {deleteAuthorizationHeader} from '../../Service';
const ProfileScreen = props => {
  const {navigation} = props;
  const FlexibleDesign = FlexibleDesigns();

  const ProfileData = [
    {
      title: 'WHITEPAPER',
      value: 0,
    },
    {
      title: 'LITEPAPER',
      value: 1,
    },
    {
      title: 'Account',
      value: 2,
    },
    {
      title: 'Notification',
      value: 3,
    },
    {
      title: 'Security',
      value: 4,
    },
    {
      title: 'Language',
      value: 5,
    },
    {
      title: 'Codes And References', //işlem ücretleri belirli bir seviyeye ulaştıgında code verilecek.
      value: 6,
    },
    {
      title: 'Terms of Use',
      value: 7,
    },
    {
      title: 'Customer Service',
      value: 8,
    },
    {
      title: 'Delete Account',
      value: 8,
    },
  ];
  const controlPressItem = value => {
    switch (value) {
      case 0:
        return alert(value);
      case 1:
        return alert(value);
      case 2:
        return navigation.navigate('AccountScreen');
      case 3:
        return alert(value);
      case 4:
        return alert(value);
      case 5:
        return alert(value);
      case 6:
        return alert(value);
      case 7:
        return alert(value);
      case 8:
        return alert(value);

      default:
        break;
    }
  };
  const textControl = value => {
    switch (value) {
      case 0:
        return '';
      case 1:
        return '';
      case 2:
        return '';
      case 3:
        return '';
      case 4:
        return '';
      case 5:
        return '';
      case 6:
        return <Text style={{color: 'green', fontWeight: 'bold'}}>1</Text>;
      case 7:
        return '';
      case 8:
        return '';
      default:
        break;
    }
  };

  const logOut = async () => {
    const value = await removeDataFromStorage('Login');
    deleteAuthorizationHeader();
    if (value) {
      console.log('VALUEEE', value);
      navigation.navigate('SplashScreen', {type: 1});
    } else {
      console.log('ValueYok');
    }
  };
  return (
    <LinearGradient
      colors={['white', '#ced7ea', '#7189ba']}
      style={{
        flex: 1,
      }}>
      <SafeAreaView style={{flex: 1}}>
        <MMStandarHeader navigation={navigation} backButton />
        <ScrollView>
          {_.map(ProfileData, item => {
            return (
              <TouchableOpacity
                onPress={() => controlPressItem(item.value)}
                style={{
                  flexDirection: 'row',
                  backgroundColor:
                    item.value === 0 || item.value === 1 ? '#ced7ea' : 'white',
                  marginVertical: 10,
                  paddingHorizontal: 10,
                  marginHorizontal: 10,
                  paddingVertical: 10,
                  borderRadius: 6,
                  shadowColor: FlexibleDesign.shadowColor,
                  shadowOffset: {
                    width: 5,
                    height: 5,
                  },
                  shadowOpacity: 0.5,
                  shadowRadius: 5,
                  elevation: 20,
                  justifyContent: 'space-between',
                }}>
                <Text
                  style={{
                    fontSize: FlexibleDesign.fontSize + 2,
                    letterSpacing: 0.7,
                    fontWeight:
                      item.value === 0 || item.value === 1 ? 'bold' : '600',
                  }}>
                  {item.title}
                </Text>
                <Text
                  style={{
                    fontSize: FlexibleDesign.fontSize + 2,
                    letterSpacing: 0.7,
                    fontWeight: '500',
                  }}>
                  {textControl(item.value)}
                </Text>
              </TouchableOpacity>
            );
          })}
          <MMButton
            onPress={() => logOut()}
            text={'Log Out'}
            textStyle={{
              color: 'white',
              letterSpacing: 0.7,
              fontSize: FlexibleDesign.fontSize + 2,
              fontWeight: '500',
            }}
            containerStyle={{
              alignItems: 'center',
              backgroundColor: '#c64141',
              marginHorizontal: 10,
              borderRadius: 6,
              paddingVertical: 10,
              marginTop: 10,
              shadowColor: FlexibleDesign.shadowColor,
              shadowOffset: {
                width: 5,
                height: 5,
              },
              shadowOpacity: 0.5,
              shadowRadius: 5,
              elevation: 20,
            }}
          />
          <Text
            style={{textAlign: 'center', marginTop: 10, letterSpacing: 0.7}}>
            Version 1.0.0
          </Text>
        </ScrollView>
      </SafeAreaView>
    </LinearGradient>
  );
};

export default ProfileScreen;
