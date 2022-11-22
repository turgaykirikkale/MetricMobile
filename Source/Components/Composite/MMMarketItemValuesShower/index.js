import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import _ from 'lodash';
import {FlexibleDesigns} from '../../../Utils/FlexibleDesign';
import MMButton from '../../UI/MMButton';

//Burada lowest price highest price yazan yerleri ayrı componente alacagım.
const MMMarketItemValuesShower = props => {
  const FlexibleDesign = FlexibleDesigns();
  const {data, type, option, quality, auctionData} = props;
  const optionNFTPiece = [
    {title: 'Level Up', active: true, icon: '', price: 10}, //level arttıkça Level up fiyatı artacak
    {title: 'Sell', active: true, icon: '', price: 10}, //level arttıkca markete koyma price artacak.
    {title: 'Use', active: true, icon: '', price: 10},
    {title: 'Send', active: true, icon: '', price: null},
  ];
  const optionNFT = [
    {title: 'Level Up', active: true, icon: '', price: 10, nav: 0}, //level arttıkça Level up fiyatı artacak
    {title: 'Service', active: true, icon: '', nav: 1},
    {title: 'Sell', active: true, icon: '', price: 10, nav: 2}, //level arttıkca markete koyma price artacak.
    {title: 'Send', active: true, icon: '', price: null, nav: 3},
  ];
  const borderControlForPieceItem = typeNumber => {
    switch (typeNumber) {
      case 0:
        return '#4d7c10';
      case 1:
        return '#1150a3';
      case 2:
        return '#666b75';
      case 3:
        return '#841717';
      default:
        break;
    }
  };

  const pidTextData = [
    'Eğerki sizden yüksek yeni bir fiyat varsa teklifinizi iptal edebilirsiniz.',
    'Eğer ki siz en yüksek teklife sahipseniz teklifinizi iptal edemezsiniz.',
    'Bitiş tarihinde en yüksek fiyata siz sahipseniz. Gerekli işlemler yapılarak değer assetlerinize aktarılır.',
    'Cüzdanızda teklifte bulunacağınız kadar miktarının yüzde %5 transaction ücreti de dahil olacak şekilde bakiyeniz olmalıdır.',
  ];
  console.log('pixesData', pidTextData);
  return (
    <>
      <View
        style={{
          backgroundColor: 'white',
          marginHorizontal: 15,
          marginVertical: 10,
          borderRadius: 6,
          shadowColor: FlexibleDesign.shadowColor,
          shadowOffset: {
            width: 8,
            height: 2,
          },
          shadowOpacity: 0.5,
          shadowRadius: 5,
          elevation: 20,
        }}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginHorizontal: 20,
          }}>
          <Text
            style={{
              fontWeight: 'bold',
              fontSize: FlexibleDesign.fontSize + 4,
              marginVertical: 10,
              color: 'black',
            }}>
            {data.typeName}
          </Text>
          <Text
            style={{
              marginTop: 5,
              fontWeight: 'bold',
              color: 'black',
              letterSpacing: 0.5,
              fontSize: FlexibleDesign.fontSize + 4,
            }}>
            {data.code}
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginHorizontal: 10,
          }}>
          <TouchableOpacity
            disabled={true}
            style={{
              backgroundColor: '#7189ba',
              borderRadius: 10,
              flex: 1,
              alignItems: 'center',
              shadowColor: FlexibleDesign.shadowColor,
              shadowOffset: {
                width: 0,
                height: 10,
              },
              shadowOpacity: 0.2,
              shadowRadius: 4,
              elevation: 20,
              marginRight: 10,
            }}>
            <Text
              style={{
                marginVertical: 5,
                fontWeight: '500',
                letterSpacing: 0.7,
                fontSize: FlexibleDesign.fontSize - 2,
              }}>
              {`LEVEL : ${data.level}`}
            </Text>
          </TouchableOpacity>
          {quality === 0 ? (
            <TouchableOpacity
              disabled={true}
              style={{
                shadowColor: FlexibleDesign.shadowColor,
                shadowOffset: {
                  width: 0,
                  height: 10,
                },
                shadowOpacity: 0.2,
                shadowRadius: 4,
                elevation: 20,
                backgroundColor: '#7189ba',
                borderRadius: 10,
                flex: 1,
                alignItems: 'center',
              }}>
              <Text
                style={{
                  marginVertical: 5,
                  fontWeight: '500',
                  letterSpacing: 0.7,
                  fontSize: FlexibleDesign.fontSize - 2,
                }}>
                {data.NFT}
              </Text>
            </TouchableOpacity>
          ) : null}

          <TouchableOpacity
            disabled={true}
            style={{
              shadowColor: FlexibleDesign.shadowColor,
              shadowOffset: {
                width: 0,
                height: 10,
              },
              shadowOpacity: 0.2,
              shadowRadius: 4,
              elevation: 20,
              backgroundColor: '#7189ba',
              borderRadius: 10,
              flex: 1,
              alignItems: 'center',
              marginLeft: 10,
            }}>
            <Text
              style={{
                marginVertical: 5,
                fontWeight: '500',
                letterSpacing: 0.7,
                fontSize: FlexibleDesign.fontSize - 2,
              }}>
              {`${data.qualityName ? data.qualityName : data.NFT}`}
            </Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            borderWidth: 0.2,
            marginHorizontal: 10,
            marginTop: 15,
            paddingHorizontal: 10,
            paddingVertical: 8,
            marginBottom: 10,
            borderRadius: 6,
          }}>
          {_.map(data.attributes, (item, index) => {
            return (
              <View
                style={{
                  flexDirection: 'row',
                  marginTop: 10,
                  alignItems: 'center',
                }}>
                <View
                  style={{
                    width: 30,
                    height: 30,
                    backgroundColor:
                      quality === 0 ? borderControlForPieceItem(index) : 'red',
                    borderRadius: 15,
                    marginRight: 6,
                  }}
                />
                <Text
                  style={{
                    flex: 1,
                    fontWeight: '500',
                    fontSize: FlexibleDesign.fontSize,
                  }}>
                  {item.title}
                </Text>
                <Text
                  style={{
                    fontWeight: '500',
                    fontSize: FlexibleDesign.fontSize,
                  }}>
                  {item.Value}
                </Text>
              </View>
            );
          })}
        </View>
      </View>
      {type === 3 ? (
        <View
          style={{
            backgroundColor: 'white',
            marginHorizontal: 15,
            marginBottom: 10,
            borderRadius: 6,
            shadowColor: FlexibleDesign.shadowColor,
            shadowOffset: {
              width: 8,
              height: 2,
            },
            shadowOpacity: 0.5,
            shadowRadius: 5,
            elevation: 20,
          }}>
          <View
            style={{
              borderWidth: 0.2,
              marginHorizontal: 10,
              marginTop: 15,
              paddingHorizontal: 10,
              paddingVertical: 8,
              marginBottom: 10,
              borderRadius: 6,
            }}>
            <View
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <Text
                style={{
                  flex: 1,
                  fontWeight: '500',
                  fontSize: FlexibleDesign.fontSize,
                }}>
                Start Date
              </Text>
              <Text
                style={{
                  fontWeight: '500',
                  fontSize: FlexibleDesign.fontSize,
                }}>{`${auctionData?.startDate}`}</Text>
            </View>
            <View
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <Text
                style={{
                  flex: 1,
                  fontWeight: '500',
                  fontSize: FlexibleDesign.fontSize,
                }}>
                End Date
              </Text>
              <Text
                style={{
                  fontWeight: '500',
                  fontSize: FlexibleDesign.fontSize,
                }}>{`${auctionData?.endDate}`}</Text>
            </View>

            <View
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <Text
                style={{
                  flex: 1,
                  fontWeight: '500',
                  fontSize: FlexibleDesign.fontSize,
                }}>
                Total Pid
              </Text>
              <Text
                style={{
                  fontWeight: '500',
                  fontSize: FlexibleDesign.fontSize,
                }}>{`${auctionData?.totalPid}`}</Text>
            </View>
            <View
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <Text
                style={{
                  flex: 1,
                  fontWeight: '500',
                  fontSize: FlexibleDesign.fontSize,
                }}>
                Lowest Pid Possible
              </Text>
              <Text
                style={{
                  fontWeight: '500',
                  fontSize: FlexibleDesign.fontSize,
                }}>{`${auctionData?.lowestPrice} ${auctionData.coinCode}`}</Text>
            </View>
            <View
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <Text
                style={{
                  flex: 1,
                  fontWeight: '500',
                  fontSize: FlexibleDesign.fontSize,
                }}>
                Highest Pid Possible
              </Text>
              <Text
                style={{
                  fontWeight: '500',
                  fontSize: FlexibleDesign.fontSize,
                }}>{`${auctionData?.highestPrice} ${auctionData.coinCode}`}</Text>
            </View>
            <View
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <Text
                style={{
                  flex: 1,
                  fontWeight: '500',
                  fontSize: FlexibleDesign.fontSize,
                }}>
                Latest Pid Price
              </Text>
              <Text
                style={{
                  fontWeight: '500',
                  fontSize: FlexibleDesign.fontSize,
                }}>{`${auctionData?.currentHighPrice} ${auctionData.coinCode}`}</Text>
            </View>
          </View>
          <View
            style={{
              borderWidth: 0.2,
              marginHorizontal: 10,
              paddingHorizontal: 10,
              paddingVertical: 8,
              marginBottom: 10,
              borderRadius: 6,
            }}>
            {_.map(pidTextData, item => {
              return (
                <Text
                  style={{
                    fontSize: FlexibleDesign.fontSize - 4,
                    marginTop: 2,
                  }}>
                  {`*${item}`}
                </Text>
              );
            })}
          </View>
        </View>
      ) : type === 2 ? null : (
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginHorizontal: 15,
            backgroundColor: 'white',
            borderRadius: 6,
            paddingHorizontal: 20,
            paddingVertical: 10,
            marginTop: 5,
            shadowColor: FlexibleDesign.shadowColor,
            shadowOffset: {
              width: 8,
              height: 10,
            },
            shadowOpacity: 0.5,
            shadowRadius: 5,
            elevation: 20,
            marginBottom: 12,
          }}>
          {type === 0 ? (
            <>
              <Text
                style={{
                  fontSize: FlexibleDesign.fontSize + 4,
                  fontWeight: 'bold',
                  letterSpacing: 0.7,
                }}>
                PRICE
              </Text>
              <Text
                style={{
                  fontSize: FlexibleDesign.fontSize + 4,
                  fontWeight: 'bold',
                  letterSpacing: 0.7,
                }}>{`${data.price} SOL`}</Text>
            </>
          ) : (
            _.map(option === 0 ? optionNFT : optionNFTPiece, item => {
              return (
                <MMButton
                  text={item.title}
                  textStyle={{color: '#238636', fontWeight: 'bold'}}
                  containerStyle={{
                    borderWidth: 2,
                    flex: 1,
                    alignItems: 'center',
                    marginHorizontal: 2,
                    borderRadius: 6,
                    borderColor: '#238636',
                    paddingVertical: 6,
                  }}
                />
              );
            })
          )}
        </View>
      )}
    </>
  );
};

export default MMMarketItemValuesShower;
