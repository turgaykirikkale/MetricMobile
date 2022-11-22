import _ from 'lodash';
import React, {useState} from 'react';
import {SafeAreaView, ScrollView, Text, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import MMStandarHeader from '../../Components/UI/MMStandartHeader';
import MMDrawItems from '../../Components/Composite/MMDrawItems';
import MMTabView from '../../Components/UI/MMTabView';
import MMDrawModal from '../../Components/Composite/MMDrawModal';
import MMSubTabView from '../../Components/Composite/MMSubTabView';
import MMAuctionItems from '../../Components/Composite/MMAuctionItems';
import MMStakeItems from '../../Components/Composite/MMStakeItems';
const AuctionItems = [
  {
    ownerName: 'Turgay',
    ownerSurname: 'Kirikkale',
    endDate: '19.01.2025',
    startDate: '19.12.2021',
    lowestPrice: 100,
    coinCode: 'METRC',
    highestPrice: 10000,
    currentHighPrice: 687,
    totalPid: 10,
    NFTInfo: {
      NFT: 'DRIVER',
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
  },
  {
    ownerName: 'EZGI',
    ownerSurname: 'FLORA',
    endDate: '19.01.2025',
    startDate: '19.12.2021',
    lowestPrice: 200,
    coinCode: 'METRC',
    highestPrice: 10000,
    currentHighPrice: 587,
    totalPid: 9,
    NFTInfo: {
      NFT: 'DRIVER',
      code: '#3123',
      image: require('../../Assets/NFTImages/car4.jpeg'),
      price: 203.6,
      type: 4,
      typeName: 'TRUCKS',
      quality: 2,
      qualityName: 'SILVER',
      level: 8,
      attributes: [
        {title: 'BATTERY', Value: 140},
        {title: 'POWER', Value: 1.6},
        {title: 'PLAK', Value: 2.8},
        {title: 'SERVICE', Value: 80},
      ],
    },
  },
  {
    ownerName: 'PARIS',
    ownerSurname: 'SIMSEK',
    endDate: '19.01.2025',
    startDate: '19.12.2021',
    lowestPrice: 200,
    coinCode: 'METRC',
    highestPrice: 10000,
    currentHighPrice: 487,
    totalPid: 8,
    NFTInfo: {
      NFT: 'DRIVER',
      code: '#986886',
      image: require('../../Assets/NFTImages/car3.jpeg'),
      price: 12.6,
      type: 2,
      typeName: 'SPORT',
      quality: 0,
      qualityName: 'IRON',
      level: 10,
      attributes: [
        {title: 'BATTERY', Value: 140},
        {title: 'POWER', Value: 1.6},
        {title: 'PLAK', Value: 2.8},
        {title: 'SERVICE', Value: 80},
      ],
    },
  },
  {
    ownerName: 'LONDON',
    ownerSurname: 'PRATIC',
    endDate: '19.01.2025',
    startDate: '19.12.2021',
    lowestPrice: 200,
    coinCode: 'METRC',
    highestPrice: 10000,
    currentHighPrice: 387,
    totalPid: 7,
    NFTInfo: {
      NFT: 'PASSENGER',
      code: '#1033753',
      image: require('../../Assets/PersonNFTs/Person3NFT.jpeg'),
      price: 98.6,
      type: 3,
      typeName: 'BLAZE',
      quality: 3,
      qualityName: 'GOLD',
      level: 6,
      attributes: [
        {title: 'PRODUCTIVITY', Value: 140},
        {title: 'IMPROVEMENT', Value: 1.6},
        {title: 'CHANCE', Value: 2.8},
        {title: 'RESTORE', Value: 80},
      ],
    },
  },
  {
    ownerName: 'FLORANSA',
    ownerSurname: 'KIRIKKALE',
    endDate: '19.01.2025',
    startDate: '19.12.2021',
    lowestPrice: 200,
    coinCode: 'METRC',
    highestPrice: 10000,
    currentHighPrice: 287,
    totalPid: 6,
    NFTInfo: {
      NFT: 'PASSENGER',
      code: '#13303753',
      image: require('../../Assets/PersonNFTs/Person1NFT.jpeg'),
      price: 98.6,
      type: 0,
      typeName: 'TITAN',
      quality: 4,
      qualityName: 'PLATINUM',
      level: 42,
      attributes: [
        {title: 'PRODUCTIVITY', Value: 140},
        {title: 'IMPROVEMENT', Value: 1.6},
        {title: 'CHANCE', Value: 2.8},
        {title: 'RESTORE', Value: 80},
      ],
    },
  },
  {
    ownerName: 'FLORANSA',
    ownerSurname: 'KIRIKKALE',
    endDate: '19.01.2025',
    startDate: '19.12.2021',
    lowestPrice: 200,
    coinCode: 'METRC',
    highestPrice: 10000,
    currentHighPrice: 187,
    totalPid: 5,
    NFTInfo: {
      NFT: 'PASSENGER',
      code: '#10123753',
      image: require('../../Assets/PersonNFTs/PERSONNFT4.jpeg'),
      price: 98.6,
      type: 4,
      typeName: 'HURRICANE',
      quality: 5,
      qualityName: 'DIAMOND',
      level: 12,
      attributes: [
        {title: 'PRODUCTIVITY', Value: 140},
        {title: 'IMPROVEMENT', Value: 1.6},
        {title: 'CHANCE', Value: 2.8},
        {title: 'RESTORE', Value: 80},
      ],
    },
  },
];

const cryptoStakeMockData = [
  {
    coinCode: 'METRC',
    minLockAmount: 1000,
    earnedValue: 'METRC',
    totalAmount: 100000,
    stakedAmount: 50000,
    day: 1,
    interestRate: 0.45,
  },
  {
    coinCode: 'SOL',
    minLockAmount: 1,
    earnedValue: 'METRC',
    totalAmount: 100000,
    stakedAmount: 50000,
    day: 15,
    interestRate: 1.2,
  },
  {
    coinCode: 'SOL',
    minLockAmount: 1,
    earnedValue: 'METRC',
    totalAmount: 100000,
    stakedAmount: 50000,
    day: 15,
    interestRate: 1.2,
  },
  {
    coinCode: 'USDT',
    minLockAmount: 100,
    earnedValue: 'METRC',
    totalAmount: 100000,
    stakedAmount: 50000,
    day: 30,
    interestRate: 2.3,
  },
  {
    coinCode: 'USDT',
    minLockAmount: 100,
    earnedValue: 'METRC',
    totalAmount: 100000,
    stakedAmount: 50000,
    day: 90,
    interestRate: 4.98,
  },
  {
    coinCode: 'USDT',
    minLockAmount: 100,
    earnedValue: 'METRC',
    totalAmount: 100000,
    stakedAmount: 52200,
    day: 300,
    interestRate: 12.6,
  },
  {
    coinCode: 'USDT',
    minLockAmount: 100,
    earnedValue: 'METRC',
    totalAmount: 100000,
    stakedAmount: 52200,
    day: 300,
    interestRate: 12.6,
  },
  {
    coinCode: 'USDT',
    minLockAmount: 100,
    earnedValue: 'USDT',
    totalAmount: 100000,
    stakedAmount: 20000,
    day: 500,
    interestRate: 16.4,
  },
  {
    coinCode: 'USDT',
    minLockAmount: 100,
    earnedValue: 'METRC',
    totalAmount: 100000,
    stakedAmount: 50000,
    day: 1,
    interestRate: 1.2,
  },
];

const NFTStakeData = [
  {
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
  {
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
    NFT: 'PASSENGER',
    type: 0,
    typeName: 'TITAN',
    quality: 4,
    qualityName: 'PLATINUM',
    image: require('../../Assets/PersonNFTs/Person3NFT.jpeg'),
    day: 30,
    interestRate: 3.45,
    totalAmount: 1000,
    stakedAmount: 889,
    earnedValue: 'METRX',
  },
  {
    NFT: 'PASSENGER',
    type: 0,
    typeName: 'TITAN',
    quality: 0,
    qualityName: 'IRON',
    image: require('../../Assets/PersonNFTs/PERSONNFT3.jpeg'),
    day: 90,
    interestRate: 6.45,
    totalAmount: 1000,
    stakedAmount: 118,
    earnedValue: 'METRX',
  },
];

const DrawAndAuctionScreen = props => {
  // const Color = ['#7BB6E7', '#E9A962', '#C37282', '#957BE9'];
  const [tabIndex, setTabIndex] = useState(0);
  const [subTabIndex, setSubTabIndex] = useState(0);
  const [subTabIndexForStaking, setSubTabIndexForStaking] = useState(0);
  const [filteredAuctionData, setFilteredAuctionData] = useState(AuctionItems);

  // const tabItems = [
  //   {
  //     index: 0,
  //     name: 'DRAW',
  //   },
  //   {
  //     index: 1,
  //     name: 'AUCTION',
  //   },
  // ];

  const tabItems = [
    {
      index: 0,
      name: 'DRAW',
    },
    {
      index: 1,
      name: 'AUCTION',
    },
    {
      index: 2,
      name: 'STAKE',
    },
  ];
  const SubTabItems = [
    {
      index: 0,
      name: 'ALL',
    },
    {
      index: 1,
      name: 'PASSANGER',
    },
    {
      index: 2,
      name: 'DRIVER',
    },
    {
      index: 3,
      name: 'SIRALA',
    },
  ];

  const SubTabItemsForStaking = [
    {
      index: 0,
      name: 'CRYPTO',
    },
    {
      index: 1,
      name: 'NFT',
    },
  ];
  const drawEvents = [
    {
      quality: 3,
      name: 'Lucky Irish',
      total: 100000,
      price: 100,
      joinTicket: 34,
      coinCode: 'METRC',
      likedCount: 150,
      favoriteCount: 236,
      joined: 126,
      image: require('../../Assets/NFTImages/car1.jpeg'),
      description: ' NFT BOXES, ENERGY CARDS, DRAW CARDS, AUCTION CARDS',
      favorite: false,
      gifts: [
        {name: 'GOLD NFT BOXES', count: 10},
        {name: 'GOLD ENERGY CARDS', count: 20},
        {name: 'GOLD DRAW CARDS', count: 20},
        {name: 'GOLD AUCTION CARDS', count: 20},
      ],
    },
    {
      quality: 0,
      name: 'Lucky Irish',
      total: 100000,
      price: 50,
      joinTicket: 49,
      coinCode: 'METRC',
      likedCount: 150,
      favoriteCount: 236,
      joined: 0,
      image: require('../../Assets/NFTImages/car1.jpeg'),
      description: ' NFT BOXES, ENERGY CARDS, DRAW CARDS, AUCTION CARDS',
      favorite: true,
      gifts: [
        {name: 'IRON NFT BOXES', count: 10},
        {name: 'IRON ENERGY CARDS', count: 20},
        {name: 'IRON DRAW CARDS', count: 10},
        {name: 'IRON AUCTION CARDS', count: 20},
      ],
    },
    {
      //quality e gore cekılıse gırıs priceları belirlenecek.
      quality: 4,
      name: 'Lucky Irish',
      total: 100000,
      price: 120,
      joinTicket: 190,
      coinCode: 'METRC',
      likedCount: 150,
      favoriteCount: 236,
      joined: 126,
      image: require('../../Assets/NFTImages/car1.jpeg'),
      description: 'NFT BOXES,AUCTION CARDS',
      favorite: false,
      gifts: [
        {name: 'PLATINUM NFT BOXES', count: 10},
        {name: 'PLATINUM AUCTION CARDS', count: 20},
      ],
    },
    {
      //quality e gore cekılıse gırıs priceları belirlenecek.
      quality: 5,
      name: 'Lucky Irish',
      total: 100000,
      price: 60,
      joinTicket: 293,
      coinCode: 'METRC',
      likedCount: 150,
      favoriteCount: 236,
      joined: 126,
      image: require('../../Assets/NFTImages/car1.jpeg'),
      description: 'NFT BOXES, DRAW CARDS, AUCTION CARDS',
      favorite: false,
      gifts: [
        {name: 'DIAMOND NFT BOXES', count: 10},
        {name: 'DIAMOND DRAW CARDS', count: 20},
        {name: 'DIAMOND AUCTION CARDS', count: 20},
      ],
    },
    {
      //quality e gore cekılıse gırıs priceları belirlenecek.
      quality: 1,
      name: 'Lucky Irish',
      total: 100000,
      price: 10,
      joinTicket: 1230,
      coinCode: 'METRC',
      likedCount: 150,
      favoriteCount: 236,
      joined: 126,
      image: require('../../Assets/NFTImages/car1.jpeg'),
      description: 'ENERGY CARDS, DRAW CARDS, AUCTION CARDS',
      favorite: false,
      gifts: [
        {name: 'BRONZE ENERGY CARDS', count: 10},
        {name: 'BRONZE DRAW CARDS', count: 20},
        {name: 'BRONZE AUCTION CARDS', count: 20},
      ],
    },
    {
      //quality e gore cekılıse gırıs priceları belirlenecek.
      quality: 2,
      name: 'Lucky Irish',
      total: 100000,
      price: 200,
      joinTicket: 34,
      coinCode: 'METRC',
      likedCount: 150,
      favoriteCount: 236,
      joined: 1000,
      image: require('../../Assets/NFTImages/car1.jpeg'),
      description: 'NFT BOXES, ENERGY CARDS, DRAW CARDS',
      favorite: false,
      gifts: [
        {name: 'SILVER NFT BOXES', count: 10},
        {name: 'SILVER ENERGY CARDS', count: 20},
        {name: 'SILVER DRAW CARDS', count: 20},
      ],
    },
    {
      //quality e gore cekılıse gırıs priceları belirlenecek.
      quality: 5,
      name: 'Lucky Irish',
      total: 100000,
      price: 1000,
      joinTicket: 34,
      coinCode: 'METRC',
      likedCount: 150,
      favoriteCount: 236,
      joined: 126,
      image: require('../../Assets/NFTImages/car1.jpeg'),
      description: 'NFT BOXES, DRAW CARDS',
      favorite: false,
      gifts: [{name: 'DIAMOND NFT BOXES', count: 30}],
    },
    {
      //quality e gore cekılıse gırıs priceları belirlenecek.
      quality: 4,
      name: 'Lucky Irish',
      total: 100000,
      price: 0,
      joinTicket: 34,
      coinCode: 'METRC',
      likedCount: 150,
      favoriteCount: 236,
      joined: 126,
      image: require('../../Assets/NFTImages/car1.jpeg'),
      description: 'NFT BOXES, ENERGY CARD',
      favorite: false,
      gifts: [
        {name: 'PLATINUM NFT BOXES', count: 10},
        {name: 'PLATINUM ENERGY CARDS', count: 20},
      ],
    },
  ];

  const {navigation} = props;
  const [showJoinModal, setShowJoinModal] = useState(false);
  const [selectedItem, setSelectedItem] = useState({});

  const joinButtomPress = item => {
    setShowJoinModal(true);
    setSelectedItem(item);
  };

  const controlFilteredData = index => {
    setSubTabIndex(index);
    if (index === 0) {
      setFilteredAuctionData(AuctionItems);
    }
    if (index === 1) {
      let filterArray = [];
      _.filter(AuctionItems, item => {
        console.log('İtem From', item);
        if (item?.NFTInfo?.NFT === 'PASSENGER') {
          console.log('FİLTER', item);
          filterArray.push(item);
        } else {
          console.log('Hello');
        }
      });
      setFilteredAuctionData(filterArray);
    }
    if (index === 2) {
      let filterArray = [];
      _.filter(AuctionItems, item => {
        console.log('İtem From', item);
        if (item?.NFTInfo?.NFT === 'DRIVER') {
          console.log('FİLTER', item);
          filterArray.push(item);
        } else {
          console.log('Hello');
        }
      });
      setFilteredAuctionData(filterArray);
    }
    if (index === 3) {
      alert('SIRALA MODAL');
    }
  };
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
        <MMTabView
          tabIndex={tabIndex}
          tabItems={tabItems}
          setTabIndex={value => setTabIndex(value)}
        />
        {tabIndex === 1 ? (
          <MMSubTabView
            subTabItems={SubTabItems}
            subTabIndex={subTabIndex}
            setSubTabIndex={index => controlFilteredData(index)}
          />
        ) : null}
        {tabIndex === 2 ? (
          <MMSubTabView
            subTabItems={SubTabItemsForStaking}
            subTabIndex={subTabIndexForStaking}
            setSubTabIndex={index => setSubTabIndexForStaking(index)}
          />
        ) : null}

        <MMDrawModal
          modalShow={showJoinModal}
          closeModal={() => setShowJoinModal(false)}
          item={selectedItem}
        />

        <ScrollView
          style={{flex: 1, paddingBottom: 10}}
          showsVerticalScrollIndicator={false}>
          {tabIndex === 0 ? (
            _.map(drawEvents, item => {
              return (
                <>
                  <MMDrawItems
                    item={item}
                    onPresNavigateDetail={item =>
                      navigation.navigate('DrawScreenDetail', {
                        item: item,
                      })
                    }
                    onPressJoin={() => joinButtomPress(item)}
                  />
                </>
              );
            })
          ) : tabIndex === 1 ? (
            _.map(filteredAuctionData, item => {
              return (
                <>
                  <MMAuctionItems
                    item={item}
                    onPress={item =>
                      navigation.navigate('AuctionDetailScreen', {
                        item: item,
                      })
                    }
                  />
                </>
              );
            })
          ) : (
            <>
              <MMStakeItems
                type={subTabIndexForStaking === 0 ? 0 : 1}
                data={
                  subTabIndexForStaking === 0
                    ? cryptoStakeMockData
                    : NFTStakeData
                }
              />
            </>
          )}
        </ScrollView>
      </SafeAreaView>
    </LinearGradient>
  );
};

export default DrawAndAuctionScreen;
