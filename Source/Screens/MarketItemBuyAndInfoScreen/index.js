import React, {useState} from 'react';
import {View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {SafeAreaView} from 'react-native';
import MMStandarHeader from '../../Components/UI/MMStandartHeader';
import MMButton from '../../Components/UI/MMButton';
import {ScrollView} from 'react-native-gesture-handler';
import MMItemBuyModal from '../../Components/Composite/MMItemBuyModal';
import MMNFTAttributesShower from '../../Components/Composite/MMNFTAttributesShower';
import MMMarketBuyPriceComp from '../../Components/UI/MMMarketBuyPriceComp';
import MMNFTImageShower from '../../Components/Composite/MMNFTImageShower';
import {styles} from './assets/styles';
const MarketItemBuyAndInfoScreen = props => {
  const {navigation} = props;
  const item = props?.route?.params?.item;
  const NFTTypeControl = props?.route?.params?.NFTTypeControl;
  const [showBuyModal, setShowBuyModal] = useState(false);

  console.log(props?.route?.params?.item);

  return (
    <LinearGradient
      colors={['white', '#ced7ea', '#7189ba']}
      style={styles.LinearGradienStyle}>
      <SafeAreaView style={styles.LinearGradienStyle}>
        <MMStandarHeader
          navigateToProfileStack={() =>
            navigation.navigate('ProfileStackNavigator')
          }
          navigation={navigation}
          backButton
        />
        <MMItemBuyModal
          type={NFTTypeControl}
          modalShow={showBuyModal}
          closeModal={() => setShowBuyModal(false)}
          data={item}
          onPressApprove={data =>
            alert('Buy iken alınan data bilgileri gelecek')
          }
        />
        <ScrollView style={styles.marginTop}>
          <MMNFTImageShower type={NFTTypeControl} item={item} />
          <View>
            <MMNFTAttributesShower
              data={item}
              attributesShowerType={NFTTypeControl}
            />
            <MMMarketBuyPriceComp price={item?.price} />
          </View>
        </ScrollView>
        <View style={styles.buttonMainContainer}>
          <MMButton
            onPress={() => setShowBuyModal(true)}
            text={'SATIN AL'}
            containerStyle={styles.buttonContainer}
            textStyle={styles.buttonTextStyle}
          />
        </View>
      </SafeAreaView>
    </LinearGradient>
  );
};

export default MarketItemBuyAndInfoScreen;
