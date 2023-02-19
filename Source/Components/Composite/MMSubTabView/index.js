import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import _ from 'lodash';
const MMSubTabView = props => {
  const {subTabItems, subTabIndex, setSubTabIndex} = props;
  return (
    <View
      style={{
        flexDirection: 'row',
        // marginHorizontal: 10,
        marginTop: 10,
        marginHorizontal: 10,
      }}>
      {_.map(subTabItems, item => {
        return item.name === null ? null : (
          <TouchableOpacity
            onPress={() => setSubTabIndex && setSubTabIndex(item.index)}
            style={{
              flex: 1,
              alignItems: 'center',
              borderWidth: 1,
              marginRight:
                item.index !== 3 && subTabItems.length !== 2 ? 10 : 5,
              marginLeft: subTabItems.length === 2 ? 5 : 0,
              paddingVertical: 2,
              borderRadius: 8,
              borderColor: subTabIndex === item.index ? '#ced7ea' : '#7189ba',
              backgroundColor: subTabIndex === item.index ? '#ced7ea' : null,
            }}>
            <Text
              numberOfLines={1}
              style={{
                fontSize: 10,
                letterSpacing: 0.6,
                fontWeight: '500',
                color: subTabIndex === item.index ? 'white' : '#7189ba',
              }}>
              {item.name}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default MMSubTabView;
