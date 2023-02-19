import React from 'react';
import {View, Text, ScrollView, Image, TouchableOpacity} from 'react-native';
import {FlexibleDesigns} from '../../../Utils/FlexibleDesign';
import MMVectorIcon from '../MMVectorIcon';
import _ from 'lodash';

function MMNFTScreenPersonalItemControl(props) {
  const windowWidth = FlexibleDesigns().windowWidth;

  const {data, header, onPress} = props;
  return (
    <View style={{marginVertical: 10}}>
      <View
        style={{
          backgroundColor: '#46936d',
          marginHorizontal: 30,
          paddingVertical: 3,
          borderTopLeftRadius: 10,
          borderTopRightRadius: 10,
          justifyContent: 'center',
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
          backgroundColor: '#3983b2',
          // borderWidth: 1,
          // borderColor: '#15181D',
          marginHorizontal: 10,
          paddingHorizontal: 9,
          height: windowWidth / 2,
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
                    <View
                      style={{
                        justifyContent: 'center',
                        paddingHorizontal: 5,
                      }}>
                      <Image
                        source={item.image}
                        resizeMode={'cover'}
                        style={{
                          width: windowWidth / 3.5,
                          height: '90%',
                          borderRadius: 20,
                        }}
                      />
                    </View>
                  </>
                );
              })}
            </ScrollView>
          </>
        ) : (
          <TouchableOpacity onPress={() => onPress && onPress()}>
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
