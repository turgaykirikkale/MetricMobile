import React from 'react';
import {View, Text, Image, FlatList, TouchableOpacity} from 'react-native';
import MMButton from '../../UI/MMButton';
import {FlexibleDesigns} from '../../../Utils/FlexibleDesign';
import _ from 'lodash';
const MMMarketItem = props => {
  const {NFTData, onPressItem, onPressBuyButton, tabType} = props;
  const borderColorControl = type => {
    switch (type) {
      case 0:
        return '#4d7c10';
      case 1:
        return '#1150a3';
      case 2:
        return '#666b75';
      case 3:
        return '#841717';
      default:
        break;
    }
  };

  const FlexibleDesign = FlexibleDesigns();
  return (
    <View style={{flex: 1, marginBottom: 5, marginTop: 5}}>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={NFTData}
        renderItem={({item, index}) => (
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => onPressItem && onPressItem(item)}
            style={{
              flex:
                index === NFTData.length - 1
                  ? index % 2 === 1
                    ? 1
                    : 0.482
                  : 1,
              width: '100%',
              marginRight: index % 2 === 0 ? 5 : 10,
              marginLeft: index % 2 === 0 ? 10 : 5,
              marginTop: 5,
              marginBottom: 5,
              backgroundColor: '#F8F9FA',
              justifyContent: 'center',
              borderWidth: 1,
              borderRadius: 20,
              borderColor: borderColorControl(item.type),
              shadowOffset: {
                width: 5,
                height: 4,
              },
              shadowOpacity: 0.5,
              shadowRadius: 3,
              elevation: 20,
            }}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginHorizontal: 6,
                marginTop: 5,
                paddingHorizontal: 8,
              }}>
              {_.map(item.attributes, data => {
                return (
                  <View
                    style={{
                      paddingHorizontal: 6,
                      borderWidth: 1,
                      paddingVertical: 2,
                      borderRadius: 6,
                      marginTop: 5,
                      justifyContent: 'center',
                      borderColor: borderColorControl(item.type),
                    }}>
                    <Text
                      style={{
                        color: borderColorControl(item.type),
                        fontWeight: '400',
                        fontSize: FlexibleDesign.fontSize - 2,
                      }}>
                      {`+${data.Value} %`}
                    </Text>
                  </View>
                );
              })}
            </View>
            <View
              style={{
                width: '100%',
                alignSelf: 'center',
                paddingHorizontal: 10,
                marginTop: 10,
              }}>
              <Image
                source={item.image}
                resizeMode={'cover'}
                style={{
                  width: '100%',
                  height: FlexibleDesign.marketItemHeight,
                  borderWidth: 2,
                  borderRadius: 20,
                  borderColor: borderColorControl(item.type),
                }}
              />
              <View
                style={{
                  marginTop: 10,
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                }}>
                <Text
                  style={{
                    fontSize: FlexibleDesign.fontSize - 2,
                    letterSpacing: 1,
                    fontWeight: '500',
                    color: borderColorControl(item.type),
                  }}>
                  {item.typeName}
                </Text>
                <Text
                  style={{
                    color: borderColorControl(item.type),
                    fontSize: FlexibleDesign.fontSize - 2,
                    letterSpacing: 1,
                    fontWeight: '500',
                  }}>
                  {`Level : ${item.level}`}
                </Text>
              </View>
              {tabType === 0 ? (
                <View
                  style={{
                    paddingVertical: 2,
                    borderRadius: 6,
                    marginTop: 10,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <Text
                    style={{
                      fontWeight: 'bold',
                      fontSize: FlexibleDesign.fontSize + 2,
                    }}>
                    {`${item.price} SOL`}
                  </Text>
                </View>
              ) : (
                <View style={{marginTop: 10}} />
              )}
            </View>
            {tabType === 0 ? (
              <MMButton
                disabled={true}
                onPress={() => onPressBuyButton && onPressBuyButton(item)}
                text={'BUY'}
                textStyle={{
                  textAlign: 'center',
                  marginVertical: 4,
                  fontWeight: 'bold',
                  fontSize: FlexibleDesign.fontSize,
                  color: 'white',
                  letterSpacing: 1,
                }}
                containerStyle={{
                  marginTop: 4,
                  backgroundColor: '#238636',
                  marginHorizontal: 20,
                  marginBottom: 8,
                  borderRadius: 6,
                }}
              />
            ) : null}
          </TouchableOpacity>
        )}
        numColumns={2}
      />
    </View>
  );
};

export default MMMarketItem;
