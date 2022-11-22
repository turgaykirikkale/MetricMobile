import React from 'react';
import {View, Text, SafeAreaView, ScrollView, Image} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import MMStandarHeader from '../../Components/UI/MMStandartHeader';
import MMButton from '../../Components/UI/MMButton';
import {FlexibleDesigns} from '../../Utils/FlexibleDesign';
import MMMarketItemValuesShower from '../../Components/Composite/MMMarketItemValuesShower';
const NFTItemDetail = props => {
  const FlexibleDesign = FlexibleDesigns();
  const windowWidth = FlexibleDesign.windowWidth;
  const {navigation} = props;
  const item = props?.route?.params?.item;
  const type = props?.route?.params?.type;
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
            <MMMarketItemValuesShower
              quality={type}
              option={type}
              type={1} //type sahip olunan type
              data={item}
            />
          </View>
        </ScrollView>
      </SafeAreaView>
    </LinearGradient>
  );
};
export default NFTItemDetail;
