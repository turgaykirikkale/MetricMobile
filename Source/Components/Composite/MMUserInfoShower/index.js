import React from 'react';
import {View, Text} from 'react-native';

const MMUserInfoShower = props => {
  const {name, value} = props;
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderBottomWidth: 0.2,
        marginHorizontal: 15,
        marginTop: 15,
        paddingBottom: 8,
        paddingHorizontal: 5,
      }}>
      <Text>{name}</Text>
      <Text>{value}</Text>
    </View>
  );
};

export default MMUserInfoShower;
