import React from 'react';
import {View, Text, Image} from 'react-native';
import MMButton from '../../UI/MMButton';

const MMAuctionItems = props => {
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
  const {item, onPress} = props;
  return (
    <View
      style={{
        marginTop: 10,
        marginHorizontal: 10,
        paddingVertical: 10,
        paddingHorizontal: 10,
        borderRadius: 6,
        borderWidth: 1,
        borderColor: borderColorControl(item?.NFTInfo?.quality),
        backgroundColor: 'white',
        shadowOffset: {
          width: 5,
          height: 4,
        },
        shadowOpacity: 0.5,
        shadowRadius: 3,
        elevation: 20,
      }}>
      <View>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <View
            style={{
              flex: 1,
              // borderWidth: 1,
              paddingVertical: 2,
              borderRadius: 6,
              marginLeft: 6,
              justifyContent: 'center',
              alignItems: 'flex-start',
              borderColor: borderColorControl(item?.NFTInfo?.quality),
            }}>
            <Text
              style={{
                fontSize: 12,
                flex: 1,
                color: borderColorControl(item?.NFTInfo?.quality),
              }}>
              {item.NFTInfo?.NFT}
            </Text>
          </View>
          <View
            style={{
              flex: 1,
              paddingHorizontal: 8,
              // borderWidth: 1,
              paddingVertical: 2,
              borderRadius: 6,
              marginLeft: 6,
              alignItems: 'center',
              justifyContent: 'center',
              borderColor: borderColorControl(item?.NFTInfo?.quality),
            }}>
            <Text
              style={{
                fontSize: 11,
                color: borderColorControl(item?.NFTInfo?.quality),
              }}>
              {item.NFTInfo?.qualityName}
            </Text>
          </View>
          <View
            style={{
              flex: 1,
              paddingHorizontal: 8,
              // borderWidth: 1,
              paddingVertical: 2,
              borderRadius: 6,
              marginLeft: 6,
              justifyContent: 'center',
              alignItems: 'flex-end',
              borderColor: borderColorControl(item?.NFTInfo?.quality),
            }}>
            <Text
              style={{
                fontSize: 11,
                color: borderColorControl(item?.NFTInfo?.quality),
              }}>
              {item.NFTInfo?.typeName}
            </Text>
          </View>
        </View>
        <View style={{marginVertical: 6, flexDirection: 'row'}}>
          <View style={{flex: 1}}>
            <View
              style={{
                flexDirection: 'row',
                borderBottomWidth: 0.167,
                marginHorizontal: 10,
                justifyContent: 'space-between',
                paddingBottom: 1,
              }}>
              <Text style={{fontSize: 10, letterSpacing: 0.7}}>Code:</Text>
              <Text style={{fontSize: 10, letterSpacing: 0.7}}>
                {item?.NFTInfo?.code}
              </Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                borderBottomWidth: 0.167,
                marginHorizontal: 10,
                justifyContent: 'space-between',
                paddingBottom: 1,
              }}>
              <Text style={{fontSize: 10, letterSpacing: 0.7}}>Owner:</Text>
              <Text style={{fontSize: 10, letterSpacing: 0.7}}>
                {`${item.ownerName} ${item.ownerSurname}`}
              </Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                borderBottomWidth: 0.167,
                marginHorizontal: 10,
                justifyContent: 'space-between',
                paddingBottom: 1,
              }}>
              <Text style={{fontSize: 10, letterSpacing: 0.7}}>
                Start Date :
              </Text>
              <Text style={{fontSize: 10, letterSpacing: 0.7}}>
                {item?.startDate}
              </Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                borderBottomWidth: 0.167,
                marginHorizontal: 10,
                justifyContent: 'space-between',
                paddingBottom: 1,
              }}>
              <Text style={{fontSize: 10, letterSpacing: 0.7}}>End Date :</Text>
              <Text style={{fontSize: 10, letterSpacing: 0.7}}>
                {item?.endDate}
              </Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                borderBottomWidth: 0.167,
                marginHorizontal: 10,
                justifyContent: 'space-between',
                paddingBottom: 1,
              }}>
              <Text style={{fontSize: 10, letterSpacing: 0.7}}>
                Lowest Bid Possible :
              </Text>
              <Text style={{fontSize: 10, letterSpacing: 0.7}}>
                {`${item?.lowestPrice} ${item?.coinCode}`}
              </Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                borderBottomWidth: 0.167,
                marginHorizontal: 10,
                justifyContent: 'space-between',
                paddingBottom: 1,
              }}>
              <Text style={{fontSize: 10, letterSpacing: 0.7}}>
                Highest Bid Possible :
              </Text>
              <Text style={{fontSize: 10, letterSpacing: 0.7}}>
                {`${item?.highestPrice} ${item?.coinCode}`}
              </Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                borderBottomWidth: 0.167,
                marginHorizontal: 10,
                justifyContent: 'space-between',
                paddingBottom: 1,
              }}>
              <Text
                style={{fontSize: 10, letterSpacing: 0.7, color: '#238636'}}>
                Current Highest Bid :
              </Text>
              <Text
                style={{fontSize: 10, letterSpacing: 0.7, color: '#238636'}}>
                {`${item?.currentHighPrice} ${item?.coinCode}`}
              </Text>
            </View>
          </View>
          <View style={{justifyContent: 'center'}}>
            <Image
              source={item?.NFTInfo?.image}
              resizeMode={'cover'}
              style={{
                borderWidth: 3,
                width: 80,
                height: 80,
                borderRadius: 20,
                borderColor: borderColorControl(item?.NFTInfo?.quality),
              }}
            />
          </View>
        </View>

        <MMButton
          text={'TEKLİF VER'}
          containerStyle={{
            backgroundColor: borderColorControl(item?.NFTInfo?.quality),
            borderRadius: 6,
            alignItems: 'center',
            paddingVertical: 6,
          }}
          textStyle={{
            color: 'white',
            fontSize: 12,
            fontWeight: '600',
            letterSpacing: 0.5,
          }}
          onPress={() => onPress && onPress(item)}
        />
      </View>
    </View>
  );
};
export default MMAuctionItems;
