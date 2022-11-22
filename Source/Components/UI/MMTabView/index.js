import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import _ from 'lodash';

const MMTabView = props => {
  const {tabIndex, tabItems, setTabIndex} = props;
  return (
    <View>
      <View style={{flexDirection: 'row', marginTop: 10}}>
        {_.map(tabItems, item => {
          return (
            <>
              {/* <View style={{borderLeftWidth: item.index !== 0 ? 1 : 0}} /> */}
              <TouchableOpacity
                onPress={() => setTabIndex && setTabIndex(item.index)}
                style={{
                  marginHorizontal: 4,
                  paddingVertical: 4,
                  flex: 1,
                  borderColor: tabIndex === item.index ? '#f27f21' : '#7189ba',
                  borderBottomWidth: tabIndex === item.index ? 2 : 0,
                  alignItems: 'center',
                  backgroundColor: tabIndex === item.index ? '#ced7ea' : null,
                  borderTopLeftRadius: tabIndex === item.index ? 6 : null,
                  borderTopRightRadius: tabIndex === item.index ? 6 : null,
                }}>
                <Text
                  style={{
                    letterSpacing: 2,
                    fontWeight: '600',
                    color: tabIndex === item.index ? '#f27f21' : '#7189ba',
                  }}>
                  {item.name}
                </Text>
              </TouchableOpacity>
            </>
          );
        })}
      </View>
    </View>
  );
};

export default MMTabView;
