//BURASI DUZELTILECEK BUY IKEN CUZDAN VE DIGERLERI EKLENECEK

import React, {useState} from 'react';
import {TouchableOpacity, View, Text, Modal, Image} from 'react-native';
import MMButton from '../../UI/MMButton';
import {FlexibleDesigns} from '../../../Utils/FlexibleDesign';
const MMDrawModal = props => {
  const {modalShow, closeModal, item} = props;
  const FlexibleDesign = FlexibleDesigns();
  const windowHeight = FlexibleDesign.windowHeight;
  console.log(item);
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

  const [controlBuyFlow, setControlBuyFlow] = useState({
    situation: false,
    type: null,
  });
  return (
    <Modal
      visible={modalShow}
      animationType={'slide'}
      transparent={true}
      style={{backgroundColor: 'rgba(52, 52, 52, 0.8)'}}>
      <TouchableOpacity
        activeOpacity={0}
        style={{flex: 1, backgroundColor: 'rgba(52, 52, 52, 0.8)'}}
        onPress={() => closeModal && closeModal()}></TouchableOpacity>
      <View
        style={{
          borderRadius: 6,
          zIndex: 99,
          position: 'absolute',
          marginHorizontal: 20,
          left: 0,
          right: 0,
          bottom: 0,
          top: 0,
          marginVertical: windowHeight / 5,
          backgroundColor: 'white',
          paddingHorizontal: 20,
          // alignItems: 'center',
          justifyContent: 'center',
        }}>
        {!controlBuyFlow.situation ? (
          <View
            style={{
              backgroundColor: 'white',
              flex: 1,
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: 40,
            }}>
            <View style={{marginVertical: 10}}>
              <Text
                style={{
                  color: borderColorControl(item.quality),
                  fontWeight: 'bold',
                }}>
                {`${titleControl(item.quality)} LUCKY DRAW`}
              </Text>
            </View>
            <View>
              <Image
                source={item.image}
                resizeMode={'contain'}
                style={{
                  width: 180,
                  height: 140,
                  borderRadius: 70,
                  borderWidth: 1,
                  borderColor: borderColorControl(item.quality),
                }}
              />
            </View>
            <View style={{marginVertical: 10, alignItems: 'center'}}>
              <Text
                style={{
                  fontSize: 10,
                  marginVertical: 8,
                  letterSpacing: 0.7,
                  textAlign: 'center',
                }}>
                {item.description}
              </Text>
            </View>
            <View
              style={{
                width: '100%',
                alignItems: 'center',
                flexDirection: 'row',
              }}>
              <MMButton
                disabled={true}
                text={`Price : ${item.price} ${item.coinCode}`}
                textStyle={{
                  fontWeight: '500',
                  letterSpacing: 0.7,
                  fontSize: 10,
                }}
                containerStyle={{
                  flex: 1,
                  borderWidth: 1,
                  paddingHorizontal: 6,
                  borderRadius: 6,
                  alignItems: 'center',
                  justifyContent: 'center',
                  paddingVertical: 4,
                  borderColor: '#ced7ea',
                  marginRight: 5,
                }}
              />
              <MMButton
                disabled={true}
                text={`Ticket Price: ${item.joinTicket}`}
                textStyle={{
                  fontWeight: '500',
                  letterSpacing: 0.7,
                  fontSize: 10,
                }}
                containerStyle={{
                  borderWidth: 1,
                  paddingHorizontal: 6,
                  borderRadius: 6,
                  flex: 1,
                  marginLeft: 5,
                  alignItems: 'center',
                  justifyContent: 'center',
                  paddingVertical: 4,
                  borderColor: '#ced7ea',
                }}
              />
            </View>
            <MMButton
              onPress={() => alert('METRIC')}
              textStyle={{
                color: 'white',
                fontWeight: '500',
                letterSpacing: 0.7,
              }}
              text={`JOİN WİTH METRİC`}
              containerStyle={{
                marginTop: 15,
                borderRadius: 6,
                width: '100%',
                alignItems: 'center',
                justifyContent: 'center',
                paddingVertical: 4,
                backgroundColor: '#238636',
              }}
            />

            <MMButton
              onPress={() =>
                setControlBuyFlow({
                  situation: true,
                  type: 1,
                })
              }
              textStyle={{
                color: 'white',
                fontWeight: '500',
                letterSpacing: 0.7,
              }}
              text={`JOİN WİTH TİCKET`}
              containerStyle={{
                marginTop: 5,
                borderRadius: 6,
                width: '100%',
                alignItems: 'center',
                justifyContent: 'center',
                paddingVertical: 4,
                backgroundColor: '#7189ba',
              }}
            />
          </View>
        ) : null}
      </View>
    </Modal>
  );
};

//eğer ticket yoksa ticket alma sayfasına yönlendirilecek,
//eğer metric yoksa metric al sayfasına yönledirelecek

export default MMDrawModal;
