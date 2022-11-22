import React from 'react';
import {View, Text, Modal} from 'react-native';
import MMButton from '../../../UI/MMButton';
const MMSuccesModal = props => {
  const {modalShow, text, closeModal} = props;
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
            borderRadius: 4,
            paddingVertical: 40,
            borderWidth: 6,
            borderColor: '#238636',
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
                backgroundColor: '#238636',
              }}
              text={'Tamam'}
              textStyle={{
                color: 'white',
                fontWeight: '500',
                letterSpacing: 1,
              }}
              onPress={() => {
                closeModal && closeModal();
              }}
            />
          </View>
        </View>
      </View>
    </Modal>
  );
};
export default MMSuccesModal;
