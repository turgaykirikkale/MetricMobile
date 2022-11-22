import React from 'react';
import {SafeAreaView, View, Text, ScrollView} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import MMStandarHeader from '../../Components/UI/MMStandartHeader';
import QRCode from 'react-native-qrcode-svg';
import {FlexibleDesigns} from '../../Utils/FlexibleDesign';
import MMButton from '../../Components/UI/MMButton';
const DepositScreen = props => {
  const coin = props?.route?.params?.item;
  const flexDirection = FlexibleDesigns();
  const {navigation} = props;
  return (
    <LinearGradient
      colors={['white', '#ced7ea', '#7189ba']}
      style={{
        flex: 1,
      }}>
      <SafeAreaView style={{flex: 1}}>
        <MMStandarHeader
          navigateToProfileStack={() =>
            navigation.navigate('ProfileStackNavigator')
          }
          navigation={navigation}
          backButton
          headerMiddle={coin?.Name}
        />
        <ScrollView>
          <View style={{marginVertical: 10}}>
            <Text
              style={{
                textAlign: 'center',
                color: '#d34c55',
                fontWeight: '400',
              }}>{`SOLANA ağı dışında yatırılan ${coin?.Name} kaybolacaktır.`}</Text>
          </View>
          <View style={{alignItems: 'center', paddingTop: 10}}>
            <QRCode
              value={coin?.adress}
              size={flexDirection.windowWidth / 1.5}
            />
            <Text style={{marginVertical: 10, fontWeight: '200'}}>
              You can scan for your adress
            </Text>
          </View>
          <View style={{marginVertical: 10}}>
            <Text
              style={{
                fontWeight: 'bold',
                color: '#50646d',
                marginLeft: 8,
                marginBottom: 5,
              }}>
              Adress
            </Text>
            <Text
              style={{
                textAlign: 'center',
                backgroundColor: 'white',
                paddingVertical: 10,
                fontWeight: '500',
                color: '#404142',
              }}>
              {coin?.adress}
            </Text>
          </View>
          <View
            style={{flexDirection: 'row', marginHorizontal: 10, marginTop: 10}}>
            <MMButton
              text={'Coppy Adress'}
              containerStyle={{
                flex: 1,
                backgroundColor: '#238636',
                paddingVertical: 10,
                alignItems: 'center',
                marginRight: 5,
                borderRadius: 6,
              }}
              textStyle={{
                color: '#ced7ea',
                fontWeight: '500',
                letterSpacing: 0.8,
              }}
            />
            <MMButton
              text={'History'}
              containerStyle={{
                flex: 1,
                backgroundColor: '#238636',
                paddingVertical: 10,
                alignItems: 'center',
                marginLeft: 5,
                borderRadius: 6,
              }}
              textStyle={{
                color: '#ced7ea',
                fontWeight: '500',
                letterSpacing: 0.8,
              }}
            />
          </View>
        </ScrollView>
      </SafeAreaView>
    </LinearGradient>
  );
};

export default DepositScreen;
