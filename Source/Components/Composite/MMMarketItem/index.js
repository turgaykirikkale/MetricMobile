import React from 'react';
import {View, Text, Image, FlatList, TouchableOpacity} from 'react-native';
import MMButton from '../../UI/MMButton';
import {styles} from './assets/styles';
import {MMBorderColorControlWithQuality} from '../../../Helpers/MMBorderColorControlWithQuality';

const MMMarketItem = props => {
  const {NFTData, onPressItem, onPressBuyButton, tabType} = props;

  return (
    <View style={styles.mainContainer}>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={NFTData}
        renderItem={({item, index}) => (
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => onPressItem && onPressItem(item)}
            style={[
              styles.FlatListItemContainer,
              {
                flex:
                  index === NFTData.length - 1
                    ? index % 2 === 1
                      ? 1
                      : 0.482
                    : 1,
                // width: '100%',
                marginRight: index % 2 === 0 ? 5 : 10,
                marginLeft: index % 2 === 0 ? 10 : 5,

                borderColor: MMBorderColorControlWithQuality(item.quality),
              },
            ]}>
            <View style={styles.itemIDAndTypeContainer}>
              <View
                style={[
                  styles.itemIDContainer,
                  {borderColor: MMBorderColorControlWithQuality(item.quality)},
                ]}>
                <Text
                  style={[
                    styles.itemIDTextStyle,
                    {color: MMBorderColorControlWithQuality(item.quality)},
                  ]}>
                  {item.code}
                </Text>
              </View>
              <View
                style={[
                  styles.itemTypeNameContainer,
                  {
                    borderColor: MMBorderColorControlWithQuality(item.quality),
                  },
                ]}>
                <Text
                  style={[
                    styles.itemTypeNameTextStyle,
                    {
                      color: MMBorderColorControlWithQuality(item.quality),
                    },
                  ]}>
                  {item.typeName}
                </Text>
              </View>
            </View>
            <View style={styles.imageContainerLabelAndPriceContainer}>
              <Image
                source={item.image}
                resizeMode={'cover'}
                style={[
                  styles.imageStyle,
                  {borderColor: MMBorderColorControlWithQuality(item.quality)},
                ]}
              />
              <View style={styles.itemQualityNameAndLevelContainer}>
                <Text
                  style={[
                    styles.itemQualityTextStyle,
                    {
                      color: MMBorderColorControlWithQuality(item.quality),
                    },
                  ]}>
                  {item.qualityName}
                </Text>
                <Text
                  style={[
                    styles.itemQualityTextStyle,
                    {
                      color: MMBorderColorControlWithQuality(item.quality),
                    },
                  ]}>
                  {`Level : ${item.level}`}
                </Text>
              </View>
              <View style={styles.priceContainerStyle}>
                <Text style={styles.priceTextStyle}>{`${item.price} SOL`}</Text>
              </View>
            </View>

            <MMButton
              disabled={false}
              onPress={() => onPressBuyButton && onPressBuyButton(item)}
              text={'HIZLI AL'}
              textStyle={styles.buyButtonTextStyle}
              containerStyle={styles.buyButtonContainerStyle}
            />
          </TouchableOpacity>
        )}
        numColumns={2}
      />
    </View>
  );
};

export default MMMarketItem;
