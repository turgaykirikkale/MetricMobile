import _ from 'lodash';
import React from 'react';
import {View, TextInput, Platform} from 'react-native';

const MMSearchBar = props => {
  const {data, searchData} = props;
  const controlSearchData = value => {
    if (value.length > 0) {
      let newSearchArray = [];
      _.filter(data, item => {
        if (item.name.toLowerCase().indexOf(value.toLowerCase()) > -1) {
          newSearchArray.push(item);
        }
      });

      searchData(newSearchArray);
    } else {
      const sortedData = _.sortBy(data, 'name');
      if (value.length === 0) {
        searchData([]);
      }
      searchData(sortedData);
    }
  };
  return (
    <View
      style={{
        borderWidth: 1,
        borderColor: '#ced7ea',
        borderRadius: 6,
        paddingHorizontal: 10,
        paddingVertical: 5,
        marginTop: 8,
      }}>
      <TextInput
        placeholder="Ülke adı"
        style={{marginVertical: Platform.OS === 'ios' ? 5 : -10}}
        onChangeText={value => controlSearchData(value)}
      />
    </View>
  );
};

export default MMSearchBar;
