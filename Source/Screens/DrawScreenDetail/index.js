import React, {useState} from 'react';
import {SafeAreaView, View, Text, Image, ScrollView} from 'react-native';
import MMStandarHeader from '../../Components/UI/MMStandartHeader';
import LinearGradient from 'react-native-linear-gradient';
import {FlexibleDesigns} from '../../Utils/FlexibleDesign';
import MMButton from '../../Components/UI/MMButton';
import MMDrawModal from '../../Components/Composite/MMDrawModal';
import _ from 'lodash';
const DrawScreenDetail = props => {
  const FlexibleDesign = FlexibleDesigns();
  const windowWidth = FlexibleDesign.windowWidth;
  const item = props?.route?.params?.item;

  const [showJoinModal, setShowJoinModal] = useState(false);
  const {navigation} = props;
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
      style={{
        flex: 1,
      }}>
      <SafeAreaView style={{flex: 1}}>
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
          <View
            style={{
              marginHorizontal: 10,
              marginVertical: 15,
              shadowOffset: {
                width: 5,
                height: 4,
              },
              shadowOpacity: 0.5,
              shadowRadius: 3,
              elevation: 20,
            }}>
            <Image
              source={item.image}
              resizeMode={'cover'}
              style={{
                width: '100%',
                height: windowWidth / 2,
                borderRadius: 6,
              }}
            />
          </View>
          <View
            style={{
              marginHorizontal: 10,
              shadowOffset: {
                width: 5,
                height: 4,
              },
              shadowOpacity: 0.5,
              shadowRadius: 3,
              elevation: 20,
            }}>
            <Text
              style={{
                position: 'absolute',
                zIndex: 999,
                fontSize: 12,
                right: 0,
                marginRight: 6,
                fontWeight: 'bold',
                letterSpacing: 0.7,
              }}>{`${item.joined * item.price}/${item.total}`}</Text>
            <View style={{flexDirection: 'row'}}>
              <View
                style={{
                  backgroundColor: '#238636',
                  height: 15,
                  flex: item.price * item.joined,
                  borderBottomLeftRadius: 8,
                  borderTopLeftRadius: 8,
                  borderBottomRightRadius:
                    item.price * item.joined >= item.total ? 8 : 0,
                  borderTopRightRadius:
                    item.price * item.joined >= item.total ? 8 : 0,
                }}
              />
              <View
                style={{
                  backgroundColor: '#c4c3c9',
                  height: 15,
                  flex: item.total - item.price * item.joined,
                  borderBottomLeftRadius:
                    item.price * item.joined === 0 ? 8 : 0,
                  borderTopLeftRadius: item.price * item.joined === 0 ? 8 : 0,
                  borderBottomRightRadius: 8,
                  borderTopRightRadius: 8,
                }}
              />
            </View>
            <View
              style={{
                marginVertical: 15,
                // borderWidth: 1,
                borderRadius: 4,
                backgroundColor: 'white',
                borderColor: borderColorControl(item.quality),
                paddingHorizontal: 10,
                paddingVertical: 10,
              }}>
              <Text
                style={{
                  letterSpacing: 0.7,
                  fontWeight: 'bold',
                  color: borderColorControl(item.quality),
                  marginBottom: 6,
                }}>
                {`${titleControl(item.quality)} LUCKY DRAW`}
              </Text>
              {_.map(item?.gifts, data => {
                return (
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      marginTop: 3,
                    }}>
                    <Text
                      style={{
                        letterSpacing: 0.7,
                        fontWeight: '400',
                        color: borderColorControl(item.quality),
                      }}>
                      {data?.name}
                    </Text>
                    <Text
                      style={{
                        letterSpacing: 0.7,
                        fontWeight: '400',
                        color: borderColorControl(item.quality),
                      }}>
                      {`${data?.count} Adet`}
                    </Text>
                  </View>
                );
              })}
            </View>

            <View
              style={{
                paddingHorizontal: 10,
                paddingVertical: 10,
                // borderWidth: 1,
                borderRadius: 6,
                backgroundColor: 'white',
              }}>
              <Text
                style={{
                  fontSize: FlexibleDesign.fontSize,
                  fontWeight: 'bold',
                }}>
                RULES
              </Text>
              <Text
                style={{
                  fontSize: FlexibleDesign.fontSize - 4,
                  marginTop: 6,
                }}>
                *Çekiliş 10.000 METRC'e ulaştıgında katılım sonlanacaktır.
              </Text>
              <Text
                style={{
                  marginVertical: 6,
                  fontSize: FlexibleDesign.fontSize - 4,
                }}>
                *Çekiliş 10.000 METRC'e ulaştığında çekiliş tarihi
                belirlenecektir.
              </Text>
              <Text
                style={{
                  fontSize: FlexibleDesign.fontSize - 4,
                }}>
                *Çekiliş kamera önününde canlı olarak yapılacaktır.
              </Text>
              <Text
                style={{
                  fontSize: FlexibleDesign.fontSize - 4,
                  marginTop: 6,
                }}>
                *Çekilişe katıl denildiğinde çekiliş şartlarını ve koşullarını
                kabul etmiş sayılırsınız.
              </Text>
              <Text
                style={{
                  fontSize: FlexibleDesign.fontSize - 4,
                  marginTop: 6,
                }}>
                *Her hesap için katılım limiti, katılım ücretinin 10x kadarıdır.
              </Text>
              <Text
                style={{
                  fontSize: FlexibleDesign.fontSize - 4,
                  marginTop: 6,
                }}>
                *Her 1 METRC, 1 çekiliş biletine eşittir.
              </Text>
            </View>
          </View>
        </ScrollView>
        <View style={{marginHorizontal: 10}}>
          <View
            style={{
              // borderWidth: 2,
              borderRadius: 6,
              paddingVertical: 10,
              paddingHorizontal: 8,
              flexDirection: 'row',
              marginBottom: 10,
              backgroundColor: '#ced7ea',
            }}>
            <MMButton
              disabled={true}
              text={`Price : ${item.price} ${item.coinCode}`}
              textStyle={{
                fontWeight: 'bold',
                letterSpacing: 0.7,
                fontSize: 10,
                color: '#7189ba',
              }}
              containerStyle={{
                flex: 1,
                borderWidth: 1,
                paddingHorizontal: 6,
                borderRadius: 6,
                alignItems: 'center',
                justifyContent: 'center',
                marginRight: 10,
                paddingVertical: 4,
                borderColor: '#7189ba',
              }}
            />
            <MMButton
              disabled={true}
              onPress={() => alert('Joined List')}
              text={`Ticket Price: ${item.joinTicket}`}
              textStyle={{
                fontWeight: 'bold',
                letterSpacing: 0.7,
                fontSize: 10,
                color: '#7189ba',
              }}
              containerStyle={{
                marginLeft: 10,
                alignItems: 'center',
                justifyContent: 'center',
                flex: 1,
                borderWidth: 1,
                paddingHorizontal: 6,
                borderRadius: 6,
                paddingVertical: 4,
                borderColor: '#7189ba',
              }}
            />
          </View>
          <MMButton
            onPress={() => setShowJoinModal(true)}
            text={'JOIN'}
            textStyle={{color: 'white', fontWeight: '500', letterSpacing: 0.7}}
            containerStyle={{
              marginBottom: 5,
              alignItems: 'center',
              paddingVertical: 8,
              borderRadius: 6,
              backgroundColor: '#238636',
            }}
          />
        </View>
      </SafeAreaView>
    </LinearGradient>
  );
};
export default DrawScreenDetail;
