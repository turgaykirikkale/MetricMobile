import {StyleSheet} from 'react-native';
import {FlexibleDesigns} from '../../../../Utils/FlexibleDesign';

const FlexibleDesign = FlexibleDesigns();

export const styles = StyleSheet.create({
  mainContainer: {flex: 1, marginBottom: 5, marginTop: 5},
  FlatListItemContainer: {
    marginTop: 5,
    marginBottom: 5,
    backgroundColor: '#F8F9FA',
    // height: windowWidth / 1.8,
    justifyContent: 'center',
    borderWidth: 1,
    borderRadius: 20,
    shadowOffset: {
      width: 5,
      height: 4,
    },
    shadowOpacity: 0.5,
    shadowRadius: 3,
    elevation: 20,
  },
  itemIDAndTypeContainer: {
    // width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 6,
    marginTop: 5,
  },
  itemIDContainer: {
    paddingHorizontal: 8,
    borderWidth: 1,
    paddingVertical: 2,
    borderRadius: 6,
    marginTop: 5,
    marginLeft: 6,
    justifyContent: 'center',
  },
  itemIDTextStyle: {
    fontWeight: '400',
    fontSize: FlexibleDesign.fontSize - 2,
  },
  itemTypeNameContainer: {
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderWidth: 1,
    borderRadius: 6,
    marginTop: 5,
    marginRight: 6,
    justifyContent: 'center',
  },
  itemTypeNameTextStyle: {
    fontSize: FlexibleDesign.fontSize - 2,
    fontWeight: '400',
  },
  imageContainerLabelAndPriceContainer: {
    width: '100%',
    alignSelf: 'center',
    paddingHorizontal: 10,
    marginTop: 10,
  },
  imageStyle: {
    width: '100%',
    height: FlexibleDesign.marketItemHeight,
    borderWidth: 2,
    borderRadius: 20,
  },
  itemQualityNameAndLevelContainer: {
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  itemQualityTextStyle: {
    fontSize: FlexibleDesign.fontSize - 2,
    letterSpacing: 1,
    fontWeight: '500',
  },
  priceContainerStyle: {
    paddingVertical: 2,
    borderRadius: 6,
    marginTop: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  priceTextStyle: {
    fontWeight: 'bold',
    fontSize: FlexibleDesign.fontSize + 2,
  },
  buyButtonContainerStyle: {
    marginTop: 4,
    backgroundColor: '#238636',
    marginHorizontal: 20,
    marginBottom: 8,
    borderRadius: 6,
  },
  buyButtonTextStyle: {
    textAlign: 'center',
    marginVertical: 4,
    fontWeight: 'bold',
    fontSize: FlexibleDesign.fontSize,
    color: 'white',
    letterSpacing: 1,
  },
});
