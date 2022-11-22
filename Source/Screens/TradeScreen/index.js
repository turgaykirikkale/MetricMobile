import React, {useEffect, useState} from 'react';
import {SafeAreaView, View, Text, ScrollView} from 'react-native';
import MMStandarHeader from '../../Components/UI/MMStandartHeader';
import LinearGradient from 'react-native-linear-gradient';
import MMTradeItem from '../../Components/Composite/MMTradeItem';
import _ from 'lodash';
import MMTradeCoinListModal from '../../Components/UI/MMTradeCoinListModal';
import MMButton from '../../Components/UI/MMButton';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

const TradeScreen = props => {
  const [fromCoin, setFromCoin] = useState(props?.route?.params?.item);
  const [toCoin, setToCoin] = useState();
  const [walletData, setWalletData] = useState(
    props?.route?.params?.walletData,
  );
  const [toCoinArray, setToCoinArray] = useState([]);

  const [coinModalShow, setCoinModalShow] = useState(false);
  useEffect(() => {
    console.log('WalletData', walletData);
    let fixedArray = [];
    _.each(walletData, item => {
      if (item.Name === fromCoin.Name) {
        console.log('hii');
      } else {
        console.log(item);
        fixedArray.push(item);
      }
    });
    setToCoinArray(fixedArray);
    setToCoin(fixedArray[2]);
    console.log(fixedArray);
  }, []);
  const {navigation} = props;

  const openFromCoinListModal = () => {
    setCoinModalShow(true);
  };
  const openToCoinListModal = () => {
    setCoinModalShow(true);
  };
  const selectedCoinItem = item => {
    console.log('itemitem', item);
    setToCoin(item);
    setCoinModalShow(false);
  };
  return (
    <LinearGradient
      colors={['white', '#ced7ea', '#7189ba']}
      style={{
        flex: 1,
      }}>
      <SafeAreaView style={{flex: 1}}>
        <MMStandarHeader
          navigation={navigation}
          backButton
          navigateToProfileStack={() =>
            navigation.navigate('ProfileStackNavigator')
          }
        />
        <ScrollView>
          <MMTradeCoinListModal
            modalShow={coinModalShow}
            closeModal={() => setCoinModalShow(false)}
            data={toCoinArray}
            selectedCoinItem={item => selectedCoinItem(item)}
          />

          <MMTradeItem
            type
            header={'FROM'}
            balance={fromCoin?.Balance}
            coinName={fromCoin?.Name}
            openCoinListModal={() => openFromCoinListModal()}
          />
          <MMTradeItem
            header={'TO'}
            balance={toCoin?.Balance}
            deleteALL
            coinName={toCoin?.Name}
            openCoinListModal={() => openToCoinListModal()}
          />
          <MMButton
            text={'TRADE'}
            containerStyle={{
              paddingVertical: 12,
              alignItems: 'center',
              backgroundColor: '#238636',
              borderRadius: 6,
              marginHorizontal: 10,
              marginTop: 10,
            }}
            textStyle={{
              color: '#ced7ea',
              fontWeight: 'bold',
              letterSpacing: 0.8,
            }}
          />
        </ScrollView>
      </SafeAreaView>
    </LinearGradient>
  );
};

export default TradeScreen;
