import React from 'react';
import {Text, SafeAreaView, ScrollView, TouchableOpacity} from 'react-native';
import MMStandarHeader from '../../Components/UI/MMStandartHeader';
import _ from 'lodash';
import LinearGradient from 'react-native-linear-gradient';
import MMWalletScreenItem from '../../Components/Composite/MMWalletScreenItem';
const WalletScreen = props => {
  //wallet datasının içine adressleri de gelicek.
  const walletData = [
    {
      Name: 'METRX',
      Balance: 35.67,
      Price: 1.8888,
      market: true,
      adress: 'aslkd1ıh312lk3h12mn3m1209897893j1o2k3jnl12mn3l2mn3',
      network: 'Solana',
    },
    {
      Name: 'METRC',
      Balance: 1213123.67,
      Price: 2.59,
      market: true,
      adress: 'aslkd1ıh312lk3h12mn3m12asdamsdjnjakhdsa1o2k3jnl12mn3l2mn3',
      network: 'Solana',
    },
    {
      Name: 'SOL',
      Balance: 0.3444,
      Price: 123.32,
      market: true,
      adress: 'aslkd1ıh312lk3h12mn3m12n31l2k312mn3l2mn3',
      network: 'Solana',
    },
    {
      Name: 'USDT',
      Balance: 0.3444,
      Price: 123.32,
      market: true,
      adress: 'aslkd1ıh312lk3h12mn3m190898o2k3jnl12mn3l2mn3',
      network: 'Solana',
    },
  ];
  const {navigation} = props;
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
        <ScrollView style={{flex: 1}}>
          {_.map(walletData, item => {
            if (item.market) {
              return (
                <MMWalletScreenItem
                  item={item}
                  navigateToTrade={data =>
                    navigation.navigate('TradeScreen', {
                      item: data,
                      walletData: walletData,
                    })
                  }
                  navigateToDeposit={data =>
                    navigation.navigate('DepositScreen', {
                      item: data,
                    })
                  }
                  navigateToWithdraw={data =>
                    navigation.navigate('WithdrawScreen', {item: data})
                  }
                />
              );
            }
          })}
          <TouchableOpacity
            style={{
              marginHorizontal: 10,
              marginTop: 16,
              alignItems: 'flex-end',
            }}>
            <Text style={{fontSize: 12, color: '#7189ba', fontWeight: 'bold'}}>
              Powered By METRICXS LTD.
            </Text>
          </TouchableOpacity>
        </ScrollView>
      </SafeAreaView>
    </LinearGradient>
  );
};

export default WalletScreen;
