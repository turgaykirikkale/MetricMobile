import React, {useEffect, useState} from 'react';
import {View, ScrollView, SafeAreaView} from 'react-native';
import MMStandarHeader from '../../Components/UI/MMStandartHeader';
import LinearGradient from 'react-native-linear-gradient';
import MMButton from '../../Components/UI/MMButton';
import MMHomeScreenItemShower from '../../Components/Composite/MMHomeScreenItemShower';
import MMService from '../../Service';

const HomeScreen = props => {
  const {navigation} = props;

  useEffect(() => {
    MMService.CustomerInfo()
      .then(res => {
        console.log('CustomerInFoRespo', res);
      })
      .catch(error => {
        console.log('CustormerInFoErro', error);
      });
  }, []);

  const data = [
    {
      NFT: 'DRIVER',
      selling: false,
      code: '#1231832',
      image: require('../../Assets/NFTImages/car2.jpeg'),
      price: 59.69,
      type: 1,
      typeName: 'SUV',
      quality: 1,
      qualityName: 'BRONZE',
      level: 2,
      attributes: [
        {title: 'BATTERY', Value: 140},
        {title: 'POWER', Value: 1.6},
        {title: 'PLAK', Value: 2.8},
        {title: 'SERVICE', Value: 80},
      ],
    },
    {
      NFT: 'PASSENGER',
      selling: false,
      code: '#10373',
      image: require('../../Assets/PersonNFTs/Person1NFT.jpeg'),
      price: 98.6,
      type: 0,
      typeName: 'TITAN',
      quality: 0,
      qualityName: 'IRON',
      level: 34,
      attributes: [
        {title: 'PRODUCTIVITY', Value: 140},
        {title: 'IMPROVEMENT', Value: 1.6},
        {title: 'CHANCE', Value: 2.8},
        {title: 'RESTORE', Value: 80},
      ],
    },
  ];
  const NFTPiece = [
    {
      code: '#13303753',
      type: 0,
      typeName: 'PRODUCTIVITY',
      price: 0.8998,
      level: 2,
      image: require('../../Assets/NFTPieceImages/seat.jpeg'),
      attributes: [
        {title: 'EXTRA BASE POINT', Value: '8'},
        {title: 'EXTRRA BASE RATIO', Value: '%10'},
      ],
      NFT: 'PASSANGER',
    },
    {
      code: '#13303753',
      type: 1,
      typeName: 'IMPROVEMENT',
      price: 0.8998,
      level: 3,
      image: require('../../Assets/NFTPieceImages/seat.jpeg'),
      attributes: [
        {title: 'EXTRA BASE POINT', Value: '8'},
        {title: 'EXTRRA BASE RATIO', Value: '%10'},
      ],
      NFT: 'PASSANGER',
    },
    {
      code: '#13303753',
      type: 0, // BATTERY
      typeName: 'BATTERY',
      price: 0.8118,
      level: 0,
      image: require('../../Assets/NFTPieceImages/tire.jpeg'),
      attributes: [
        {title: 'EXTRA BASE', Value: '8'},
        {title: 'EXTRRA BASE RATIO', Value: '%10'},
      ],
      NFT: 'DRIVER',
    },
    {
      code: '#13303753',
      type: 1, // POWER
      typeName: 'POWER',
      price: 0.8,
      level: 1,
      image: require('../../Assets/NFTPieceImages/nitro.jpeg'),
      attributes: [
        {title: 'EXTRA BASE', Value: '8'},
        {title: 'EXTRRA BASE RATIO', Value: '%10'},
      ],
      NFT: 'DRIVER',
    },
  ];
  const [selectedItem, setSelectedItem] = useState(data[0]);
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
          onPressWalletButtons={() => navigation.navigate('WalletScreen')}
        />
        <ScrollView contentContainerStyle={{flexGrow: 1}}>
          <View style={{paddingBottom: 60, marginTop: 10}}>
            <MMHomeScreenItemShower
              data={data}
              selectedItem={item => {
                setSelectedItem(item);
              }}
            />
          </View>
        </ScrollView>
        <MMButton
          onPress={() => console.log(selectedItem)}
          text={'START'}
          containerStyle={{
            backgroundColor: '#238636',
            alignItems: 'center',
            marginVertical: 5,
          }}
          textStyle={{
            marginVertical: 10,
            color: 'white',
            letterSpacing: 1.3,
            fontWeight: 'bold',
          }}
        />
      </SafeAreaView>
    </LinearGradient>
  );
};

export default HomeScreen;
