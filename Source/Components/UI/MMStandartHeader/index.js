import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {FlexibleDesigns} from '../../../Utils/FlexibleDesign';

const MMStandarHeader = props => {
  const {
    onPressWalletButtons,
    backButton,
    navigation,
    headerMiddle,
    navigateToProfileStack,
  } = props;
  const FlexibleDesign = FlexibleDesigns();

  return (
    <View
      style={{
        paddingHorizontal: 10,
        paddingVertical: 2,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        shadowColor: FlexibleDesign.shadowColor,
        shadowOffset: {
          width: 0,
          height: 10,
        },
        shadowOpacity: 0.2,
        shadowRadius: 4,
        elevation: 20,
      }}>
      {backButton ? (
        <TouchableOpacity
          style={{
            backgroundColor: '#7189ba',
            width: 30,
            height: 30,
            borderRadius: 15,
          }}
          onPress={() => navigation.goBack()}>
          <Text
            style={{
              fontWeight: 'bold',
              fontSize: 20,
              marginLeft: 7,
              marginTop: 1,
              color: '#ced7ea',
            }}>{`<`}</Text>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity
          onPress={() => onPressWalletButtons && onPressWalletButtons()}
          activeOpacity={FlexibleDesign.buttonActiveOpacity}
          style={{
            paddingHorizontal: 10,
            paddingVertical: 6,
            borderRadius: 4,
            flexDirection: 'row',
            borderColor: '#192f6a',
            backgroundColor: '#ced7ea',
          }}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <View
              style={{
                height: FlexibleDesign.headerIconWrapperHeight,
                width: FlexibleDesign.headerIconWrapperWidth,
                backgroundColor: 'yellow',
                borderRadius: FlexibleDesign.headerIconWrapperRadius,
              }}></View>
            <Text
              style={{
                marginLeft: 2,
                fontSize: FlexibleDesign.fontSize,
                fontWeight: 'bold',
                color: '#192f6a',
              }}>
              0.19
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginHorizontal: 6,
            }}>
            <View
              style={{
                height: FlexibleDesign.headerIconWrapperHeight,
                width: FlexibleDesign.headerIconWrapperWidth,
                backgroundColor: 'blue',
                borderRadius: FlexibleDesign.headerIconWrapperRadius,
              }}></View>
            <Text
              style={{
                marginLeft: 2,
                fontSize: FlexibleDesign.fontSize,
                fontWeight: 'bold',
                color: '#192f6a',
              }}>
              0.19
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <View
              style={{
                height: FlexibleDesign.headerIconWrapperHeight,
                width: FlexibleDesign.headerIconWrapperWidth,
                backgroundColor: 'red',
                borderRadius: FlexibleDesign.headerIconWrapperRadius,
              }}></View>
            <Text
              style={{
                marginLeft: 2,
                fontSize: FlexibleDesign.fontSize,
                fontWeight: 'bold',
                color: '#192f6a',
              }}>
              0.19
            </Text>
          </View>
        </TouchableOpacity>
      )}

      {headerMiddle ? (
        <Text
          style={{
            borderWidth: 2,
            borderColor: '#7189ba',
            fontWeight: 'bold',
            color: '#7189ba',
            borderRadius: 6,
            paddingHorizontal: 10,
            paddingVertical: 2,
            fontSize: FlexibleDesign.fontSize,
          }}>
          {headerMiddle}
        </Text>
      ) : null}

      <TouchableOpacity
        onPress={() => navigateToProfileStack && navigateToProfileStack()}
        activeOpacity={FlexibleDesign.buttonActiveOpacity}
        style={{
          width: FlexibleDesign.headerProfileIconWrapperHeight,
          height: FlexibleDesign.headerProfileIconWrapperWidht,
          borderRadius: FlexibleDesign.headerProfileIconWrapperRadius,
          backgroundColor: 'blue',
        }}
      />
    </View>
  );
};

export default MMStandarHeader;
