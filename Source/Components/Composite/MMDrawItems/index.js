import React from 'react';
import {View, Image, Text} from 'react-native';
import MMButton from '../../UI/MMButton';
import {MMBorderColorControlWithQuality} from '../../../Helpers/MMBorderColorControlWithQuality';
import {styles} from './assets/styles';
const MMDrawItems = props => {
  const {item, onPressJoin, onPresNavigateDetail} = props;

  const titleControl = quality => {
    switch (quality) {
      case 0:
        return 'IRON';
      case 1:
        return 'BRONZE';
      case 2:
        return 'SILVER';
      case 3:
        return 'GOLD';
      case 4:
        return 'PLATINUM';
      case 5:
        return 'DIAMOND';
      default:
        break;
    }
  };
  /*
  IRON = quality 0,
  BRONZE = quality 1,
  SILVER = quality 2,
  GOLD = quality 3,
  PLATINUM =quality 4,
  DIAMOND = quality 5,
  */
  return (
    <View
      style={[
        styles.mainContainer,
        {borderColor: MMBorderColorControlWithQuality(item.quality)},
      ]}>
      <View style={styles.childContainerStyle}>
        <View>
          <Image
            source={item.image}
            resizeMode={'cover'}
            style={[
              styles.imageStyle,
              {borderColor: MMBorderColorControlWithQuality(item.quality)},
            ]}
          />
        </View>
        <View style={styles.informationContainerStyle}>
          <View style={styles.titleContainerStyle}>
            <Text
              style={[
                styles.titleTextStyle,
                {color: MMBorderColorControlWithQuality(item.quality)},
              ]}>
              {`${titleControl(item.quality)} LUCKY DRAW`}
            </Text>
          </View>

          <Text numberOfLines={1} style={styles.descriptionTextStyle}>
            {item.description}
          </Text>

          <View>
            <Text style={styles.joinedBarTotalCountStyle}>{`${
              item.joined * item.price
            }/${item.total}`}</Text>
            <View style={{flexDirection: 'row'}}>
              <View
                style={[
                  styles.joinedBarOneStyle,
                  {
                    flex: item.price * item.joined,

                    borderBottomRightRadius:
                      item.price * item.joined >= item.total ? 6 : 0,
                    borderTopRightRadius:
                      item.price * item.joined >= item.total ? 6 : 0,
                  },
                ]}
              />
              <View
                style={[
                  styles.joinedBarTwoStyle,
                  {
                    flex: item.total - item.price * item.joined,
                    borderBottomLeftRadius:
                      item.price * item.joined === 0 ? 6 : 0,
                    borderTopLeftRadius: item.price * item.joined === 0 ? 6 : 0,
                  },
                ]}
              />
            </View>
          </View>
          <View style={styles.buttonAndPriceContainer}>
            <View style={styles.priceContainer}>
              <Text style={styles.cryptoPriceTextStyle}>
                {`${item.price} ${item.coinCode}`}
              </Text>
              <Text style={styles.ticketPriceTextStyle}>
                {`${item.joinTicket} Ticket`}
              </Text>
            </View>
            <MMButton
              onPress={() => onPresNavigateDetail && onPresNavigateDetail(item)}
              text={'DETAİL'}
              textStyle={styles.buttonTextStyle}
              containerStyle={[
                styles.buttonContainerStyle,
                {
                  backgroundColor: MMBorderColorControlWithQuality(
                    item.quality,
                  ),
                },
              ]}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

export default MMDrawItems;
