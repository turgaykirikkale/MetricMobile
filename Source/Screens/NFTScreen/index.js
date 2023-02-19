import React, {useState, useEffect} from 'react';
import {
  Image,
  View,
  Text,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import MMStandarHeader from '../../Components/UI/MMStandartHeader';
import {FlexibleDesigns} from '../../Utils/FlexibleDesign';
import MMVectorIcon from '../../Components/UI/MMVectorIcon';
import _ from 'lodash';
import MMTabView from '../../Components/UI/MMTabView';
import MMSubTabView from '../../Components/Composite/MMSubTabView';
import MMMarketItem from '../../Components/Composite/MMMarketItem';
import MMPieceItem from '../../Components/Composite/MMPieceItem';
import MMMarketOtherItems from '../../Components/Composite/MMMarketsOthersItems';
import MMPersonalStakeItem from '../../Components/Composite/MMPersonalStakeItem';
import MMNFTScreenPersonalItemControl from '../../Components/UI/MMNFTScreenPersonalItemControl';
//LEVEL ARTTIRIM SÜRESİ qualitysi düşüklerde daha az yukseklerde daha fazla olacak.

const PersonalStakeItem = [
  {
    stakeType: 1,
    NFT: 'PASSENGER',
    type: 4,
    typeName: 'HURRICANE',
    quality: 4,
    qualityName: 'PLATINUM',
    image: require('../../Assets/PersonNFTs/Person2NFT.png'),
    day: 15,
    interestRate: 2.45,
    totalAmount: 1000,
    stakedAmount: 98,
    earnedValue: 'METRX',
  },
  {
    stakeType: 0,
    coinCode: 'METRC',
    minLockAmount: 1000,
    earnedValue: 'METRC',
    totalAmount: 100000,
    stakedAmount: 50000,
    day: 1,
    interestRate: 0.45,
    image: null,
    //LOGOLAR GELECEK INFOLARI DA YAZMAK LAZIM.
  },
  {
    stakeType: 0,
    coinCode: 'USDT',
    minLockAmount: 100,
    earnedValue: 'USDT',
    totalAmount: 100000,
    stakedAmount: 20000,
    day: 500,
    interestRate: 16.4,
    image: null,
    //LOGOLAR GELECEK INFOLARI DA YAZMAK LAZIM.
  },
  {
    stakeType: 0,
    coinCode: 'USDT',
    minLockAmount: 100,
    earnedValue: 'METRC',
    totalAmount: 100000,
    stakedAmount: 50000,
    day: 1,
    interestRate: 1.2,
    image: null,
    //LOGOLAR GELECEK INFOLARI DA YAZMAK LAZIM.
  },

  {
    stakeType: 1,
    NFT: 'PASSENGER',
    type: 3,
    typeName: 'BLAZE',
    quality: 3,
    qualityName: 'GOLD',
    image: require('../../Assets/PersonNFTs/Person1NFT.jpeg'),
    day: 500,
    interestRate: 14.45,
    totalAmount: 1000,
    stakedAmount: 12,
    earnedValue: 'METRX',
  },
  {
    stakeType: 1,
    NFT: 'PASSENGER',
    type: 4,
    typeName: 'HURRICANE',
    quality: 5,
    qualityName: 'DIAMOND',
    image: require('../../Assets/PersonNFTs/Person1NFT.jpeg'),
    day: 1,
    interestRate: 0.45,
    totalAmount: 1000,
    stakedAmount: 432,
    earnedValue: 'METRX',
  },
];

const NFTScreen = props => {
  const {navigation} = props;

  const PersonalNFT = [
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

  const PersonalNFTPiece = [
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

  const PersonalComboNFTPiece = [];
  const PersonalOtherValues = [
    {
      code: '#1235',
      name: 'NFT BOX',
      quality: 4,
      qualityName: 'PLATINUM',
      image: require('../../Assets/OtherNFTImages/kasa.webp'),
      price: 0.98,
    },
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
    {
      code: '#1235',
      name: 'MYSTİC BOX',
      quality: 3,
      qualityName: 'GOLD',
      image: require('../../Assets/OtherNFTImages/kasa.webp'),
      price: 0.98,
    },
  ];

  return (
    <LinearGradient
      colors={['white', '#ced7ea', '#7189ba']}
      style={{
        flex: 1,
      }}>
      {/* <SafeAreaView style={{flex: 1}}>
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
          subTabIndex === 2 ? (
            <MMPersonalStakeItem PersonalStakeItem={PersonalStakeItem} />
          ) : (
            <MMMarketOtherItems
              tabType={1}
              data={subTabIndex === 0 ? PublicItems : Troves}
            />
          )
        ) : null}
      </SafeAreaView> */}
      <SafeAreaView style={{flex: 1}}>
        <MMStandarHeader
          onPressWalletButtons={() => navigation.navigate('WalletScreen')}
          navigateToProfileStack={() =>
            navigation.navigate('ProfileStackNavigator')
          }
        />
        <ScrollView scrollEnabled showsVerticalScrollIndicator={false}>
          <MMNFTScreenPersonalItemControl data={PersonalNFT} header={'NFT'} />
          <MMNFTScreenPersonalItemControl
            data={PersonalNFTPiece}
            header={'NFT Piece'}
          />
          <MMNFTScreenPersonalItemControl
            data={PersonalComboNFTPiece}
            header={'COMBO NFT Piece'}
          />
          <MMNFTScreenPersonalItemControl
            data={PersonalOtherValues}
            header={'Others'}
          />
          <MMNFTScreenPersonalItemControl
            data={PersonalStakeItem}
            header={'Stake'}
          />
        </ScrollView>
      </SafeAreaView>
    </LinearGradient>
  );
};

export default NFTScreen;
