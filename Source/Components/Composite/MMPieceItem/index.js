import React from 'react';
import {View, Text, Image, FlatList, TouchableOpacity} from 'react-native';
import MMButton from '../../UI/MMButton';
import _ from 'lodash';
import {styles} from './assets';
import {MMBorderColorControlForPieceItem} from '../../../Helpers/MMBorderColorControlWithQuality';
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
              styles.flatListItemContainer,
              {
                flex:
                  index === NFTData.length - 1
                    ? index % 2 === 1
                      ? 1
                      : 0.482
                    : 1,
                marginRight: index % 2 === 0 ? 5 : 10,
                marginLeft: index % 2 === 0 ? 10 : 5,
                borderColor: MMBorderColorControlForPieceItem(item.type),
              },
            ]}>
            <View style={styles.attributesMapContainer}>
              {_.map(item.attributes, data => {
                return (
                  <View
                    style={[
                      styles.attributesValueContainer,
                      {
                        borderColor: MMBorderColorControlForPieceItem(
                          item.type,
                        ),
                      },
                    ]}>
                    <Text
                      style={[
                        styles.attributesTextValue,
                        {
                          color: MMBorderColorControlForPieceItem(item.type),
                        },
                      ]}>
                      {`+${data.Value}`}
                    </Text>
                  </View>
                );
              })}
            </View>
            <View style={styles.imageTypeNameAndLevelContainer}>
              <Image
                source={item.image}
                resizeMode={'cover'}
                style={[
                  styles.imageStyle,
                  {
                    borderColor: MMBorderColorControlForPieceItem(item.type),
                  },
                ]}
              />
              <View style={styles.typeNameAndLevelChildContainer}>
                <Text
                  style={[
                    styles.typeNameAndLevelTextStyle,
                    {
                      color: MMBorderColorControlForPieceItem(item.type),
                    },
                  ]}>
                  {item.typeName}
                </Text>
                <Text
                  style={[
                    styles.typeNameAndLevelTextStyle,
                    {
                      color: MMBorderColorControlForPieceItem(item.type),
                    },
                  ]}>
                  {`Level : ${item.level}`}
                </Text>
              </View>

              <View style={styles.priceContainer}>
                <Text style={styles.priceTextStyle}>{`${item.price} SOL`}</Text>
              </View>
            </View>

            <MMButton
              disabled={false}
              onPress={() => onPressBuyButton && onPressBuyButton(item)}
              text={'HIZLI AL'}
              textStyle={styles.buttonTextStyle}
              containerStyle={styles.buttonContainer}
            />
          </TouchableOpacity>
        )}
        numColumns={2}
      />
    </View>
  );
};

export default MMMarketItem;
