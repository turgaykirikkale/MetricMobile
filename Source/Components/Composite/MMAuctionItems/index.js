import React from 'react';
import {View, Text, Image} from 'react-native';
import MMButton from '../../UI/MMButton';
import {styles} from './assets/styles';
import {MMBorderColorControlWithQuality} from '../../../Helpers/MMBorderColorControlWithQuality';

const MMAuctionItems = props => {
  const {item, onPress} = props;
  return (
    <View
      style={[
        styles.mainContainer,
        {borderColor: MMBorderColorControlWithQuality(item?.NFTInfo?.quality)},
      ]}>
      <View>
        <View style={styles.headerContainer}>
          <View
            style={[
              styles.NFTNameTypeContainer,
              {
                borderColor: MMBorderColorControlWithQuality(
                  item?.NFTInfo?.quality,
                ),
              },
            ]}>
            <Text
              style={[
                styles.headerAllTextStyle,
                {
                  color: MMBorderColorControlWithQuality(
                    item?.NFTInfo?.quality,
                  ),
                },
              ]}>
              {item.NFTInfo?.NFT}
            </Text>
          </View>
          <View
            style={[
              styles.NFTQualityContainer,
              {
                borderColor: MMBorderColorControlWithQuality(
                  item?.NFTInfo?.quality,
                ),
              },
            ]}>
            <Text
              style={[
                styles.headerAllTextStyle,
                {
                  color: MMBorderColorControlWithQuality(
                    item?.NFTInfo?.quality,
                  ),
                },
              ]}>
              {item.NFTInfo?.qualityName}
            </Text>
          </View>
          <View
            style={[
              styles.NFTChildTypeNameContainer,
              {
                borderColor: MMBorderColorControlWithQuality(
                  item?.NFTInfo?.quality,
                ),
              },
            ]}>
            <Text
              style={[
                styles.headerAllTextStyle,
                {
                  color: MMBorderColorControlWithQuality(
                    item?.NFTInfo?.quality,
                  ),
                },
              ]}>
              {item.NFTInfo?.typeName}
            </Text>
          </View>
        </View>
        <View style={styles.auctionDetailContainer}>
          <View style={styles.flex1}>
            <View style={styles.auctionDetailItemContainer}>
              <Text style={styles.auctionDetailItemTextStyle}>Code:</Text>
              <Text style={styles.auctionDetailItemTextStyle}>
                {item?.NFTInfo?.code}
              </Text>
            </View>
            <View style={styles.auctionDetailItemContainer}>
              <Text style={styles.auctionDetailItemTextStyle}>Owner:</Text>
              <Text style={styles.auctionDetailItemTextStyle}>
                {`${item.ownerName} ${item.ownerSurname}`}
              </Text>
            </View>
            <View style={styles.auctionDetailItemContainer}>
              <Text style={styles.auctionDetailItemTextStyle}>
                Start Date :
              </Text>
              <Text style={styles.auctionDetailItemTextStyle}>
                {item?.startDate}
              </Text>
            </View>
            <View style={styles.auctionDetailItemContainer}>
              <Text style={styles.auctionDetailItemTextStyle}>End Date :</Text>
              <Text style={styles.auctionDetailItemTextStyle}>
                {item?.endDate}
              </Text>
            </View>
            <View style={styles.auctionDetailItemContainer}>
              <Text style={styles.auctionDetailItemTextStyle}>
                Lowest Bid Possible :
              </Text>
              <Text style={styles.auctionDetailItemTextStyle}>
                {`${item?.lowestPrice} ${item?.coinCode}`}
              </Text>
            </View>
            <View style={styles.auctionDetailItemContainer}>
              <Text style={styles.auctionDetailItemTextStyle}>
                Highest Bid Possible :
              </Text>
              <Text style={styles.auctionDetailItemTextStyle}>
                {`${item?.highestPrice} ${item?.coinCode}`}
              </Text>
            </View>
            <View style={styles.auctionDetailItemContainer}>
              <Text style={styles.auctionDetailItemTextStyle}>
                Current Highest Bid :
              </Text>
              <Text style={styles.auctionDetailItemTextStyle}>
                {`${item?.currentHighPrice} ${item?.coinCode}`}
              </Text>
            </View>
          </View>
          <View style={styles.imageContainer}>
            <Image
              source={item?.NFTInfo?.image}
              resizeMode={'cover'}
              style={[
                styles.imageStyle,
                {
                  borderColor: MMBorderColorControlWithQuality(
                    item?.NFTInfo?.quality,
                  ),
                },
              ]}
            />
          </View>
        </View>

        <MMButton
          text={'TEKLİF VER'}
          containerStyle={[
            styles.buttonContainer,
            {
              backgroundColor: MMBorderColorControlWithQuality(
                item?.NFTInfo?.quality,
              ),
            },
          ]}
          textStyle={styles.buttonTextStyle}
          onPress={() => onPress && onPress(item)}
        />
      </View>
    </View>
  );
};
export default MMAuctionItems;
