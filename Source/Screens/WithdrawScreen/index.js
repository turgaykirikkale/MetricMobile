import React, {useState} from 'react';
import {SafeAreaView, View, Text, ScrollView} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import MMWalletScreenItem from '../../Components/Composite/MMWalletScreenItem';
import MMButton from '../../Components/UI/MMButton';
import MMStandarHeader from '../../Components/UI/MMStandartHeader';
import MMTextInput from '../../Components/UI/MMTextInput';
import {FlexibleDesigns} from '../../Utils/FlexibleDesign';

const WithdrawScreen = props => {
  const [amount, setAmount] = useState('0.0');
  const [witdrawAdress, setWithdrawAdress] = useState('');
  const coin = props?.route?.params?.item;
  const networks = ['BNB', 'SOL', 'TRC20', 'ERC20', 'AVAX'];
  const flexDesign = FlexibleDesigns();
  const {navigation} = props;

  const ytue = '1.7';
  const newBalance = parseInt(ytue) + coin.Balance;
  console.log(newBalance);
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
          headerMiddle={coin?.Name}
        />
        <ScrollView>
          <MMWalletScreenItem item={coin} withdraw />
          <View style={{marginTop: 20}} />
          <MMTextInput
            placeHolder={amount}
            value={amount}
            RightIcon
            RightIconText={'ALL'}
            keyboardType={'numeric'}
            label={'Amount'}
            onChangeValue={value => setAmount(value)}
            onPressRightIcon={() => setAmount(coin?.Balance.toString())}
          />
          <MMTextInput
            placeHolder={'Adress'}
            value={witdrawAdress}
            label={'Adress'}
            onChangeValue={value => setWithdrawAdress(value)}
          />
          <Text
            style={{
              marginHorizontal: 15,
              fontSize: 12,
              letterSpacing: 0.8,
              textAlign: 'left',
              color: '#d34c55',
              fontWeight: '400',
            }}>
            * Gönderilecek adres aynı ağda olmalı, aksi takdirde bakiyeleriniz
            kaybolacaktır.
          </Text>
          <MMButton
            text={'TRANSFER'}
            containerStyle={{
              paddingVertical: 12,
              alignItems: 'center',
              backgroundColor: '#238636',
              borderRadius: 6,
              marginHorizontal: 10,
              marginTop: 20,
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
export default WithdrawScreen;
