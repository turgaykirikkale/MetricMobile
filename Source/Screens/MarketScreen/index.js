import MMStandarHeader from '../../Components/UI/MMStandartHeader';
import MMMarketItem from '../../Components/Composite/MMMarketItem';
import MMPieceItem from '../../Components/Composite/MMPieceItem';
import LinearGradient from 'react-native-linear-gradient';
import MMTabView from '../../Components/UI/MMTabView';
import MMSubTabView from '../../Components/Composite/MMSubTabView';
import {SafeAreaView} from 'react-native';
import React, {useState} from 'react';
import MMMarketFilterModal from '../../Components/Composite/MMMarketFilterModal';
import MMMarketPieceFilterModal from '../../Components/Composite/MMMarketPieceFilterModal';
import MMMarketOtherItems from '../../Components/Composite/MMMarketsOthersItems';
import MMMarketOthersFilterModal from '../../Components/Composite/MMMarketOthersFilterModal';
import {NFTImageComponentControl} from '../../Utils/Enums';
import MMItemBuyModal from '../../Components/Composite/MMItemBuyModal';

const MarketScreen = props => {
  const [tabIndex, setTabIndex] = useState(0);
  const [subTabIndex, setSubTabIndex] = useState(0);
  const [NFTFilterData, setNFTFilterData] = useState(null);
  const [showFilterModal, setShowFilterModal] = useState(false);
  const [NFTPiecesFilterData, setNFTPieceFilterData] = useState(null);
  const [showPieceFilterModal, setShowPieceFilterModal] = useState(false);
  const [OtherItemsFilterData, setOtherItemsFilterData] = useState(null);
  const [showOthersFilterModal, setShowOtherFilterModal] = useState(false);
  const [showBuyModal, setShowBuyModal] = useState(false);
  const [fastBuyItem, setFastBuyItem] = useState([]);

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
    {
      index: 2,
      name: 'FILTER',
    },
    {
      index: 3,
      name: 'SIRALA',
    },
  ];

  const NFTDataForCars = [
    {
      NFT: 'DRIVER',
      code: '#1233213',
      image: require('../../Assets/NFTImages/car1.jpeg'),
      price: 12.6,
      type: 0,
      typeName: 'STANDART',
      quality: 0,
      qualityName: 'IRON',
      level: 0,
      attributes: [
        {title: 'BATTERY', Value: 140, type: 0},
        {title: 'POWER', Value: 1.6, type: 1},
        {title: 'PLAK', Value: 2.8, type: 2},
        {title: 'SERVICE', Value: 80, type: 3},
      ],
    },
    {
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
        {title: 'BATTERY', Value: 140, type: 0},
        {title: 'POWER', Value: 1.6, type: 1},
        {title: 'PLAK', Value: 2.8, type: 2},
        {title: 'SERVICE', Value: 80, type: 3},
      ],
    },
    {
      NFT: 'DRIVER',
      code: '#12333',
      image: require('../../Assets/NFTImages/car3.jpeg'),
      price: 45.6,
      type: 2,
      typeName: 'SPORT',
      quality: 2,
      qualityName: 'SILVER',
      level: 15,
      attributes: [
        {title: 'BATTERY', Value: 140, type: 0},
        {title: 'POWER', Value: 1.6, type: 1},
        {title: 'PLAK', Value: 2.8, type: 2},
        {title: 'SERVICE', Value: 80, type: 3},
      ],
    },
    {
      NFT: 'DRIVER',
      code: '#123',
      image: require('../../Assets/NFTImages/car4.jpeg'),
      price: 9.6,
      type: 3,
      typeName: 'CABRIO',
      quality: 0,
      qualityName: 'IRON',
      level: 50,
      attributes: [
        {title: 'BATTERY', Value: 140, type: 0},
        {title: 'POWER', Value: 1.6, type: 1},
        {title: 'PLAK', Value: 2.8, type: 2},
        {title: 'SERVICE', Value: 80, type: 3},
      ],
    },
    {
      NFT: 'DRIVER',
      code: '#1233123',
      image: require('../../Assets/NFTImages/car3.jpeg'),
      price: 56.6,
      type: 4,
      typeName: 'TRUCKS',
      quality: 3,
      qualityName: 'GOLD',
      level: 43,
      attributes: [
        {title: 'BATTERY', Value: 140, type: 0},
        {title: 'POWER', Value: 1.6, type: 1},
        {title: 'PLAK', Value: 2.8, type: 2},
        {title: 'SERVICE', Value: 80, type: 3},
      ],
    },
    {
      NFT: 'DRIVER',
      code: '#56234',
      image: require('../../Assets/NFTImages/car4.jpeg'),
      price: 87.6,
      type: 1,
      typeName: 'SUV',
      quality: 4,
      qualityName: 'PLATINUM',
      level: 23,
      attributes: [
        {title: 'BATTERY', Value: 140, type: 0},
        {title: 'POWER', Value: 1.6, type: 1},
        {title: 'PLAK', Value: 2.8, type: 2},
        {title: 'SERVICE', Value: 80, type: 3},
      ],
    },
    {
      NFT: 'DRIVER',
      code: '#453214',
      image: require('../../Assets/NFTImages/car3.jpeg'),
      price: 176.6,
      type: 0,
      typeName: 'STANDART',
      quality: 5,
      qualityName: 'DIAMOND',
      level: 8,
      attributes: [
        {title: 'BATTERY', Value: 140, type: 0},
        {title: 'POWER', Value: 1.6, type: 1},
        {title: 'PLAK', Value: 2.8, type: 2},
        {title: 'SERVICE', Value: 80, type: 3},
      ],
    },
    {
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
        {title: 'BATTERY', Value: 140, type: 0},
        {title: 'POWER', Value: 1.6, type: 1},
        {title: 'PLAK', Value: 2.8, type: 2},
        {title: 'SERVICE', Value: 80, type: 3},
      ],
    },
    {
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
        {title: 'BATTERY', Value: 140, type: 0},
        {title: 'POWER', Value: 1.6, type: 1},
        {title: 'PLAK', Value: 2.8, type: 2},
        {title: 'SERVICE', Value: 80, type: 3},
      ],
    },
    {
      NFT: 'DRIVER',
      code: '#103753',
      image: require('../../Assets/NFTImages/car4.jpeg'),
      price: 98.6,
      type: 1,
      typeName: 'SUV',
      quality: 3,
      qualityName: 'GOLD',
      level: 42,
      attributes: [
        {title: 'BATTERY', Value: 140, type: 0},
        {title: 'POWER', Value: 1.6, type: 1},
        {title: 'PLAK', Value: 2.8, type: 2},
        {title: 'SERVICE', Value: 80, type: 3},
      ],
    },
    {
      NFT: 'DRIVER',
      code: '#103753',
      image: require('../../Assets/NFTImages/car4.jpeg'),
      price: 98.6,
      type: 3,
      typeName: 'CABRIO',
      quality: 3,
      qualityName: 'GOLD',
      level: 42,
      attributes: [
        {title: 'BATTERY', Value: 140, type: 0},
        {title: 'POWER', Value: 1.6, type: 1},
        {title: 'PLAK', Value: 2.8, type: 2},
        {title: 'SERVICE', Value: 80, type: 3},
      ],
    },
  ];

  const NFTDatasForPassenger = [
    {
      NFT: 'PASSENGER',
      code: '#10373',
      image: require('../../Assets/PersonNFTs/Person1NFT.jpeg'),
      price: 98.6,
      type: 0,
      typeName: 'TITAN',
      quality: 0,
      qualityName: 'IRON',
      level: 34,
      attributes: [
        {title: 'PRODUCTIVITY', Value: 140, type: 0},
        {title: 'IMPROVEMENT', Value: 1.6, type: 1},
        {title: 'CHANCE', Value: 2.8, type: 2},
        {title: 'RESTORE', Value: 80, type: 3},
      ],
    },
    {
      NFT: 'PASSENGER',
      code: '#1032753',
      image: require('../../Assets/PersonNFTs/Person2NFT.png'),
      price: 98.6,
      type: 1,
      typeName: 'PARAGON',
      quality: 1,
      qualityName: 'BRONZE',
      level: 129,
      attributes: [
        {title: 'PRODUCTIVITY', Value: 140, type: 0},
        {title: 'IMPROVEMENT', Value: 1.6, type: 1},
        {title: 'CHANCE', Value: 2.8, type: 2},
        {title: 'RESTORE', Value: 80, type: 3},
      ],
    },
    {
      NFT: 'PASSENGER',
      code: '#10312753',
      image: require('../../Assets/PersonNFTs/Person1NFT.jpeg'),
      price: 98.6,
      type: 2,
      typeName: 'COSMİC',
      quality: 2,
      qualityName: 'SILVER',
      level: 2,
      attributes: [
        {title: 'PRODUCTIVITY', Value: 140, type: 0},
        {title: 'IMPROVEMENT', Value: 1.6, type: 1},
        {title: 'CHANCE', Value: 2.8, type: 2},
        {title: 'RESTORE', Value: 80, type: 3},
      ],
    },
    {
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
        {title: 'PRODUCTIVITY', Value: 140, type: 0},
        {title: 'IMPROVEMENT', Value: 1.6, type: 1},
        {title: 'CHANCE', Value: 2.8, type: 2},
        {title: 'RESTORE', Value: 80, type: 3},
      ],
    },
    {
      NFT: 'PASSENGER',
      code: '#10373153',
      image: require('../../Assets/PersonNFTs/PERSONNFT3.jpeg'),
      price: 98.6,
      type: 4,
      typeName: 'HURRICANE',
      quality: 4,
      qualityName: 'PLATINUM',
      level: 9,
      attributes: [
        {title: 'PRODUCTIVITY', Value: 140, type: 0},
        {title: 'IMPROVEMENT', Value: 1.6, type: 1},
        {title: 'CHANCE', Value: 2.8, type: 2},
        {title: 'RESTORE', Value: 80, type: 3},
      ],
    },
    {
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
        {title: 'PRODUCTIVITY', Value: 140, type: 0},
        {title: 'IMPROVEMENT', Value: 1.6, type: 1},
        {title: 'CHANCE', Value: 2.8, type: 2},
        {title: 'RESTORE', Value: 80, type: 3},
      ],
    },
    {
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
        {title: 'PRODUCTIVITY', Value: 140, type: 0},
        {title: 'IMPROVEMENT', Value: 1.6, type: 1},
        {title: 'CHANCE', Value: 2.8, type: 2},
        {title: 'RESTORE', Value: 80, type: 3},
      ],
    },
  ];

  const NFTDataForCarPiece = [
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
      type: 2, // PLAK
      typeName: 'PLAK',
      price: 0.8128,
      level: 2,
      image: require('../../Assets/NFTPieceImages/seat.jpeg'),
      attributes: [
        {title: 'EXTRA BASE', Value: '8'},
        {title: 'EXTRRA BASE RATIO', Value: '%10'},
      ],
      NFT: 'DRIVER',
    },
    {
      code: '#13303753',
      type: 2, // PLAK
      typeName: 'PLAK',
      price: 0.88,
      level: 3,
      image: require('../../Assets/NFTPieceImages/seat.jpeg'),
      attributes: [
        {title: 'EXTRA BASE', Value: '8'},
        {title: 'EXTRRA BASE RATIO', Value: '%10'},
      ],
      NFT: 'DRIVER',
    },
    {
      code: '#13303753',
      type: 3,
      typeName: 'SERVICE',
      price: 0.8998,
      level: 2,
      image: require('../../Assets/NFTPieceImages/seat.jpeg'),
      attributes: [
        {title: 'EXTRA BASE', Value: '8'},
        {title: 'EXTRRA BASE RATIO', Value: '%10'},
      ],
      NFT: 'DRIVER',
    },
    {
      code: '#13303753',
      type: 3, // SERVICE
      typeName: 'SERVICE',
      price: 0.8998,
      level: 2,
      image: require('../../Assets/NFTPieceImages/seat.jpeg'),
      attributes: [
        {title: 'EXTRA BASE POINT', Value: '8'},
        {title: 'EXTRRA BASE RATIO', Value: '%10'},
      ],
      NFT: 'DRIVER',
    },
  ];

  /*
  IRON = quality 0,
  BRONZE = quality 1,
  SILVER = quality 2,
  GOLD = quality 3,
  PLATINUM =quality 4,
  DIAMOND = quality 5,
  */

  const NFTDataForPassengerPiece = [
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

      //maxiumum 10 LEVELE KADAR GELEBİLECEKLER!!
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
      type: 2,
      typeName: 'CHANCE',
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
      type: 3,
      typeName: 'RESTORE',
      price: 0.8998,
      level: 2,
      image: require('../../Assets/NFTPieceImages/seat.jpeg'),
      attributes: [
        {title: 'EXTRA BASE POINT', Value: '8'},
        {title: 'EXTRRA BASE RATIO', Value: '%10'},
      ],
      NFT: 'PASSANGER',
    },
  ];

  const OtherMarketItemsTroves = [
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
      name: 'MYSTİC BOX',
      quality: 0,
      qualityName: 'IRON',
      image: require('../../Assets/OtherNFTImages/kasa.webp'),
      price: 0.98,
    },
    {
      code: '#1235',
      name: 'MYSTİC BOX',
      quality: 1,
      qualityName: 'BRONZE',
      image: require('../../Assets/OtherNFTImages/kasa.webp'),
      price: 0.98,
    },
    {
      code: '#1235',
      name: 'MYSTİC BOX',
      quality: 2,
      qualityName: 'SILVER',
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
    {
      code: '#1235',
      name: 'NFT BOX',
      quality: 5,
      qualityName: 'DIAMOND',
      image: require('../../Assets/OtherNFTImages/kasa.webp'),
      price: 0.98,
    },
    {
      code: '#1235',
      name: 'NFT BOX',
      quality: 5,
      qualityName: 'DIAMOND',
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
    {
      code: '#1235',
      name: 'SELLER CARD',
      value: 36,
      quality: 1,
      qualityName: 'BRONZE',
      image: require('../../Assets/OtherNFTImages/enerji.jpeg'),
      price: 0.98,
    },
    {
      code: '#1235',
      name: 'DRAW CARD',
      value: 20,
      quality: 5,
      qualityName: 'DIAMOND',
      image: require('../../Assets/OtherNFTImages/acıkarttırma.webp'),
      price: 0.98,
    },
  ];

  const setSubIndexControl = index => {
    if (index === 0 || index === 1) {
      setSubTabIndex(index);
    } else if (index === 2) {
      if (tabIndex === 0) {
        setShowFilterModal(true);
      } else if (tabIndex === 1) {
        setShowPieceFilterModal(true);
      } else {
        setShowOtherFilterModal(true);
      }
    } else {
      alert('SIRALA MODAL');
    }
  };
  const FilterForNFT = data => {
    console.log('FilterForNFT', data);
    setNFTFilterData(data);
    setShowFilterModal(false);
  };
  const FilterForNFTPieces = data => {
    console.log('FilterForNFTPieces', data);
    setNFTPieceFilterData(data);
    setShowPieceFilterModal(false);
  };
  const FilterForOthers = data => {
    console.log('FilterForOthers', data);
    setOtherItemsFilterData(data);
    setShowOtherFilterModal(false);
  };
  const setTabIndexAndSubTabIndex = value => {
    if (value === 0) {
      setTabIndex(value);
      setNFTPieceFilterData(null);
      setOtherItemsFilterData(null);
    } else if (value === 1) {
      setTabIndex(value);
      setNFTFilterData(null);
      setOtherItemsFilterData(null);
    } else if (value === 2) {
      setTabIndex(value);
      setNFTFilterData(null);
      setNFTPieceFilterData(null);
      setSubIndexControl(0);
    }
  };

  const setFastBuyPressControl = item => {
    setFastBuyItem(item);
    setShowBuyModal(true);
  };

  const {navigation} = props;
  console.log('NFTFilterData', NFTFilterData);
  console.log('PIECEFİLTER', NFTPiecesFilterData);
  console.log('OthersItems', OtherItemsFilterData);
  return (
    <LinearGradient
      colors={['white', '#ced7ea', '#7189ba']}
      style={{
        flex: 1,
      }}>
      <MMItemBuyModal
        type={
          tabIndex === 0
            ? NFTImageComponentControl.NFTMarket
            : NFTImageComponentControl.NFTPieceMarket
        }
        modalShow={showBuyModal}
        closeModal={() => setShowBuyModal(false)}
        data={fastBuyItem}
        onPressApprove={data => alert('Buy iken alınan data bilgileri gelecek')}
      />
      <MMMarketFilterModal
        selectedSubTab={subTabIndex}
        modalShow={showFilterModal}
        closeModal={() => setShowFilterModal(false)}
        filterModal={data => FilterForNFT(data)}
      />
      <MMMarketPieceFilterModal
        selectedSubTab={subTabIndex}
        modalShow={showPieceFilterModal}
        closeModal={() => setShowPieceFilterModal(false)}
        filterModal={data => FilterForNFTPieces(data)}
      />

      <MMMarketOthersFilterModal
        selectedSubTab={subTabIndex}
        modalShow={showOthersFilterModal}
        closeModal={() => setShowOtherFilterModal(false)}
        filterModal={data => FilterForOthers(data)}
      />

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
          setTabIndex={value => setTabIndexAndSubTabIndex(value)}
        />
        <MMSubTabView
          subTabItems={SubTabItems}
          subTabIndex={subTabIndex}
          setSubTabIndex={index => setSubIndexControl(index)}
        />
        {tabIndex === 0 ? (
          <MMMarketItem
            onPressBuyButton={item => setFastBuyPressControl(item)}
            tabType={0}
            NFTData={subTabIndex === 0 ? NFTDatasForPassenger : NFTDataForCars}
            onPressItem={item =>
              navigation.navigate('MarketItemBuyAndInfoScreen', {
                NFTTypeControl: NFTImageComponentControl.NFTMarket,
                item: item,
              })
            }
          />
        ) : null}
        {tabIndex === 1 ? (
          <MMPieceItem
            onPressBuyButton={item => setFastBuyPressControl(item)}
            tabType={0}
            onPressItem={item =>
              navigation.navigate('MarketItemBuyAndInfoScreen', {
                NFTTypeControl: NFTImageComponentControl.NFTPieceMarket,
                item: item,
              })
            }
            NFTData={
              subTabIndex === 0 ? NFTDataForPassengerPiece : NFTDataForCarPiece
            }
          />
        ) : null}
        {tabIndex === 2 ? (
          <MMMarketOtherItems
            tabType={0}
            data={subTabIndex === 0 ? PublicItems : OtherMarketItemsTroves}
          />
        ) : null}
      </SafeAreaView>
    </LinearGradient>
  );
};

export default MarketScreen;
