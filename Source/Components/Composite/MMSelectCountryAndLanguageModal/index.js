import React, {useState} from 'react';
import {View, Text, Modal, TouchableOpacity, ScrollView} from 'react-native';
import {FlexibleDesigns} from '../../../Utils/FlexibleDesign';
import MMSearchBar from '../MMSearchBar';
import MMGeneralIcon from '../../UI/MMGeneralIcons';
import _ from 'lodash';

const MMSelectCountryAndLanguageModal = props => {
  const {modalShow, closeModal, selectAndClose, data} = props;
  const FlexibleDesign = FlexibleDesigns();
  const windowHeight = FlexibleDesign.windowHeight;
  const [searchedCountryData, setSearchedCountryData] = useState(data);

  return (
    <Modal
      visible={modalShow}
      animationType={'slide'}
      swipeDirection="left"
      transparent={true}
      style={{backgroundColor: 'rgba(52, 52, 52, 0.8)', flex: 1}}>
      <TouchableOpacity
        activeOpacity={0}
        style={{flex: 1, backgroundColor: 'rgba(52, 52, 52, 0.8)'}}
        onPress={() => closeModal && closeModal()}
      />
      <View
        style={{
          borderRadius: 6,
          zIndex: 999,
          position: 'absolute',
          marginHorizontal: 20,
          left: 0,
          right: 0,
          bottom: 0,
          top: 0,
          marginVertical: windowHeight / 5,
          backgroundColor: 'white',
          paddingHorizontal: 20,
        }}>
        <View style={{marginVertical: 5}}>
          <MMSearchBar
            searchData={newData => setSearchedCountryData(newData)}
            data={data}
          />
        </View>
        <ScrollView
          style={{flex: 1, paddingBottom: 10}}
          showsVerticalScrollIndicator={false}>
          {_.isEmpty(searchedCountryData) ? (
            <View
              style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text
                style={{
                  fontSize: 14,
                  color: '#7189ba',
                  fontWeight: '500',
                }}>
                Lütfen arama kelimenizi düzeltin.
              </Text>
            </View>
          ) : (
            _.map(
              searchedCountryData.length >= 0 ? searchedCountryData : data,
              item => {
                return (
                  <TouchableOpacity
                    onPress={() => selectAndClose && selectAndClose(item.name)}
                    style={{
                      flexDirection: 'row',
                      marginTop: 4,
                      marginBottom: 4,
                      borderWidth: 1,
                      borderRadius: 6,
                      borderColor: '#ced7ea',
                      paddingHorizontal: 10,
                      paddingVertical: 10,
                      alignItems: 'center',
                    }}>
                    <View
                      style={{
                        width: 30,
                        height: 30,
                        marginRight: 15,
                      }}>
                      <MMGeneralIcon iconName={item.flag} />
                    </View>
                    <Text
                      style={{
                        fontSize: 16,
                        color: '#7189ba',
                        fontWeight: '500',
                      }}>
                      {item?.name}
                    </Text>
                  </TouchableOpacity>
                );
              },
            )
          )}
        </ScrollView>
      </View>
    </Modal>
  );
};

export default MMSelectCountryAndLanguageModal;
