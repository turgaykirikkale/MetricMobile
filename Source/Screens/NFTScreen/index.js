import React, {useState, useEffect} from 'react';
import {View, Text, SafeAreaView} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import MMStandarHeader from '../../Components/UI/MMStandartHeader';
import MMTabView from '../../Components/UI/MMTabView';
import MMSubTabView from '../../Components/Composite/MMSubTabView';
import MMMarketItem from '../../Components/Composite/MMMarketItem';
import MMPieceItem from '../../Components/Composite/MMPieceItem';
import MMMarketOtherItems from '../../Components/Composite/MMMarketsOthersItems';

//LEVEL ARTTIRIM SÜRESİ qualitysi düşüklerde daha az yukseklerde daha fazla olacak.
const NFTScreen = props => {
  const {navigation} = props;
  const [tabIndex, setTabIndex] = useState(0);
  const [subTabIndex, setSubTabIndex] = useState(0);

  const tabItems = [
    {
      index: 0,
      name: 'NFT',
    },
    {
      index: 1,
      name: 'NFT PIECE',
    },
    {
      index: 2,
      name: 'OTHERS',
    },
  ];
  const SubTabItems = [
    {
      index: 0,
      name: tabIndex === 2 ? 'GENERAL' : 'PASSANGER',
    },
    {
      index: 1,
      name: tabIndex === 2 ? 'TROVE' : 'DRIVER',
    },
  ];
  useEffect(() => {}, []);
  const CarPiece = [
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
  const PassengerPiece = [
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
  ];
  const setSubIndexControl = index => {
    setSubTabIndex(index);
  };
  const Cars = [
    {
      NFT: 'DRIVER',
      selling: false,
      code: '#1233213',
      image: require('../../Assets/NFTImages/car1.jpeg'),
      price: 12.6,
      type: 0,
      typeName: 'STANDART',
      quality: 0,
      qualityName: 'IRON',
      level: 0,
      attributes: [
        {title: 'BATTERY', Value: 140},
        {title: 'POWER', Value: 1.6},
        {title: 'PLAK', Value: 2.8},
        {title: 'SERVICE', Value: 80},
      ],
    },
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
  ];
  const Passenger = [
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
    {
      NFT: 'PASSENGER',
      selling: false,
      code: '#1032753',
      image: require('../../Assets/PersonNFTs/Person2NFT.png'),
      price: 98.6,
      type: 1,
      typeName: 'PARAGON',
      quality: 1,
      qualityName: 'BRONZE',
      level: 129,
      attributes: [
        {title: 'PRODUCTIVITY', Value: 140},
        {title: 'IMPROVEMENT', Value: 1.6},
        {title: 'CHANCE', Value: 2.8},
        {title: 'RESTORE', Value: 80},
      ],
    },
  ];
  const Troves = [
    {
      code: '#1235',
      name: 'MYSTİC BOX',
      quality: 3,
      qualityName: 'GOLD',
      image: require('../../Assets/OtherNFTImages/kasa.webp'),
      price: 0.98,
    },
    {
      code: '#1235',
      name: 'NFT BOX',
      quality: 4,
      qualityName: 'PLATINUM',
      image: require('../../Assets/OtherNFTImages/kasa.webp'),
      price: 0.98,
    },
  ];
  const PublicItems = [
    {
      code: '#1235',
      name: 'ENERGY CARD',
      value: 10,
      quality: 0,
      qualityName: 'IRON',
      image: require('../../Assets/OtherNFTImages/enerji.jpeg'),
      price: 0.98,
    },

    {
      code: '#1235',
      name: 'DRAW CARD',
      value: 16,
      quality: 3,
      qualityName: 'GOLD',
      image: require('../../Assets/OtherNFTImages/luck.jpeg'),
      price: 0.98,
    },
  ];
  return (
    <LinearGradient
      colors={['white', '#ced7ea', '#7189ba']}
      style={{
        flex: 1,
      }}>
      <SafeAreaView style={{flex: 1}}>
        <MMStandarHeader
          onPressWalletButtons={() => navigation.navigate('WalletScreen')}
          navigateToProfileStack={() =>
            navigation.navigate('ProfileStackNavigator')
          }
        />
        <MMTabView
          tabIndex={tabIndex}
          tabItems={tabItems}
          setTabIndex={value => setTabIndex(value)}
        />
        <MMSubTabView
          subTabItems={SubTabItems}
          subTabIndex={subTabIndex}
          setSubTabIndex={index => setSubIndexControl(index)}
        />
        {tabIndex === 0 ? (
          <MMMarketItem
            tabType={1} //ship olun type for MMMarketItem
            onPressItem={item =>
              navigation.navigate('NFTItemDetail', {
                type: 0,
                item: item,
              })
            }
            NFTData={subTabIndex === 0 ? Passenger : Cars}
          />
        ) : null}
        {tabIndex === 1 ? (
          <MMPieceItem
            tabType={1} //ship olun type for MMMarketItem
            onPressItem={item =>
              navigation.navigate('NFTItemDetail', {
                type: 1,
                item: item,
              })
            }
            NFTData={subTabIndex === 0 ? PassengerPiece : CarPiece}
          />
        ) : null}
        {tabIndex === 2 ? (
          <MMMarketOtherItems
            tabType={1}
            data={subTabIndex === 0 ? PublicItems : Troves}
          />
        ) : null}
      </SafeAreaView>
    </LinearGradient>
  );
};

export default NFTScreen;
