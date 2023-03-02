import React from 'react';
import {View, Text, ScrollView, Image, TouchableOpacity} from 'react-native';
import {FlexibleDesigns} from '../../../Utils/FlexibleDesign';
import MMVectorIcon from '../MMVectorIcon';
import _ from 'lodash';

function MMNFTScreenPersonalItemControl(props) {
  const windowWidth = FlexibleDesigns().windowWidth;

  const {data, header, navigation, onPressItem} = props;
  return (
    <View style={{marginVertical: 10}}>
      <View
        style={{
          backgroundColor: '#225d84',
          marginHorizontal: 30,
          paddingVertical: 3,
          borderTopLeftRadius: 10,
          borderTopRightRadius: 10,
          justifyContent: 'center',
          borderBottomWidth: 1,
          borderBottomColor: 'white',
        }}>
        <Text
          style={{
            textAlign: 'center',
            fontWeight: 'bold',
            color: 'white',
            letterSpacing: 0.8,
          }}>
          {header}
        </Text>
      </View>
      <View
        style={{
          backgroundColor: '#225d84',
          // borderWidth: 1,
          // borderColor: '#15181D',
          marginHorizontal: 10,
          paddingHorizontal: 9,
          height: windowWidth / 2.5,
          borderRadius: 20,
          justifyContent: !_.isEmpty(data) && !_.isNull(data) ? null : 'center',
          alignItems: !_.isEmpty(data) && !_.isNull(data) ? null : 'center',
        }}>
        {!_.isEmpty(data) && !_.isNull(data) ? (
          <>
            <ScrollView
              scrollEnabled
              horizontal
              showsHorizontalScrollIndicator={false}>
              {_.map(data, item => {
                return (
                  <>
                    <TouchableOpacity
                      onPress={() => onPressItem && onPressItem(item)}
                      activeOpacity={0.7}
                      style={{
                        justifyContent: 'center',
                        paddingHorizontal: 5,
                      }}>
                      <Image
                        source={item.image}
                        resizeMode={'cover'}
                        style={{
                          width: windowWidth / 4,
                          height: '70%',
                          borderRadius: 10,
                        }}
                      />
                    </TouchableOpacity>
                  </>
                );
              })}
            </ScrollView>
          </>
        ) : (
          <TouchableOpacity
            onPress={() =>
              navigation.navigate('Market', {
                screen: 'MarketScreen',
              })
            }
            activeOpacity={0.7}>
            <MMVectorIcon
              iconName={'plus-square'}
              color={'#A5ABB9'}
              size={windowWidth / 4}
            />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
}

export default MMNFTScreenPersonalItemControl;
