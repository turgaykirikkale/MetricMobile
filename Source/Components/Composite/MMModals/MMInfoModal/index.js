import React from 'react';
import {View, Text, Modal} from 'react-native';
import MMButton from '../../../UI/MMButton';

const MMInfoModal = props => {
  const {
    text,
    modalShow,
    buttonOneText,
    buttonSecondText,
    onPressButtonOne,
    onPressButtonSecond,
  } = props;
  return (
    <Modal
      visible={modalShow}
      animationType={'slide'}
      transparent={true}
      style={{backgroundColor: 'rgba(52, 52, 52, 0.8)'}}>
      <View
        style={{
          flex: 1,
          backgroundColor: 'rgba(52, 52, 52, 0.8)',
          justifyContent: 'center',
        }}>
        <View
          style={{
            backgroundColor: 'white',
            alignItems: 'center',
            marginHorizontal: 20,
            borderRadius: 6,
            paddingVertical: 40,
            borderWidth: 4,
            borderColor: '#efb609',
          }}>
          <Text
            style={{
              fontWeight: 'bold',
              marginHorizontal: 5,
              textAlign: 'center',
              marginBottom: 20,
            }}>
            {text}
          </Text>
          <View
            style={{flexDirection: 'row', marginTop: 10, marginHorizontal: 30}}>
            <MMButton
              containerStyle={{
                marginRight: 10,
                flex: 0.5,
                alignItems: 'center',
                paddingVertical: 6,
                borderRadius: 6,
                backgroundColor: '#c64141',
              }}
              text={buttonOneText}
              textStyle={{
                color: 'white',
                fontWeight: '500',
                letterSpacing: 1,
              }}
              onPress={() => {
                onPressButtonOne && onPressButtonOne();
              }}
            />
            <MMButton
              containerStyle={{
                marginLeft: 10,
                flex: 0.5,
                alignItems: 'center',
                paddingVertical: 6,
                borderRadius: 6,
                backgroundColor: '#238636',
              }}
              textStyle={{
                color: 'white',
                fontWeight: '500',
                letterSpacing: 1,
              }}
              text={buttonSecondText}
              onPress={() => {
                onPressButtonSecond && onPressButtonSecond();
              }}
            />
          </View>
        </View>
      </View>
    </Modal>
  );
};
export default MMInfoModal;
