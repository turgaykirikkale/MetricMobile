import React, {useState} from 'react';
import {View, Text, Image} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {SafeAreaView} from 'react-native';
import MMStandarHeader from '../../Components/UI/MMStandartHeader';
import MMButton from '../../Components/UI/MMButton';
import {FlexibleDesigns} from '../../Utils/FlexibleDesign';
import MMMarketItemValuesShower from '../../Components/Composite/MMMarketItemValuesShower';
import {ScrollView} from 'react-native-gesture-handler';
import MMItemBuyModal from '../../Components/Composite/MMItemBuyModal';

const MarketItemBuyAndInfoScreen = props => {
  const FlexibleDesign = FlexibleDesigns();
  const windowWidth = FlexibleDesign.windowWidth;
  const type = props?.route?.params?.type;
  const [showBuyModal, setShowBuyModal] = useState(false);

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
  const borderControlForPieceItem = typeNumber => {
    switch (typeNumber) {
      case 0:
        return '#4d7c10';
      case 1:
        return '#1150a3';
      case 2:
        return '#666b75';
      case 3:
        return '#841717';
      default:
        break;
    }
  };
  const {navigation} = props;
  console.log(props?.route?.params?.item);
  const item = props?.route?.params?.item;
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
        />
        <MMItemBuyModal
          type={type}
          modalShow={showBuyModal}
          closeModal={() => setShowBuyModal(false)}
          data={item}
          onPressApprove={data =>
            alert('Buy iken alınan data bilgileri gelecek')
          }
        />
        <ScrollView style={{marginTop: 5}}>
          <View
            style={{
              marginHorizontal: 10,
              marginBottom: 5,
              shadowColor: FlexibleDesign.shadowColor,
              shadowOffset: {
                width: 8,
                height: 10,
              },
              shadowOpacity: 0.5,
              shadowRadius: 5,
              elevation: 20,
            }}>
            <Image
              source={item.image}
              resizeMode={'cover'}
              style={{
                borderRadius: 6,
                width: '100%',
                height: windowWidth / 1.3,
                borderWidth: 4,

                borderColor:
                  type === 0
                    ? borderColorControl(item.quality)
                    : borderControlForPieceItem(item.type),
              }}
            />
            {type === 0 ? (
              <>
                <MMButton
                  containerStyle={{
                    width: 50,
                    height: 50,
                    backgroundColor: '#4d7c10',
                    position: 'absolute',
                    left: 15,
                    top: 15,
                    borderRadius: 10,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                  text={item.NFT === 'PASSENGER' ? 'P' : 'B'}
                  textStyle={{
                    fontSize: FlexibleDesign.fontSize + 12,
                    fontWeight: 'bold',
                  }}
                />
                <MMButton
                  containerStyle={{
                    width: 50,
                    height: 50,
                    backgroundColor: '#1150a3',
                    position: 'absolute',
                    right: 15,
                    top: 15,
                    borderRadius: 10,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                  text={item.NFT === 'PASSENGER' ? 'I' : 'P'}
                  textStyle={{
                    fontSize: FlexibleDesign.fontSize + 12,
                    fontWeight: 'bold',
                  }}
                />
                <MMButton
                  containerStyle={{
                    width: 50,
                    height: 50,
                    backgroundColor: '#841717',
                    position: 'absolute',
                    right: 15,
                    bottom: 15,
                    borderRadius: 10,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                  text={item.NFT === 'PASSENGER' ? 'R' : 'S'}
                  textStyle={{
                    fontSize: FlexibleDesign.fontSize + 12,
                    fontWeight: 'bold',
                  }}
                />
                <MMButton
                  containerStyle={{
                    width: 50,
                    height: 50,
                    backgroundColor: '#666b75',
                    position: 'absolute',
                    left: 15,
                    bottom: 15,
                    borderRadius: 10,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                  text={item.NFT === 'PASSENGER' ? 'C' : 'P'}
                  textStyle={{
                    fontSize: FlexibleDesign.fontSize + 12,
                    fontWeight: 'bold',
                  }}
                />
              </>
            ) : null}
          </View>
          <View>
            <MMMarketItemValuesShower quality={type} type={0} data={item} />
          </View>
        </ScrollView>
        <View
          style={{
            flexDirection: 'row',
            marginVertical: 5,
          }}>
          <MMButton
            onPress={() => setShowBuyModal(true)}
            text={'SATIN AL'}
            containerStyle={{
              flex: 1,
              alignItems: 'center',
              backgroundColor: '#238636',
            }}
            textStyle={{
              fontSize: FlexibleDesign.fontSize,
              color: 'white',
              fontWeight: 'bold',
              letterSpacing: 0.7,
              marginVertical: 10,
            }}
          />
        </View>
      </SafeAreaView>
    </LinearGradient>
  );
};

export default MarketItemBuyAndInfoScreen;
