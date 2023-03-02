import React from 'react';
import {View, Text} from 'react-native';
import MMButton from '../../UI/MMButton';
import _ from 'lodash';
import {styles} from './assets';
import {NFTImageComponentControl} from '../../../Utils/Enums';
import {MMBorderColorControlForPieceItem} from '../../../Helpers/MMBorderColorControlWithQuality';
function MMNFTAttributesShower(props) {
  const {data, attributesShowerType} = props;

  console.log('ADADAD', data);
  return (
    <View style={styles.mainContainer}>
      <View style={styles.NFTInnerTypeNameAndIDContainer}>
        <Text style={styles.NFTInnerTypeNameAndIDTextStyle}>
          {data.typeName}
        </Text>
        <Text style={styles.NFTInnerTypeNameAndIDTextStyle}>{data.code}</Text>
      </View>
      <View style={styles.NFTLevelTypeQuailityContainer}>
        <MMButton
          text={`LEVEL : ${data.level}`}
          textStyle={styles.NFTLevelTypeQuailityButtonTextStyle}
          containerStyle={styles.NFTLevelTypeQuailityButtonContainer}
        />
        <MMButton
          text={data.NFT}
          textStyle={styles.NFTLevelTypeQuailityButtonTextStyle}
          containerStyle={styles.NFTLevelTypeQuailityButtonContainer}
        />
        <MMButton
          text={`${data.qualityName ? data.qualityName : data.NFT}`}
          textStyle={styles.NFTLevelTypeQuailityButtonTextStyle}
          containerStyle={styles.NFTLevelTypeQuailityButtonContainer}
        />
      </View>
      <View style={styles.NFTAttributesContainer}>
        {_.map(data.attributes, (item, index) => {
          return (
            <View style={styles.NFTAttributesItemContainer}>
              <View
                style={[
                  styles.NFTAttributesSymbolContainer,
                  {
                    backgroundColor:
                      attributesShowerType ===
                      NFTImageComponentControl.NFTPieceMarket
                        ? 'red'
                        : MMBorderColorControlForPieceItem(item.type),
                  },
                ]}
              />
              <Text
                style={[
                  styles.NFTAttributesItemTitleStyle,
                  {
                    color: MMBorderColorControlForPieceItem(
                      attributesShowerType ===
                        NFTImageComponentControl.NFTPieceMarket
                        ? data.type
                        : item.type,
                    ),
                  },
                ]}>
                {item.title}
              </Text>
              <Text
                style={[
                  styles.NFTAttributesItemValueStyle,
                  {
                    color: MMBorderColorControlForPieceItem(
                      attributesShowerType ===
                        NFTImageComponentControl.NFTPieceMarket
                        ? data.type
                        : item.type,
                    ),
                  },
                ]}>
                {item.Value}
              </Text>
            </View>
          );
        })}
      </View>
    </View>
  );
}

export default MMNFTAttributesShower;
