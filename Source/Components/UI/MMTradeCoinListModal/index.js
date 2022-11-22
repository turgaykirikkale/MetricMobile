import _ from 'lodash';
import React from 'react';
import {TouchableOpacity, View, Text, Modal, ScrollView} from 'react-native';

const MMTradeCoinListModal = props => {
  const {modalShow, closeModal, data, selectedCoinItem} = props;
  console.log(data);
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
          zIndex: 999,
          position: 'absolute',
          bottom: 0,
          height: '60%',
          width: '100%',
          backgroundColor: 'white',
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
          paddingTop: 20,
          paddingHorizontal: 20,
        }}>
        <ScrollView>
          {_.map(data, item => {
            return (
              <TouchableOpacity
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  borderWidth: 1.4,
                  marginTop: 8,
                  paddingHorizontal: 10,
                  paddingVertical: 10,
                  borderColor: '#7189ba',
                  borderRadius: 6,
                }}
                onPress={() => selectedCoinItem && selectedCoinItem(item)}>
                <View
                  style={{
                    backgroundColor: 'red',
                    width: 50,
                    height: 50,
                    borderRadius: 25,
                    marginRight: 10,
                  }}
                />
                <Text style={{fontWeight: '500'}}>{item.Name}</Text>
              </TouchableOpacity>
            );
          })}
        </ScrollView>
      </View>
    </Modal>
  );
};

export default MMTradeCoinListModal;
