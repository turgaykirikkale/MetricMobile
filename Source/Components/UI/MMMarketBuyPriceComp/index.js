import React from 'react';
import {View, Text} from 'react-native';
import {styles} from './assets/styles';
function MMMarketBuyPriceComp({price}) {
  return (
    <View style={styles.mainContainer}>
      <Text style={styles.priceTitleTextStyle}>PRICE</Text>
      <Text style={styles.priceTitleTextStyle}>{`${price} SOL`}</Text>
    </View>
  );
}

export default MMMarketBuyPriceComp;
