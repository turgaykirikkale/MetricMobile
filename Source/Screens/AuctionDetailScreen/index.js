import React, {useState} from 'react';
import {View, SafeAreaView, Image} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import MMStandarHeader from '../../Components/UI/MMStandartHeader';
import {FlexibleDesigns} from '../../Utils/FlexibleDesign';
import MMButton from '../../Components/UI/MMButton';
import MMMarketItemValuesShower from '../../Components/Composite/MMMarketItemValuesShower';
import MMTextInput from '../../Components/UI/MMTextInput';
import {rulesEnums} from '../../Utils/Enums';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

//burayaValuesShower içine teklifleri gösterebilecek data da eklenecek.
//Teklif Ver butonuna tıklanın info modeli açılacak eğer ki onaylanırsa succes modeli açılacak
//değilse error modalı ve işlem tamamlandığında wallet adresinden düşülecek stake yapısı gibi.
const AuctionDetailScreen = props => {
  const {navigation} = props;
  const FlexibleDesign = FlexibleDesigns();
  const windowWidth = FlexibleDesign.windowWidth;
  const item = props?.route?.params?.item;
  const [pid, setPid] = useState('');

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
  console.log(pid);
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
          headerMiddle={`AUCTION`}
        />

        <KeyboardAwareScrollView
          style={{flex: 1, marginTop: 8}}
          showsVerticalScrollIndicator={false}>
          <View
            style={{
              marginHorizontal: 10,
              marginBottom: 5,
              shadowColor: FlexibleDesign.shadowColor,
              shadowOffset: {
                width: 5,
                height: 4,
              },
              shadowOpacity: 0.5,
              shadowRadius: 3,
              elevation: 20,
            }}>
            <Image
              source={item?.NFTInfo?.image}
              resizeMode={'cover'}
              style={{
                borderRadius: 6,
                width: '100%',
                height: windowWidth / 1.3,
                borderWidth: 4,
                borderColor: borderColorControl(item?.NFTInfo?.quality),
              }}
            />
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
          </View>
          <View>
            <MMMarketItemValuesShower
              quality={item?.NFTInfo?.quality}
              type={3}
              data={item?.NFTInfo}
              auctionData={item}
            />
          </View>

          <View
            style={{
              marginBottom: 10,
              marginHorizontal: 15,
              borderRadius: 6,
              backgroundColor: 'white',
              paddingBottom: 10,
              shadowColor: FlexibleDesign.shadowColor,
              shadowOffset: {
                width: 5,
                height: 4,
              },
              shadowOpacity: 0.5,
              shadowRadius: 3,
              elevation: 20,
            }}>
            <MMTextInput
              keyboardType={'numeric'}
              value={pid}
              placeHolder={'Teklif'}
              label={'Teklif'}
              ruleType={rulesEnums.moneyInput}
              onChangeValue={value => setPid(value)}
            />
          </View>
          <View
            style={{
              borderRadius: 6,
              shadowColor: FlexibleDesign.shadowColor,
              shadowOffset: {
                width: 5,
                height: 4,
              },
              shadowOpacity: 0.5,
              shadowRadius: 3,
              elevation: 20,
              marginBottom: 15,
            }}>
            <MMButton
              text={'Teklif Ver'}
              textStyle={{
                color: 'white',
                fontWeight: '500',
                letterSpacing: 0.7,
              }}
              containerStyle={{
                marginBottom: 5,
                alignItems: 'center',
                paddingVertical: 8,
                borderRadius: 6,
                marginHorizontal: 15,
                backgroundColor: '#238636',
              }}
            />
          </View>
        </KeyboardAwareScrollView>
      </SafeAreaView>
    </LinearGradient>
  );
};
export default AuctionDetailScreen;
