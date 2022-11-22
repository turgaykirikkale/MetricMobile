import React from 'react';
import {View, Text, TouchableOpacity, Platform} from 'react-native';
import {FlexibleDesigns} from '../../../Utils/FlexibleDesign';
import _ from 'lodash';

const MMSelector = props => {
  const FlexibleDesign = FlexibleDesigns();
  const {label, onPress, placeHolder} = props;
  return (
    <TouchableOpacity onPress={() => onPress && onPress()}>
      <View
        style={{
          position: 'absolute',
          zIndex: 999,
          backgroundColor: '#e6e6e6',
          marginLeft: 25,
          marginTop: 3,
          borderRadius: 4,
          width: 100,
        }}>
        <Text
          style={{
            textAlign: 'center',
            fontSize: 12,
            color: '#7189ba',
            marginHorizontal: 10,
            letterSpacing: 1,
            borderRadius: 6,
            fontWeight: '500',
          }}>
          {label}
        </Text>
      </View>
      <View
        style={{
          borderWidth: 1,
          marginVertical: 10,
          marginHorizontal: 10,
          borderRadius: 6,
          paddingVertical: Platform.OS === 'ios' ? 10 : 0,
          borderColor: '#7189ba',
          paddingHorizontal: 10,
          flexDirection: 'row',
          alignItems: 'center',
        }}>
        <Text
          style={{
            fontSize: FlexibleDesign.fontSize,
            color: !_.isNull(placeHolder) ? 'black' : 'gray',
            fontWeight: '600',
            letterSpacing: 1,
            flex: 1,
            marginVertical: Platform.OS === 'ios' ? 2 : 12,
          }}>
          {!_.isNull(placeHolder) ? placeHolder : 'Select Country'}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default MMSelector;
