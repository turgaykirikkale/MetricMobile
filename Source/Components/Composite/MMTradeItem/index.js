import React from 'react';
import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import MMButton from '../../UI/MMButton';
import MMVectorIcon from '../../UI/MMVectorIcon';
const MMTradeItem = props => {
  const {header, balance, deleteALL, coinName, openCoinListModal, type} = props;
  return (
    <View
      style={{
        marginHorizontal: 10,
        marginVertical: 10,
        borderWidth: 1,
        borderRadius: 6,
        paddingVertical: 10,
        borderColor: '#7189ba',
        // shadowColor: 'black',
        // shadowOffset: {
        //   width: 0,
        //   height: 10,
        // },
        // shadowOpacity: 0.2,
        // shadowRadius: 4,
        // elevation: 20,
      }}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginVertical: 10,
          marginHorizontal: 10,
        }}>
        <Text style={{fontWeight: 'bold', flex: 1}}>{header}</Text>
        <View
          style={{
            flexDirection: 'row',
            flex: 1.2,
            marginLeft: 20,
            alignItems: 'flex-end',
          }}>
          <Text style={{fontWeight: '500'}}>{`Balance : `}</Text>
          <Text style={{fontWeight: '500', flex: 1, textAlign: 'right'}}>
            {balance}
          </Text>
          <Text
            style={{
              fontWeight: '500',
              fontSize: 10,
              textAlign: 'right',
              marginLeft: 2,
            }}>
            {coinName}
          </Text>
        </View>
      </View>

      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginVertical: 10,
          marginHorizontal: 10,
          alignItems: 'center',
        }}>
        <TouchableOpacity
          disabled={type ? true : false}
          style={{
            marginRight: 20,
            flexDirection: 'row',
            alignItems: 'center',
            borderWidth: 1,
            paddingHorizontal: 8,
            paddingVertical: 3,
            borderRadius: 6,
            borderColor: '#7189ba',
            width: 120,
            justifyContent: type ? null : 'space-between',
          }}
          onPress={() => openCoinListModal && openCoinListModal()}>
          <View
            style={{
              width: 30,
              height: 30,
              backgroundColor: 'red',
              borderRadius: 15,
              marginRight: 6,
            }}
          />
          <Text style={{fontWeight: '500', marginRight: 5}}>{coinName}</Text>
          {type ? null : (
            <MMVectorIcon iconName={'angle-down'} color={'#7189ba'} size={18} />
          )}
        </TouchableOpacity>

        <TextInput value={'0.00'} style={{flex: 1}} />
        {deleteALL ? null : (
          <MMButton
            text={'ALL'}
            textStyle={{
              color: '#f27f21',
              fontWeight: 'bold',
              letterSpacing: 0.8,
            }}
          />
        )}
      </View>
    </View>
  );
};

export default MMTradeItem;
