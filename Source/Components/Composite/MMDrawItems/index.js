import _ from 'lodash';
import React from 'react';
import {View, Image, TouchableOpacity, Text} from 'react-native';
import MMButton from '../../UI/MMButton';
const MMDrawItems = props => {
  const {item, onPressJoin, onPresNavigateDetail} = props;
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
  /*
  IRON = quality 0,
  BRONZE = quality 1,
  SILVER = quality 2,
  GOLD = quality 3,
  PLATINUM =quality 4,
  DIAMOND = quality 5,
  */
  return (
    <View
      style={{
        marginTop: 10,
        marginHorizontal: 10,
        paddingVertical: 10,
        paddingHorizontal: 10,
        borderRadius: 6,
        borderWidth: 1,
        borderColor: borderColorControl(item.quality),
        backgroundColor: 'white',
        shadowOffset: {
          width: 5,
          height: 4,
        },
        shadowOpacity: 0.5,
        shadowRadius: 3,
        elevation: 20,
      }}>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <View>
          <Image
            source={item.image}
            resizeMode={'cover'}
            style={{
              borderWidth: 2,
              width: 80,
              height: 80,
              borderRadius: 20,
              borderColor: borderColorControl(item.quality),
            }}
          />
        </View>
        <View style={{marginLeft: 8, flex: 1}}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <Text
              style={{
                fontWeight: '500',
                letterSpacing: 0.7,
                color: borderColorControl(item.quality),
              }}>
              {`${titleControl(item.quality)} LUCKY DRAW`}
            </Text>
          </View>

          <Text
            numberOfLines={1}
            style={{
              fontWeight: '500',
              fontSize: 10,
              color: '#21272d',
              marginVertical: 6,
            }}>
            {item.description}
          </Text>

          <View>
            <Text
              style={{
                position: 'absolute',
                zIndex: 999,
                fontSize: 8,
                right: 0,
                marginRight: 6,
                fontWeight: 'bold',
                letterSpacing: 0.7,
              }}>{`${item.joined * item.price}/${item.total}`}</Text>
            <View style={{flexDirection: 'row'}}>
              <View
                style={{
                  backgroundColor: '#238636',
                  height: 10,
                  flex: item.price * item.joined,
                  borderBottomLeftRadius: 6,
                  borderTopLeftRadius: 6,
                  borderBottomRightRadius:
                    item.price * item.joined >= item.total ? 6 : 0,
                  borderTopRightRadius:
                    item.price * item.joined >= item.total ? 6 : 0,
                }}
              />
              <View
                style={{
                  backgroundColor: '#c4c3c9',
                  height: 10,
                  flex: item.total - item.price * item.joined,
                  borderBottomLeftRadius:
                    item.price * item.joined === 0 ? 6 : 0,
                  borderTopLeftRadius: item.price * item.joined === 0 ? 6 : 0,
                  borderBottomRightRadius: 6,
                  borderTopRightRadius: 6,
                }}
              />
            </View>
          </View>
          <View
            style={{
              flex: 1,
              alignItems: 'flex-end',
              marginTop: 10,
            }}>
            <View style={{flexDirection: 'row'}}>
              <Text
                style={{
                  fontWeight: '500',
                  letterSpacing: 0.7,
                  color: '#238636',
                  fontSize: 12,
                  borderWidth: 1,
                  paddingVertical: 4,
                  textAlign: 'center',
                  borderRadius: 6,
                  borderColor: '#238636',
                  flex: 1,
                  marginRight: 5,
                }}>
                {`${item.price} ${item.coinCode}`}
              </Text>
              <Text
                style={{
                  fontWeight: '500',
                  letterSpacing: 0.7,
                  color: '#238636',
                  fontSize: 12,
                  borderWidth: 1,
                  paddingVertical: 4,
                  textAlign: 'center',
                  borderRadius: 6,
                  borderColor: '#238636',
                  flex: 1,
                  marginLeft: 5,
                }}>
                {`${item.joinTicket} Ticket`}
              </Text>
            </View>
            <MMButton
              onPress={() => onPresNavigateDetail && onPresNavigateDetail(item)}
              text={'DETAİL'}
              textStyle={{
                fontSize: 12,
                color: 'white',
                fontWeight: 'bold',
              }}
              containerStyle={{
                backgroundColor: borderColorControl(item.quality),
                width: '100%',
                alignItems: 'center',
                paddingVertical: 5,
                borderRadius: 6,
                marginTop: 10,
              }}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

export default MMDrawItems;
