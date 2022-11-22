import React from 'react';
import {Modal, Text, View, TouchableOpacity, Image} from 'react-native';
import MMButton from '../../UI/MMButton';
import {FlexibleDesigns} from '../../../Utils/FlexibleDesign';
import _ from 'lodash';

const MMItemBuyModal = props => {
  const {modalShow, closeModal, data, onPressApprove, type} = props;
  const FlexibleDesign = FlexibleDesigns();
  const windowHeight = FlexibleDesign.windowHeight;

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
  console.log(data, 'data');
  return (
    <Modal
      visible={modalShow}
      animationType={'slide'}
      swipeDirection="left"
      transparent={true}
      style={{backgroundColor: 'rgba(52, 52, 52, 0.8)'}}>
      <TouchableOpacity
        activeOpacity={0}
        style={{flex: 1, backgroundColor: 'rgba(52, 52, 52, 0.8)'}}
        onPress={() => closeModal && closeModal()}
      />
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
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Text
          style={{
            fontWeight: 'bold',
            fontSize: FlexibleDesign.fontSize + 4,
            color:
              type === 0
                ? borderColorControl(data.quality)
                : borderControlForPieceItem(data.type),
          }}>
          {data.code}
        </Text>
        <Image
          source={data.image}
          resizeMode={'cover'}
          style={{
            marginVertical: 10,
            width: '50%',
            height: FlexibleDesign.marketItemHeight,
            borderWidth: 3,
            borderRadius: 20,
            borderColor:
              type === 0
                ? borderColorControl(data.quality)
                : borderControlForPieceItem(data.type),
          }}
        />
        <View
          style={{
            width: '100%',
            backgroundColor: '#ced7ea',
            borderRadius: 6,
            paddingHorizontal: 10,
            paddingBottom: 10,
          }}>
          {_.map(data?.attributes, item => {
            return (
              <View style={{marginTop: 10}}>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                  }}>
                  <Text style={{fontSize: FlexibleDesign.fontSize - 2}}>
                    {item.title}
                  </Text>
                  <Text style={{fontSize: FlexibleDesign.fontSize - 2}}>
                    {item.Value}
                  </Text>
                </View>
              </View>
            );
          })}
        </View>
        <View
          style={{
            width: '100%',
            backgroundColor: '#ced7ea',
            borderRadius: 6,
            paddingHorizontal: 10,
            paddingVertical: 10,
            marginTop: 10,
          }}>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Text style={{fontSize: FlexibleDesign.fontSize - 2}}>Type</Text>
            <Text style={{fontSize: FlexibleDesign.fontSize - 2}}>
              {data.typeName}
            </Text>
          </View>
          {type === 0 ? (
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginTop: 8,
              }}>
              <Text style={{fontSize: FlexibleDesign.fontSize - 2}}>
                Quality
              </Text>
              <Text style={{fontSize: FlexibleDesign.fontSize - 2}}>
                {data.qualityName}
              </Text>
            </View>
          ) : null}

          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginTop: 8,
            }}>
            <Text style={{fontSize: FlexibleDesign.fontSize - 2}}>Level</Text>
            <Text style={{fontSize: FlexibleDesign.fontSize - 2}}>
              {data.level}
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginTop: 8,
            }}>
            <Text
              style={{
                fontSize: FlexibleDesign.fontSize,
                fontWeight: 'bold',
              }}>
              Price
            </Text>
            <Text
              style={{
                fontSize: FlexibleDesign.fontSize,
                fontWeight: 'bold',
              }}>
              {data.price}
            </Text>
          </View>
        </View>
        <MMButton
          onPress={() => onPressApprove && onPressApprove(data)}
          text={'ONAYLA'}
          containerStyle={{
            backgroundColor: '#238636',
            marginTop: 10,
            width: '100%',
            alignItems: 'center',
            borderRadius: 6,
          }}
          textStyle={{
            fontSize: FlexibleDesign.fontSize,
            color: 'white',
            fontWeight: 'bold',
            letterSpacing: 0.7,
            marginVertical: 10,
          }}
        />
        <MMButton
          onPress={() => closeModal && closeModal()}
          text={'VAZGEÇ'}
          containerStyle={{
            backgroundColor: '#c64141',
            marginTop: 5,
            width: '100%',
            alignItems: 'center',
            borderRadius: 6,
          }}
          textStyle={{
            color: 'white',
            marginHorizontal: 10,
            marginVertical: 8,
            letterSpacing: 0.7,
            fontSize: 14,
            fontWeight: 'bold',
          }}
        />
      </View>
    </Modal>
  );
};

export default MMItemBuyModal;
