import React, {useState} from 'react';
import {
  Modal,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  FlatList,
} from 'react-native';
import _ from 'lodash';
import MMButton from '../../UI/MMButton';
import MMMultiSlider from '../../UI/MMMultiSlider';
const MMMarketFilterModal = props => {
  //NFTsiz kullanımını nasıl arttırabılırsınız bunun için ne yapılabilir?
  //Eğerki NFTsi olmayanla

  const {modalShow, closeModal, filterModal, selectedSubTab} = props;
  const [multiSliderValuesForLevel, setMultiSliderValueForLevel] = useState([
    0, 200,
  ]);
  const [multiSliderValuesForPrice, setMultiSliderValueForPrice] = useState([
    0, 10000,
  ]);
  const [FilterData, setFilterData] = useState({
    selectedSubTab: null,
    type: null,
    quality: null,
    startLevel: null,
    endLevel: null,
    startPrice: null,
    endPrice: null,
  });
  const carFilterItems = [
    {
      type: 0,
      name: 'Type',
      Values: [
        {name: 'STANDARD', filterType: 0, nftType: 0},
        {name: 'SUV', filterType: 0, nftType: 1},
        {name: 'SPORT', filterType: 0, nftType: 2},
        {name: 'CABRIO', filterType: 0, nftType: 3},
        {name: 'TRUCKS', filterType: 0, nftType: 4},
      ],
    },
    {
      type: 0,
      name: 'Quality',
      Values: [
        {name: 'IRON', qualityLevel: 0, filterType: 1},
        {name: 'BRONZE', qualityLevel: 1, filterType: 1},
        {name: 'SILVER', qualityLevel: 2, filterType: 1},
        {name: 'GOLD', qualityLevel: 3, filterType: 1},
        {name: 'PLATINUM', qualityLevel: 4, filterType: 1},
        {name: 'DIAMOND', qualityLevel: 5, filterType: 1},
      ],
    },
    {
      type: 1,
      name: 'Level',
      StartValue: 0,
      EndValue: 200,
    },
    {
      type: 2,
      name: 'Price',
      StartValue: 0,
      EndValue: 100000,
    },
  ];

  const passangerFilterItems = [
    {
      type: 0,
      name: 'Type',
      Values: [
        {name: 'TITAN', filterType: 0, nftType: 0},
        {name: 'PARAGON', filterType: 0, nftType: 1},
        {name: 'COSMİC', filterType: 0, nftType: 2},
        {name: 'BLAZE', filterType: 0, nftType: 3},
        {name: 'HURRICANE', filterType: 0, nftType: 4},
      ],
    },
    {
      type: 0,
      name: 'Quality',
      Values: [
        {name: 'IRON', qualityLevel: 0, filterType: 1},
        {name: 'BRONZE', qualityLevel: 1, filterType: 1},
        {name: 'SILVER', qualityLevel: 2, filterType: 1},
        {name: 'GOLD', qualityLevel: 3, filterType: 1},
        {name: 'PLATINUM', qualityLevel: 4, filterType: 1},
        {name: 'DIAMOND', qualityLevel: 5, filterType: 1},
      ],
    },
    {
      type: 1,
      name: 'Level',
      StartValue: 0,
      EndValue: 200,
    },
    {
      type: 2,
      name: 'Price',
      StartValue: 0,
      EndValue: 10000,
    },
  ];

  const PassengerAndCarColorControl = quality => {
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
  const filterControl = item => {
    switch (item.filterType) {
      case 0:
        if (item.nftType === FilterData.type) {
          return setFilterData(prevState => ({
            ...prevState,
            type: null,
          }));
        }
        return setFilterData(prevState => ({
          ...prevState,
          type: item.nftType,
          selectedSubTab: selectedSubTab,
        }));

      case 1:
        if (item.qualityLevel === FilterData.quality) {
          return setFilterData(prevState => ({
            ...prevState,
            quality: null,
          }));
        }
        return setFilterData(prevState => ({
          ...prevState,
          quality: item.qualityLevel,
          selectedSubTab: selectedSubTab,
        }));

      default:
        break;
    }
  };
  const controlBackgrounColor = item => {
    if (item.filterType === 0 && item.nftType === FilterData.type) {
      return '#238636';
    } else if (
      item.filterType === 1 &&
      item.qualityLevel === FilterData.quality
    ) {
      return '#238636';
    }
  };

  const closeModalFunc = () => {
    setFilterData({
      type: null,
      quality: null,
      startLevel: null,
      endLevel: null,
      startPrice: null,
      endPrice: null,
      selectedSubTab: null,
    });
    setMultiSliderValueForLevel([0, 100]);
    setMultiSliderValueForPrice([0, 10000]);
    closeModal && closeModal();
  };

  const clearFilter = () => {
    setFilterData({
      type: null,
      quality: null,
      startLevel: null,
      endLevel: null,
      startPrice: null,
      endPrice: null,
      selectedSubTab: null,
    });
    setMultiSliderValueForLevel([0, 100]);
    setMultiSliderValueForPrice([0, 10000]);
  };
  const selectedFilter = () => {
    filterModal && filterModal(FilterData);
    setFilterData({
      type: null,
      quality: null,
      startLevel: null,
      endLevel: null,
      startPrice: null,
      endPrice: null,
      selectedSubTab: null,
    });
    setMultiSliderValueForLevel([0, 100]);
    setMultiSliderValueForPrice([0, 10000]);
  };
  const setLevelSliderFilter = values => {
    setMultiSliderValueForLevel(values);
    setFilterData(prevState => ({
      ...prevState,
      startLevel: values[0],
      endLevel: values[1],
      selectedSubTab: selectedSubTab,
    }));
  };
  const setPriceSliderFilter = values => {
    setMultiSliderValueForPrice(values);
    setFilterData(prevState => ({
      ...prevState,
      startPrice: values[0],
      endPrice: values[1],
      selectedSubTab: selectedSubTab,
    }));
  };

  return (
    <Modal
      visible={modalShow}
      animationType={'slide'}
      swipeDirection="left"
      transparent={true}
      style={{backgroundColor: 'rgba(52, 52, 52, 0.8)'}}>
      <ScrollView
        style={{
          height: '100%',
          width: '100%',
          paddingTop: 40,
          paddingBottom: 100,
          paddingHorizontal: 8,
          alignSelf: 'flex-end',
          backgroundColor: 'rgba(255, 255, 255, 1)',
        }}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <Text
            style={{
              color: '#238636',
              fontWeight: 'bold',
              letterSpacing: 2,
              fontSize: 16,
            }}>
            Filter
          </Text>
          <MMButton
            onPress={() => closeModalFunc()}
            text={'CLOSE'}
            textStyle={{
              marginHorizontal: 10,
              marginVertical: 3,
              letterSpacing: 0.7,
              fontSize: 12,
              fontWeight: 'bold',
              color: 'white',
            }}
            containerStyle={{backgroundColor: '#c64141', borderRadius: 6}}
          />
        </View>

        <View>
          {_.map(
            selectedSubTab === 0 ? passangerFilterItems : carFilterItems,
            data => {
              return (
                <View
                  style={{
                    borderWidth: 1,
                    marginTop: 7,
                    borderRadius: 6,
                    borderColor: '#ced7ea',
                    paddingVertical: 10,
                  }}>
                  <View
                    style={{
                      borderWidth: 0.3,
                      marginHorizontal: 10,
                      marginVertical: 4,
                      width: '40%',
                      borderRadius: 6,
                      borderColor: '#ced7ea',
                      backgroundColor: '#ced7ea',
                    }}>
                    <Text
                      style={{
                        textAlign: 'center',
                        color: '#7189ba',
                        fontWeight: '500',
                        letterSpacing: 0.7,
                        fontSize: 12,
                      }}>
                      {data.name}
                    </Text>
                  </View>
                  <View style={{marginHorizontal: 16}}>
                    {data.type === 0 ? (
                      <FlatList
                        showsVerticalScrollIndicator={false}
                        data={data.Values}
                        scrollEnabled={false}
                        renderItem={({item, index}) => (
                          <TouchableOpacity
                            onPress={() => filterControl(item)}
                            style={{
                              shadowColor: 'black',
                              shadowOffset: {width: 4, height: 6},
                              shadowOpacity: 0.3,
                              shadowRadius: 5,
                              elevation: 10,
                              display: 'flex',
                              width: '46%',
                              borderWidth: 1,
                              marginHorizontal: 5,
                              marginVertical: 6,
                              alignItems: 'center',
                              borderRadius: 20,
                              borderColor:
                                FilterData.quality === item.qualityLevel ||
                                FilterData.type === item.nftType
                                  ? '#238636'
                                  : PassengerAndCarColorControl(
                                      item.qualityLevel,
                                    ),
                              backgroundColor: controlBackgrounColor(item),
                            }}>
                            <Text
                              style={{
                                color:
                                  FilterData.quality === item.qualityLevel ||
                                  FilterData.type === item.nftType
                                    ? 'white'
                                    : PassengerAndCarColorControl(
                                        item.qualityLevel,
                                      ),
                                letterSpacing: 0.7,
                                fontWeight: 'bold',
                                fontSize: 10,
                                marginVertical: 3,
                              }}>
                              {item.name}
                            </Text>
                          </TouchableOpacity>
                        )}
                        numColumns={2}
                      />
                    ) : (
                      <MMMultiSlider
                        type={data.type}
                        multiSliderValues={
                          data.type === 1
                            ? multiSliderValuesForLevel
                            : multiSliderValuesForPrice
                        }
                        min={
                          data.type === 1
                            ? multiSliderValuesForLevel[0]
                            : multiSliderValuesForPrice[0]
                        }
                        max={
                          data.type === 1
                            ? multiSliderValuesForLevel[1]
                            : multiSliderValuesForPrice[1]
                        }
                        sliderValues={values =>
                          data.type === 1
                            ? setLevelSliderFilter(values)
                            : setPriceSliderFilter(values)
                        }
                      />
                    )}
                  </View>
                </View>
              );
            },
          )}
        </View>
        <View style={{flexDirection: 'row', marginTop: 20}}>
          <MMButton
            onPress={() => clearFilter()}
            text={'CLEAR'}
            textStyle={{
              color: 'white',
              marginHorizontal: 10,
              marginVertical: 8,
              letterSpacing: 0.7,
              fontSize: 14,
              fontWeight: 'bold',
            }}
            containerStyle={{
              alignItems: 'center',
              backgroundColor: '#c64141',
              borderRadius: 4,
              flex: 1,
              marginRight: 5,
              justifyContent: 'center',
            }}
          />
          <MMButton
            onPress={() => selectedFilter()}
            text={'FİLTER'}
            containerStyle={{
              backgroundColor: '#238636',
              borderRadius: 4,
              flex: 1,
              alignItems: 'center',
              marginLeft: 4,
              justifyContent: 'center',
            }}
            textStyle={{
              color: 'white',
              marginHorizontal: 10,
              marginVertical: 8,
              letterSpacing: 0.7,
              fontSize: 14,
              fontWeight: 'bold',
            }}
          />
        </View>
      </ScrollView>
    </Modal>
  );
};

export default MMMarketFilterModal;
