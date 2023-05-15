import React, {useState} from 'react';
import {SafeAreaView, View, Text, Image, ScrollView} from 'react-native';
import MMStandarHeader from '../../Components/UI/MMStandartHeader';
import LinearGradient from 'react-native-linear-gradient';
import MMButton from '../../Components/UI/MMButton';
import MMDrawModal from '../../Components/Composite/MMDrawModal';
import _ from 'lodash';
import {styles} from './assets/styles';
import {MMBorderColorControlWithQuality} from '../../Helpers/MMBorderColorControlWithQuality';

const DrawScreenDetail = props => {
  const item = props?.route?.params?.item;

  const [showJoinModal, setShowJoinModal] = useState(false);
  const {navigation} = props;

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
  return (
    <LinearGradient
      colors={['white', '#ced7ea', '#7189ba']}
      style={styles.mainContainer}>
      <SafeAreaView style={styles.mainContainer}>
        <MMStandarHeader
          navigateToProfileStack={() =>
            navigation.navigate('ProfileStackNavigator')
          }
          navigation={navigation}
          backButton
          headerMiddle={`LUCKY DRAW`}
        />
        <MMDrawModal
          modalShow={showJoinModal}
          closeModal={() => setShowJoinModal(false)}
          item={item}
        />
        <ScrollView>
          <View style={styles.imageContainer}>
            <Image
              source={item.image}
              resizeMode={'cover'}
              style={styles.imageStyle}
            />
          </View>
          <View style={styles.boxInformationContainerStyle}>
            <Text style={styles.barTotalJoinedCountTextStyle}>{`${
              item.joined * item.price
            }/${item.total}`}</Text>
            <View style={styles.joinedBarsContainerStyle}>
              <View
                style={[
                  styles.joinedBarLeftContainerStyle,
                  {
                    flex: item.price * item.joined,

                    borderBottomRightRadius:
                      item.price * item.joined >= item.total ? 8 : 0,
                    borderTopRightRadius:
                      item.price * item.joined >= item.total ? 8 : 0,
                  },
                ]}
              />
              <View
                style={[
                  styles.joinedBarRightContainerStyle,
                  {
                    flex: item.total - item.price * item.joined,
                    borderBottomLeftRadius:
                      item.price * item.joined === 0 ? 8 : 0,
                    borderTopLeftRadius: item.price * item.joined === 0 ? 8 : 0,
                  },
                ]}
              />
            </View>
            <View
              style={[
                styles.itemTitleAndDescriptionContainer,
                {borderColor: MMBorderColorControlWithQuality(item.quality)},
              ]}>
              <Text
                style={[
                  styles.titleTextStyle,
                  {color: MMBorderColorControlWithQuality(item.quality)},
                ]}>
                {`${titleControl(item.quality)} LUCKY DRAW`}
              </Text>
              {_.map(item?.gifts, data => {
                return (
                  <View style={styles.descriptionContainerStyle}>
                    <Text
                      style={[
                        styles.descriptionNameTextStyle,
                        {color: MMBorderColorControlWithQuality(item.quality)},
                      ]}>
                      {data?.name}
                    </Text>
                    <Text
                      style={[
                        styles.descriptionNameTextStyle,
                        {color: MMBorderColorControlWithQuality(item.quality)},
                      ]}>
                      {`${data?.count} Adet`}
                    </Text>
                  </View>
                );
              })}
            </View>

            <View style={styles.rulesContainerStyle}>
              <Text style={styles.rulesTitleTextStyle}>RULES</Text>
              <Text style={styles.rulesItemTextStyle}>
                *Çekiliş 10.000 METRC'e ulaştıgında katılım sonlanacaktır.
              </Text>
              <Text style={styles.rulesItemTextStyle}>
                *Çekiliş 10.000 METRC'e ulaştığında çekiliş tarihi
                belirlenecektir.
              </Text>
              <Text style={styles.rulesItemTextStyle}>
                *Çekiliş kamera önününde canlı olarak yapılacaktır.
              </Text>
              <Text style={styles.rulesItemTextStyle}>
                *Çekilişe katıl denildiğinde çekiliş şartlarını ve koşullarını
                kabul etmiş sayılırsınız.
              </Text>
              <Text style={styles.rulesItemTextStyle}>
                *Her hesap için katılım limiti, katılım ücretinin 10x kadarıdır.
              </Text>
              <Text style={styles.rulesItemTextStyle}>
                *Her 1 METRC, 1 çekiliş biletine eşittir.
              </Text>
            </View>
          </View>
        </ScrollView>
        <View style={styles.priceTicketAndButtonContainer}>
          <View style={styles.priceAndTicketChildContainer}>
            <MMButton
              disabled={true}
              text={`Price : ${item.price} ${item.coinCode}`}
              textStyle={styles.priceAndTicketTextStyle}
              containerStyle={styles.priceContainerStyle}
            />
            <MMButton
              disabled={true}
              onPress={() => alert('Joined List')}
              text={`Ticket Price: ${item.joinTicket}`}
              textStyle={styles.priceAndTicketTextStyle}
              containerStyle={styles.ticketContainerStyle}
            />
          </View>
          <MMButton
            onPress={() => setShowJoinModal(true)}
            text={'JOIN'}
            textStyle={styles.buttonTextStyle}
            containerStyle={styles.buttonContainerStyle}
          />
        </View>
      </SafeAreaView>
    </LinearGradient>
  );
};
export default DrawScreenDetail;
