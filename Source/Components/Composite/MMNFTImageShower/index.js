import React from 'react';
import {View, Image, TouchableOpacity} from 'react-native';
import MMButton from '../../UI/MMButton';
import {
  MMBorderColorControlWithQuality,
  MMBorderColorControlForPieceItem,
} from '../../../Helpers/MMBorderColorControlWithQuality';
import {FlexibleDesigns} from '../../../Utils/FlexibleDesign';
import {styles} from './assets/styles';
import MMVectorIcon from '../../UI/MMVectorIcon';
import {NFTImageComponentControl} from '../../../Utils/Enums';
function MMNFTImageShower(props) {
  const {setBackControl, setNextControl, item, type} = props;
  const FlexibleDesign = FlexibleDesigns();
  const windowWidth = FlexibleDesign.windowWidth;

  return (
    <View>
      <View style={styles.mainContainer}>
        {type === NFTImageComponentControl.home ? (
          <View style={styles.sliderButtonsContainer}>
            <TouchableOpacity onPress={() => setNextControl()}>
              <MMVectorIcon
                iconName={'caret-left'}
                color={'gray'}
                size={windowWidth / 8}
              />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => setBackControl && setBackControl()}>
              <MMVectorIcon
                iconName={'caret-right'}
                color={'gray'}
                size={windowWidth / 8}
              />
            </TouchableOpacity>
          </View>
        ) : null}
        <Image
          source={item.image}
          resizeMode={'cover'}
          style={[
            styles.NFTImageStyle,
            {
              borderColor:
                type === NFTImageComponentControl.NFTPieceMarket
                  ? MMBorderColorControlForPieceItem(item.type)
                  : MMBorderColorControlWithQuality(item.quality),
            },
          ]}
        />

        {type === NFTImageComponentControl.NFTPieceMarket ? null : (
          <>
            <MMButton
              containerStyle={styles.leftTopButtonContainer}
              text={item.NFT === 'PASSENGER' ? 'P' : 'B'}
              textStyle={styles.allButtonTextStyle}
            />
            <MMButton
              containerStyle={styles.rightTopButtonContainer}
              text={item.NFT === 'PASSENGER' ? 'I' : 'P'}
              textStyle={styles.allButtonTextStyle}
            />
            <MMButton
              containerStyle={styles.rightBottomButtonContainer}
              text={item.NFT === 'PASSENGER' ? 'R' : 'S'}
              textStyle={styles.allButtonTextStyle}
            />
            <MMButton
              containerStyle={styles.leftBottomButtonContainer}
              text={item.NFT === 'PASSENGER' ? 'C' : 'P'}
              textStyle={styles.allButtonTextStyle}
            />
          </>
        )}
      </View>
    </View>
  );
}
export default MMNFTImageShower;
