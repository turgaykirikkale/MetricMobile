import {StyleSheet} from 'react-native';
import {FlexibleDesigns} from '../../../../Utils/FlexibleDesign';

const FlexibleDesign = FlexibleDesigns();

export const styles = StyleSheet.create({
  mainContainer: {
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
  },
  NFTInnerTypeNameAndIDContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: 20,
    alignContent: 'center',
  },
  NFTInnerTypeNameAndIDTextStyle: {
    fontWeight: 'bold',
    fontSize: FlexibleDesign.fontSize + 4,
    marginVertical: 10,
    color: 'black',
  },
  NFTLevelTypeQuailityContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 10,
  },
  NFTLevelTypeQuailityButtonContainer: {
    backgroundColor: '#7189ba',
    borderRadius: 10,
    flex: 1,
    alignItems: 'center',
    shadowColor: FlexibleDesign.shadowColor,
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 20,
    marginRight: 10,
  },
  NFTLevelTypeQuailityButtonTextStyle: {
    marginVertical: 5,
    fontWeight: '500',
    letterSpacing: 0.7,
    fontSize: FlexibleDesign.fontSize - 2,
  },
  NFTAttributesContainer: {
    borderWidth: 0.2,
    marginHorizontal: 10,
    marginTop: 15,
    paddingHorizontal: 10,
    paddingVertical: 8,
    backgroundColor: 'white',
    marginBottom: 10,
    borderRadius: 6,
    shadowColor: FlexibleDesign.shadowColor,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 20,
    marginRight: 10,
  },
  NFTAttributesItemContainer: {
    flexDirection: 'row',
    marginTop: 10,
    alignItems: 'center',
  },
  NFTAttributesSymbolContainer: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: 'red',
    marginRight: 6,
  },
  NFTAttributesItemTitleStyle: {
    flex: 1,
    fontWeight: '500',
    fontSize: FlexibleDesign.fontSize,
  },
  NFTAttributesItemValueStyle: {
    letterSpacing: 0.8,
    fontWeight: '500',
    fontSize: FlexibleDesign.fontSize,
  },
});
