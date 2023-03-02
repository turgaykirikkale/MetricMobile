import {StyleSheet} from 'react-native';
import {FlexibleDesigns} from '../../../../Utils/FlexibleDesign';
const FlexibleDesign = FlexibleDesigns();

export const styles = StyleSheet.create({
  mainContainer: {
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
      height: 3,
    },
    shadowOpacity: 0.5,
    shadowRadius: 5,
    elevation: 20,
    marginBottom: 12,
  },
  priceTitleTextStyle: {
    fontSize: FlexibleDesign.fontSize + 4,
    fontWeight: 'bold',
    letterSpacing: 0.7,
  },
});
