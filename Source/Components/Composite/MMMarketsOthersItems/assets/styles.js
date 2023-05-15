import {StyleSheet} from 'react-native';
import {FlexibleDesigns} from '../../../../Utils/FlexibleDesign';
const FlexibleDesign = FlexibleDesigns();

export const styles = StyleSheet.create({
  mainContainer: {flex: 1, marginBottom: 5, marginTop: 5},
  flatListItemContainer: {
    width: '100%',
    marginBottom: 5,
    backgroundColor: '#F8F9FA',
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
  headerImagePriceContainer: {
    width: '100%',
    alignSelf: 'center',
    paddingHorizontal: 10,
    marginTop: 5,
  },
  headerContainer: {
    paddingHorizontal: 8,
    paddingVertical: 2,
    marginRight: 6,
    marginVertical: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerTextStyle: {
    fontSize: FlexibleDesign.fontSize - 2,
    fontWeight: '400',
  },
  imageStyle: {
    width: '100%',
    height: FlexibleDesign.marketItemHeight,
    borderWidth: 2,
    borderRadius: 20,
  },
  itemValueAndQualityContainer: {
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  itemValueAndQualityTextStyle: {
    fontSize: 10,
    letterSpacing: 1,
    fontWeight: '500',
  },
  priceContainer: {
    paddingVertical: 2,
    borderRadius: 6,
    marginTop: 11,
    justifyContent: 'center',
    alignItems: 'center',
  },
  priceTextStyle: {
    fontWeight: 'bold',
    fontSize: 14,
  },
  buttonTextStyle: {
    textAlign: 'center',
    marginVertical: 4,
    fontWeight: 'bold',
    fontSize: FlexibleDesign.fontSize,
    color: 'white',
    letterSpacing: 1,
  },
  buttonContainerStyle: {
    marginTop: 4,
    backgroundColor: '#238636',
    marginHorizontal: 20,
    marginBottom: 8,
    borderRadius: 6,
  },
});
