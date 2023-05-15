import React from 'react';
import {View, Text, Image, FlatList, TouchableOpacity} from 'react-native';
import MMButton from '../../UI/MMButton';
import {styles} from './assets/styles';
import {MMBorderColorControlWithQuality} from '../../../Helpers/MMBorderColorControlWithQuality';
const MMMarketOtherItems = props => {
  const {data, onPressItem, onPressBuyButton} = props;

  return (
    <View style={styles.mainContainer}>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={data}
        renderItem={({item, index}) => (
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => onPressItem && onPressItem(item)}
            style={[
              styles.flatListItemContainer,
              {
                flex:
                  index === data.length - 1 ? (index % 2 === 1 ? 1 : 0.482) : 1,
                marginRight: index % 2 === 0 ? 5 : 10,
                marginLeft: index % 2 === 0 ? 10 : 5,
                marginTop: 5,
                borderColor: MMBorderColorControlWithQuality(item.quality),
              },
            ]}>
            <View style={styles.headerImagePriceContainer}>
              <View style={styles.headerContainer}>
                <Text
                  style={[
                    styles.headerTextStyle,
                    {
                      color: MMBorderColorControlWithQuality(item.quality),
                    },
                  ]}>
                  {`${item.name} ${item.code}`}
                </Text>
              </View>
              <Image
                source={item.image}
                resizeMode={'contain'}
                style={[
                  styles.imageStyle,
                  {
                    borderColor: MMBorderColorControlWithQuality(item.quality),
                  },
                ]}
              />
              <View style={styles.itemValueAndQualityContainer}>
                <Text
                  style={[
                    styles.itemValueAndQualityTextStyle,
                    {
                      color: MMBorderColorControlWithQuality(item.quality),
                    },
                  ]}>
                  {`${item.value ? item.value : ''} ${item.name}`}
                </Text>
                <Text
                  style={[
                    styles.itemValueAndQualityTextStyle,
                    {
                      color: MMBorderColorControlWithQuality(item.quality),
                    },
                  ]}>
                  {`${item.qualityName ? item.qualityName : ''}`}
                </Text>
              </View>

              <View style={styles.priceContainer}>
                <Text style={styles.priceTextStyle}>{`${item.price} SOL`}</Text>
              </View>
            </View>

            <MMButton
              onPress={() => onPressBuyButton && onPressBuyButton(item)}
              text={'HIZLI AL'}
              textStyle={styles.buttonTextStyle}
              containerStyle={styles.buttonContainerStyle}
            />
          </TouchableOpacity>
        )}
        numColumns={2}
      />
    </View>
  );
};

export default MMMarketOtherItems;
