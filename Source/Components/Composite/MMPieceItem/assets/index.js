import {StyleSheet} from 'react-native';
import {FlexibleDesigns} from '../../../../Utils/FlexibleDesign';
const FlexibleDesign = FlexibleDesigns();

export const styles = StyleSheet.create({
  mainContainer: {flex: 1, marginBottom: 5, marginTop: 5},
  flatListItemContainer: {
    width: '100%',
    marginTop: 5,
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
  attributesMapContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 6,
    marginTop: 5,
    paddingHorizontal: 8,
  },
  attributesValueContainer: {
    paddingHorizontal: 6,
    borderWidth: 1,
    paddingVertical: 2,
    borderRadius: 6,
    marginTop: 5,
    justifyContent: 'center',
  },
  attributesTextValue: {
    fontWeight: '400',
    fontSize: FlexibleDesign.fontSize - 2,
  },
  imageTypeNameAndLevelContainer: {
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
  typeNameAndLevelChildContainer: {
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  typeNameAndLevelTextStyle: {
    fontSize: FlexibleDesign.fontSize - 2,
    letterSpacing: 1,
    fontWeight: '500',
  },
  priceContainer: {
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
  buttonTextStyle: {
    textAlign: 'center',
    marginVertical: 4,
    fontWeight: 'bold',
    fontSize: FlexibleDesign.fontSize,
    color: 'white',
    letterSpacing: 1,
  },
  buttonContainer: {
    marginTop: 4,
    backgroundColor: '#238636',
    marginHorizontal: 20,
    marginBottom: 8,
    borderRadius: 6,
  },
});
