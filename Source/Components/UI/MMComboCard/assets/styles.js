import {StyleSheet} from 'react-native';
import {FlexibleDesigns} from '../../../../Utils/FlexibleDesign';
const FlexibleDesign = FlexibleDesigns();
const windowWidth = FlexibleDesign.windowWidth;

export const styles = StyleSheet.create({
  mainContainer: {
    borderRadius: 6,
    paddingVertical: 6,
    marginHorizontal: 10,
    marginTop: 8,
    // backgroundColor: 'rgba(52, 52, 52, 0.3)',
    shadowColor: FlexibleDesign.shadowColor,
    shadowOffset: {
      width: 10,
      height: 10,
    },
    shadowOpacity: 0.5,
    shadowRadius: 5,
    elevation: 20,
  },
  classCardContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  classCardItem: {
    marginLeft: 5,
    width: windowWidth / 6,
    height: windowWidth / 6,
    backgroundColor: '#c6cad3',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
