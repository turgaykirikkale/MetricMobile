import React from 'react';
import {View, Text, TouchableOpacity, FlatList, Image} from 'react-native';
import {FlexibleDesigns} from '../../../Utils/FlexibleDesign';
import MMButton from '../../UI/MMButton';

const MMStakeItems = props => {
  const {type, data, onPressItem} = props;
  const FlexibleDesign = FlexibleDesigns();
  const width = FlexibleDesign.windowWidth;

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

  return (
    <View style={{flex: 1, marginBottom: 5, marginTop: 5}}>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={data}
        renderItem={({item, index}) =>
          type === 0 ? (
            <View
              activeOpacity={0.7}
              onPress={() => onPressItem && onPressItem(item)}
              style={{
                flex:
                  index === data.length - 1 ? (index % 2 === 1 ? 1 : 0.482) : 1,
                // width: '100%',
                marginRight: index % 2 === 0 ? 5 : 10,
                marginLeft: index % 2 === 0 ? 10 : 5,
                marginTop: 5,
                marginBottom: 5,
                backgroundColor: '#F8F9FA',
                // height: windowWidth / 1.8,
                justifyContent: 'center',
                borderRadius: 20,
                shadowOffset: {
                  width: 5,
                  height: 4,
                },
                shadowOpacity: 0.5,
                shadowRadius: 3,
                elevation: 20,
              }}>
              <View
                style={{
                  // width: '100%',
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  marginHorizontal: 6,
                  marginTop: 5,
                }}>
                <View
                  style={{
                    paddingHorizontal: 8,
                    paddingVertical: 2,
                    borderRadius: 6,
                    marginTop: 5,
                    marginLeft: 6,
                    justifyContent: 'center',
                  }}>
                  <Text
                    style={{
                      color: 'black',
                      fontWeight: '400',
                      fontSize: FlexibleDesign.fontSize - 2,
                    }}>
                    {`${item.day} Gün`}
                  </Text>
                </View>
                <View
                  style={{
                    paddingHorizontal: 8,
                    paddingVertical: 2,
                    borderColor: 'green',
                    borderWidth: 1,
                    borderRadius: 6,
                    marginTop: 5,
                    marginRight: 6,
                    justifyContent: 'center',
                  }}>
                  <Text
                    style={{
                      fontSize: FlexibleDesign.fontSize - 2,
                      fontWeight: '400',
                      color: 'green',
                    }}>
                    {`% ${item.interestRate}`}
                  </Text>
                </View>
              </View>
              <View
                style={{
                  width: '100%',
                  alignSelf: 'center',
                  paddingHorizontal: 10,
                  marginTop: 10,
                  alignItems: 'center',
                }}>
                <Image
                  source={item.image}
                  resizeMode={'cover'}
                  style={{
                    width: 80,
                    height: 80,
                    borderWidth: 2,
                    borderRadius: 40,
                    borderColor: 'black',
                  }}
                />
                <View
                  style={{
                    marginTop: 10,
                  }}>
                  <Text
                    style={{
                      fontSize: FlexibleDesign.fontSize,
                      letterSpacing: 1,
                      marginBottom: 5,
                      fontWeight: 'bold',
                      textAlign: 'center',
                      color: '#7189ba',
                    }}>
                    {item.coinCode}
                  </Text>
                  <Text
                    style={{
                      fontSize: FlexibleDesign.fontSize - 3,
                      letterSpacing: 1,
                      color: 'black',
                      marginTop: 2,
                      fontWeight: 'bold',
                    }}>
                    {`Total: ${item.totalAmount} ${item.coinCode}`}
                  </Text>
                  <Text
                    style={{
                      fontSize: FlexibleDesign.fontSize - 3,
                      letterSpacing: 1,
                      color: 'black',
                      marginTop: 2,
                      fontWeight: 'bold',
                    }}>
                    {`Staked: ${item.stakedAmount} ${item.coinCode}`}
                  </Text>
                  <Text
                    style={{
                      fontSize: FlexibleDesign.fontSize - 3,
                      letterSpacing: 1,
                      color: 'black',
                      marginTop: 2,
                      fontWeight: 'bold',
                    }}>
                    {`Available: ${item.totalAmount - item.stakedAmount} ${
                      item.coinCode
                    }`}
                  </Text>
                  <Text
                    style={{
                      fontSize: FlexibleDesign.fontSize - 3,
                      letterSpacing: 1,
                      color: 'black',
                      marginTop: 2,
                      fontWeight: 'bold',
                    }}>
                    {`Value to Earn: ${item.earnedValue}`}
                  </Text>
                </View>
              </View>
              <View
                style={{
                  marginHorizontal: 6,
                  marginVertical: 6,
                }}>
                <MMButton
                  text={'STAKE'}
                  textStyle={{
                    textAlign: 'center',
                    marginVertical: 4,
                    fontWeight: 'bold',
                    fontSize: FlexibleDesign.fontSize,
                    color: 'white',
                    letterSpacing: 1,
                  }}
                  containerStyle={{
                    alignItems: 'center',
                    marginTop: 4,
                    backgroundColor: '#238636',
                    marginHorizontal: 20,
                    marginBottom: 8,
                    borderRadius: 6,
                  }}
                />
              </View>
            </View>
          ) : (
            <View
              activeOpacity={0.7}
              onPress={() => onPressItem && onPressItem(item)}
              style={{
                flex:
                  index === data.length - 1 ? (index % 2 === 1 ? 1 : 0.482) : 1,
                // width: '100%',
                marginRight: index % 2 === 0 ? 5 : 10,
                marginLeft: index % 2 === 0 ? 10 : 5,
                marginTop: 5,
                marginBottom: 5,
                backgroundColor: '#F8F9FA',
                // height: windowWidth / 1.8,
                justifyContent: 'center',
                borderRadius: 20,
                shadowOffset: {
                  width: 5,
                  height: 4,
                },
                shadowOpacity: 0.5,
                shadowRadius: 3,
                elevation: 20,
              }}>
              <View
                style={{
                  // width: '100%',
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  marginHorizontal: 6,
                  marginTop: 5,
                }}>
                <View
                  style={{
                    paddingHorizontal: 8,
                    paddingVertical: 2,
                    borderRadius: 6,
                    marginTop: 5,
                    marginLeft: 6,
                    justifyContent: 'center',
                  }}>
                  <Text
                    style={{
                      color: 'black',
                      fontWeight: '400',
                      fontSize: FlexibleDesign.fontSize - 2,
                    }}>
                    {`${item.day} Gün`}
                  </Text>
                </View>
                <View
                  style={{
                    paddingHorizontal: 8,
                    paddingVertical: 2,
                    borderColor: 'green',
                    borderWidth: 1,
                    borderRadius: 6,
                    marginTop: 5,
                    marginRight: 6,
                    justifyContent: 'center',
                  }}>
                  <Text
                    style={{
                      fontSize: FlexibleDesign.fontSize - 2,
                      fontWeight: '400',
                      color: 'green',
                    }}>
                    {`% ${item.interestRate}`}
                  </Text>
                </View>
              </View>
              <View
                style={{
                  width: '100%',
                  alignSelf: 'center',
                  paddingHorizontal: 10,
                  marginTop: 10,
                  alignItems: 'center',
                }}>
                <Image
                  source={item.image}
                  resizeMode={'cover'}
                  style={{
                    width: 80,
                    height: 80,
                    borderWidth: 2,
                    borderRadius: 40,
                    borderColor: borderColorControl(item.quality),
                  }}
                />
                <View
                  style={{
                    marginTop: 10,
                  }}>
                  <Text
                    style={{
                      fontSize: FlexibleDesign.fontSize,
                      letterSpacing: 1,
                      marginBottom: 5,
                      fontWeight: 'bold',
                      textAlign: 'center',
                      color: borderColorControl(item.quality),
                    }}>
                    {item.NFT}
                  </Text>
                  <Text
                    style={{
                      fontSize: FlexibleDesign.fontSize - 3,
                      letterSpacing: 1,
                      color: 'black',
                      marginTop: 2,
                      fontWeight: 'bold',
                    }}>
                    {`Type : ${item.typeName}`}
                  </Text>
                  <Text
                    style={{
                      fontSize: FlexibleDesign.fontSize - 3,
                      letterSpacing: 1,
                      color: borderColorControl(item.quality),
                      marginTop: 2,
                      fontWeight: 'bold',
                    }}>
                    {`Quality: ${item.qualityName}`}
                  </Text>
                  <Text
                    style={{
                      fontSize: FlexibleDesign.fontSize - 3,
                      letterSpacing: 1,
                      color: 'black',
                      marginTop: 2,
                      fontWeight: 'bold',
                    }}>
                    {`Total: ${item.totalAmount}`}
                  </Text>
                  <Text
                    style={{
                      fontSize: FlexibleDesign.fontSize - 3,
                      letterSpacing: 1,
                      color: 'black',
                      marginTop: 2,
                      fontWeight: 'bold',
                    }}>
                    {`Staked: ${item.stakedAmount}`}
                  </Text>
                  <Text
                    style={{
                      fontSize: FlexibleDesign.fontSize - 3,
                      letterSpacing: 1,
                      color: 'black',
                      marginTop: 2,
                      fontWeight: 'bold',
                    }}>
                    {`Available: ${item.totalAmount - item.stakedAmount}`}
                  </Text>
                  <Text
                    style={{
                      fontSize: FlexibleDesign.fontSize - 3,
                      letterSpacing: 1,
                      color: 'black',
                      marginTop: 2,
                      fontWeight: 'bold',
                    }}>
                    {`Value to Earn: ${item.earnedValue}`}
                  </Text>
                </View>
              </View>
              <View
                style={{
                  marginHorizontal: 6,
                  marginVertical: 6,
                }}>
                <MMButton
                  text={'STAKE'}
                  textStyle={{
                    textAlign: 'center',
                    marginVertical: 4,
                    fontWeight: 'bold',
                    fontSize: FlexibleDesign.fontSize,
                    color: 'white',
                    letterSpacing: 1,
                  }}
                  containerStyle={{
                    alignItems: 'center',
                    marginTop: 4,
                    backgroundColor: '#238636',
                    marginHorizontal: 20,
                    marginBottom: 8,
                    borderRadius: 6,
                  }}
                />
              </View>
            </View>
          )
        }
        numColumns={2}
      />
    </View>
  );
};

export default MMStakeItems;
