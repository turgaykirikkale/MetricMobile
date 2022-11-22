import React, {useState} from 'react';
import {
  Modal,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  FlatList,
} from 'react-native';
import _, {values} from 'lodash';
import MMButton from '../../UI/MMButton';
import MMMultiSlider from '../../UI/MMMultiSlider';
const MMMarketPieceFilterModal = props => {
  //NFTsiz kullanımını nasıl arttırabılırsınız bunun için ne yapılabilir?
  //Eğerki NFTsi olmayanla

  const {modalShow, closeModal, filterModal, selectedSubTab} = props;
  const [multiSliderValuesForLevel, setMultiSliderValueForLevel] = useState([
    0, 200,
  ]);

  const [FilterData, setFilterData] = useState({
    selectedSubTab: null,
    sort: null,
    startLevel: null,
    endLevel: null,
  });
  const carPieceFilterItems = [
    {
      type: 0,
      name: 'Type',
      Values: [
        {name: 'BATTERY', sort: 0},
        {name: 'POWER', sort: 1},
        {name: 'PLAK', sort: 2},
        {name: 'SERVICE', sort: 3},
      ],
    },
    {
      type: 1,
      name: 'Level',
      StartValue: 0,
      EndValue: 200,
    },
  ];

  const passangerPieceFilterItems = [
    {
      type: 0,
      name: 'Type',
      Values: [
        {name: 'PRODUCTIVITY', sort: 0},
        {name: 'IMPROVEMENT', sort: 1},
        {name: 'CHANCE', sort: 2},
        {name: 'RESTORE', sort: 3},
      ],
    },

    {
      type: 1,
      name: 'Level',
      StartValue: 0,
      EndValue: 200,
    },
  ];

  const PassengerAndCarColorControl = (sort, type) => {
    if (FilterData.sort === sort) {
      if (type === 0) {
        return '#238636';
      } else {
        return 'white';
      }
    } else {
      switch (sort) {
        case 0:
          return '#14cccc';
        case 1:
          return '#e5c01d';
        case 2:
          return '#8d9fb2';
        case 3:
          return '#cc0c29';

        default:
          break;
      }
    }
  };
  const filterControl = item => {
    if (item.sort === FilterData.sort) {
      setFilterData(prevState => ({
        ...prevState,
        sort: null,
      }));
    } else {
      setFilterData(prevState => ({
        ...prevState,
        sort: item.sort,
        selectedSubTab: selectedSubTab,
      }));
    }
  };
  const controlBackgrounColor = item => {
    if (item.sort === FilterData.sort) {
      return '#238636';
    }
    return 'white';
  };

  const closeModalFunc = () => {
    setFilterData({
      sort: null,
      startLevel: null,
      endLevel: null,
      selectedSubTab: null,
    });
    setMultiSliderValueForLevel([0, 100]);
    closeModal && closeModal();
  };

  const clearFilter = () => {
    setFilterData({
      sort: null,
      startLevel: null,
      endLevel: null,
      selectedSubTab: null,
    });
    setMultiSliderValueForLevel([0, 100]);
  };
  const selectedFilter = () => {
    filterModal && filterModal(FilterData);
    setFilterData({
      sort: null,
      startLevel: null,
      endLevel: null,
      selectedSubTab: null,
    });
    setMultiSliderValueForLevel([0, 100]);
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
            selectedSubTab === 0
              ? passangerPieceFilterItems
              : carPieceFilterItems,
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
                      marginTop: 4,
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
                              marginVertical: 8,
                              alignItems: 'center',
                              borderRadius: 20,
                              backgroundColor: controlBackgrounColor(item),
                              borderColor: PassengerAndCarColorControl(
                                item.sort,
                                0,
                              ),
                            }}>
                            <Text
                              style={{
                                color: PassengerAndCarColorControl(
                                  item.sort,
                                  1,
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
                        multiSliderValues={multiSliderValuesForLevel}
                        min={multiSliderValuesForLevel[0]}
                        max={multiSliderValuesForLevel[1]}
                        sliderValues={values => setLevelSliderFilter(values)}
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

export default MMMarketPieceFilterModal;
