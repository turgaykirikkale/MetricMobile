import React, {useState} from 'react';
import {View, Image, Text} from 'react-native';
import {FlexibleDesigns} from '../../../Utils/FlexibleDesign';
import MMButton from '../../UI/MMButton';
import MMMarketItemValuesShower from '../MMMarketItemValuesShower';
import _ from 'lodash';
const MMHomeScreenItemShower = props => {
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

  const FlexibleDesign = FlexibleDesigns();
  const windowWidth = FlexibleDesign.windowWidth;
  const {data, selectedItem} = props;
  const [selectedItemIndex, setSelectedItemIndex] = useState(0);
  const [item, setItem] = useState(data[selectedItemIndex]);

  const setNextControl = () => {
    if (data.length - 1 > selectedItemIndex) {
      setSelectedItemIndex(selectedItemIndex + 1);
      setItem(data[selectedItemIndex + 1]);
      selectedItem(data[selectedItemIndex + 1]);
    } else if (data.length - 1 === selectedItemIndex) {
      setSelectedItemIndex(0);
      setItem(data[0]);
      selectedItem(data[0]);
    }
  };
  const setBackControl = () => {
    if (selectedItemIndex >= 1) {
      setSelectedItemIndex(selectedItemIndex - 1);
      setItem(data[selectedItemIndex - 1]);
      selectedItem(data[selectedItemIndex - 1]);
    } else if (selectedItemIndex === 0) {
      setSelectedItemIndex(data.length - 1);
      setItem(data[data.length - 1]);
      selectedItem(data[data.length - 1]);
    }
  };

  const controlExtraClassCards = () => {
    let viewLoop = [];
    for (let index = 0; index < 5; index++) {
      viewLoop.push(
        <View
          style={{
            marginLeft: 5,
            width: windowWidth / 6,
            height: windowWidth / 6,
            backgroundColor: 'red',
            borderRadius: 6,
          }}>
          <Text>Hello</Text>
        </View>,
      );
    }
    return viewLoop;
  };
  console.log('selectedItemIndex', selectedItemIndex);
  console.log('SelectedItem', item);
  return (
    <View>
      <View
        style={{
          width: '95%',
          alignSelf: 'center',
          marginTop: 10,
          flexDirection: 'row',
          marginHorizontal: 10,
        }}>
        <View
          style={{
            position: 'absolute',
            zIndex: 99,
            width: '100%',
            alignSelf: 'center',
            flexDirection: 'row',
            justifyContent: 'space-between',
            // borderWidth: 1,
            paddingHorizontal: 4,
          }}>
          <MMButton
            onPress={() => setBackControl()}
            containerStyle={{
              alignItems: 'center',
              justifyContent: 'center',
              width: 30,
              height: 30,
              borderRadius: 25,
              alignSelf: 'center',
              // backgroundColor: '#ced7ea',
            }}
            text={'<'}
            textStyle={{fontSize: 20, fontWeight: 'bold'}}
          />

          <MMButton
            onPress={() => setNextControl()}
            text={'>'}
            textStyle={{fontSize: 20, fontWeight: 'bold'}}
            containerStyle={{
              alignItems: 'center',
              justifyContent: 'center',
              width: 30,
              height: 30,
              borderRadius: 25,
              alignSelf: 'center',
              // backgroundColor: '#ced7ea',
            }}
          />
        </View>
        <Image
          source={item.image}
          resizeMode={'cover'}
          style={{
            width: '100%',
            height: windowWidth / 1.3,
            borderWidth: 2,
            borderRadius: 6,
            borderColor: borderColorControl(item.quality),
          }}
        />

        <>
          <MMButton
            containerStyle={{
              width: 50,
              height: 50,
              backgroundColor: '#4d7c10',
              position: 'absolute',
              left: 15,
              top: 15,
              borderRadius: 10,
              justifyContent: 'center',
              alignItems: 'center',
            }}
            text={item.NFT === 'PASSENGER' ? 'P' : 'B'}
            textStyle={{
              fontSize: FlexibleDesign.fontSize + 12,
              fontWeight: 'bold',
            }}
          />
          <MMButton
            containerStyle={{
              width: 50,
              height: 50,
              backgroundColor: '#1150a3',
              position: 'absolute',
              right: 15,
              top: 15,
              borderRadius: 10,
              justifyContent: 'center',
              alignItems: 'center',
            }}
            text={item.NFT === 'PASSENGER' ? 'I' : 'P'}
            textStyle={{
              fontSize: FlexibleDesign.fontSize + 12,
              fontWeight: 'bold',
            }}
          />
          <MMButton
            containerStyle={{
              width: 50,
              height: 50,
              backgroundColor: '#841717',
              position: 'absolute',
              right: 15,
              bottom: 15,
              borderRadius: 10,
              justifyContent: 'center',
              alignItems: 'center',
            }}
            text={item.NFT === 'PASSENGER' ? 'R' : 'S'}
            textStyle={{
              fontSize: FlexibleDesign.fontSize + 12,
              fontWeight: 'bold',
            }}
          />
          <MMButton
            containerStyle={{
              width: 50,
              height: 50,
              backgroundColor: '#666b75',
              position: 'absolute',
              left: 15,
              bottom: 15,
              borderRadius: 10,
              justifyContent: 'center',
              alignItems: 'center',
            }}
            text={item.NFT === 'PASSENGER' ? 'C' : 'P'}
            textStyle={{
              fontSize: FlexibleDesign.fontSize + 12,
              fontWeight: 'bold',
            }}
          />
        </>
      </View>
      <View
        style={{
          borderRadius: 6,
          paddingVertical: 6,
          marginHorizontal: 10,
          marginTop: 8,
          // backgroundColor: 'rgba(52, 52, 52, 0.3)',
          shadowColor: FlexibleDesign.shadowColor,
          shadowOffset: {
            width: 10,
            height: 10,
          },
          shadowOpacity: 0.5,
          shadowRadius: 5,
          elevation: 20,
        }}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
          }}>
          {controlExtraClassCards()}
        </View>
      </View>

      <View>
        <MMMarketItemValuesShower quality={0} type={2} data={item} />
      </View>
    </View>
  );
};

export default MMHomeScreenItemShower;
