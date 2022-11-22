import React from 'react';
import {View, Text} from 'react-native';
import MMButton from '../../UI/MMButton';

const MMWalletScreenItem = props => {
  const {
    item,
    navigateToTrade,
    navigateToDeposit,
    navigateToWithdraw,
    withdraw,
  } = props;
  return (
    <View
      style={{
        flexDirection: 'row',
        marginHorizontal: 10,
        marginTop: 20,
        borderWidth: 1,
        borderColor: '#7189ba',
        paddingVertical: 10,
        paddingHorizontal: 10,
        borderRadius: 6,
        justifyContent: 'space-between',
        alignItems: 'center',
      }}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          flex: 0.6,
        }}>
        <View
          style={{
            width: 30,
            height: 30,
            borderRadius: 15,
            backgroundColor: 'red',
            marginRight: 6,
          }}
        />
        <Text style={{fontWeight: '500'}}>{item.Name}</Text>
      </View>
      <View
        style={{
          flex: 1,
        }}>
        <View
          style={{
            borderBottomWidth: 1,
            marginBottom: 10,
            paddingBottom: 3,
            flexDirection: 'row',
            justifyContent: 'space-between',
            borderColor: '#7189ba',
          }}>
          <Text style={{fontWeight: '500'}}>Balance : </Text>
          <Text style={{fontWeight: '500'}}>{item.Balance}</Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          {withdraw ? (
            <>
              <Text
                style={{
                  color: '#7189ba',
                  fontWeight: '500',
                  letterSpacing: 0.5,
                }}>
                Network :
              </Text>
              <Text
                style={{
                  color: '#7189ba',
                  fontWeight: '500',
                  letterSpacing: 0.5,
                }}>
                {item.network}
              </Text>
            </>
          ) : (
            <>
              <MMButton
                text={'Trade'}
                textStyle={{
                  color: '#7189ba',
                  fontWeight: '500',
                  letterSpacing: 0.5,
                }}
                onPress={() => navigateToTrade && navigateToTrade(item)}
              />
              <MMButton
                text={'Deposit'}
                textStyle={{
                  color: '#7189ba',
                  fontWeight: '500',
                  letterSpacing: 0.5,
                }}
                onPress={() => navigateToDeposit && navigateToDeposit(item)}
              />
              <MMButton
                text={'Withdraw'}
                textStyle={{
                  color: '#7189ba',
                  fontWeight: '500',
                  letterSpacing: 0.5,
                }}
                onPress={() => navigateToWithdraw && navigateToWithdraw(item)}
              />
            </>
          )}
        </View>
      </View>
    </View>
  );
};
export default MMWalletScreenItem;
