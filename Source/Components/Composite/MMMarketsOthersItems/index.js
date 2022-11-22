import React from 'react';
import {View, Text, Image, FlatList, TouchableOpacity} from 'react-native';
import MMButton from '../../UI/MMButton';
import {FlexibleDesigns} from '../../../Utils/FlexibleDesign';

const MMMarketOtherItems = props => {
  const {data, onPressItem, onPressBuyButton, tabType} = props;
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
  const windowWidth = FlexibleDesign.windowWidth;
  return (
    <View style={{flex: 1, marginBottom: 5, marginTop: 5}}>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={data}
        renderItem={({item, index}) => (
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => onPressItem && onPressItem(item)}
            style={{
              flex:
                index === data.length - 1 ? (index % 2 === 1 ? 1 : 0.482) : 1,
              width: '100%',
              marginRight: index % 2 === 0 ? 5 : 10,
              marginLeft: index % 2 === 0 ? 10 : 5,
              marginTop: 5,
              marginBottom: 5,
              backgroundColor: '#F8F9FA',
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
                width: '100%',
                alignSelf: 'center',
                paddingHorizontal: 10,
                marginTop: 5,
              }}>
              <View
                style={{
                  paddingHorizontal: 8,
                  paddingVertical: 2,
                  marginRight: 6,
                  justifyContent: 'center',
                  marginVertical: 8,
                  alignItems: 'center',
                }}>
                <Text
                  style={{
                    fontSize: FlexibleDesign.fontSize - 2,
                    fontWeight: '400',
                    color: borderColorControl(item.quality),
                  }}>
                  {`${item.name} ${item.code}`}
                </Text>
              </View>
              <Image
                source={item.image}
                resizeMode={'contain'}
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
                  marginTop: 20,
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                }}>
                <Text
                  style={{
                    fontSize: 10,
                    letterSpacing: 1,
                    fontWeight: '500',
                    color: borderColorControl(item.quality),
                  }}>
                  {`${item.value ? item.value : ''} ${item.name}`}
                </Text>
                <Text
                  style={{
                    fontSize: 10,
                    letterSpacing: 1,
                    fontWeight: '500',
                    color: borderColorControl(item.quality),
                  }}>
                  {`${item.qualityName ? item.qualityName : ''}`}
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
                      fontSize: 14,
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

export default MMMarketOtherItems;
