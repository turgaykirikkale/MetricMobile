import React from 'react';
import {View, Text, Image, FlatList, TouchableOpacity} from 'react-native';
import MMButton from '../../UI/MMButton';
import {FlexibleDesigns} from '../../../Utils/FlexibleDesign';

const MMMarketItem = props => {
  const {NFTData, onPressItem, onPressBuyButton, tabType} = props;
  const borderColorControl = quality => {
    switch (quality) {
      case 0:
        return '#afaeae';
      case 1:
        return '#764027';
      case 2:
        return '#52A346';
      case 3:
        return '#FD8002';
      case 4:
        return '#001388';
      case 5:
        return '#6F007F';
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
              // width: '100%',
              marginRight: index % 2 === 0 ? 5 : 10,
              marginLeft: index % 2 === 0 ? 10 : 5,
              marginTop: 5,
              marginBottom: 5,
              backgroundColor: '#F8F9FA',
              // height: windowWidth / 1.8,
              justifyContent: 'center',
              borderWidth: 1,
              borderRadius: 20,
              borderColor: borderColorControl(item.quality),
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
                // width: '100%',
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginHorizontal: 6,
                marginTop: 5,
              }}>
              <View
                style={{
                  paddingHorizontal: 8,
                  borderWidth: 1,
                  paddingVertical: 2,
                  borderRadius: 6,
                  marginTop: 5,
                  marginLeft: 6,
                  justifyContent: 'center',
                  borderColor: borderColorControl(item.quality),
                }}>
                <Text
                  style={{
                    color: borderColorControl(item.quality),
                    fontWeight: '400',
                    fontSize: FlexibleDesign.fontSize - 2,
                  }}>
                  {item.code}
                </Text>
              </View>
              <View
                style={{
                  paddingHorizontal: 8,
                  paddingVertical: 2,
                  borderColor: borderColorControl(item.quality),
                  borderWidth: 1,
                  borderRadius: 6,
                  marginTop: 5,
                  marginRight: 6,
                  justifyContent: 'center',
                }}>
                <Text
                  style={{
                    fontSize: FlexibleDesign.fontSize - 2,
                    fontWeight: '400',
                    color: borderColorControl(item.quality),
                  }}>
                  {item.typeName}
                </Text>
              </View>
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
                  borderColor: borderColorControl(item.quality),
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
                    color: borderColorControl(item.quality),
                  }}>
                  {item.qualityName}
                </Text>
                <Text
                  style={{
                    fontSize: FlexibleDesign.fontSize - 2,
                    letterSpacing: 1,
                    fontWeight: '500',
                    color: borderColorControl(item.quality),
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
              ) : null}
            </View>
            {tabType === 0 ? (
              <MMButton
                disabled={false}
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
            ) : (
              <View style={{marginTop: 10}} />
            )}
          </TouchableOpacity>
        )}
        numColumns={2}
      />
    </View>
  );
};

export default MMMarketItem;
