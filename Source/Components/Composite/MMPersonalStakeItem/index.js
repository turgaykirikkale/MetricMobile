import React from 'react';
import {View, Text, Image} from 'react-native';
import _ from 'lodash';

function MMPersonalStakeItem(props) {
  const {PersonalStakeItem} = props;

  if (_.isEmpty(PersonalStakeItem) || _.isNull(PersonalStakeItem)) {
    return (
      <View>
        <Text>Katıldığınız Stake Bulunmamaktadır.</Text>
      </View>
    );
  }
  return _.map(PersonalStakeItem, item => {
    return (
      <View>
        <Text>{item.stakeType}</Text>
      </View>
    );
  });
}

export default MMPersonalStakeItem;
