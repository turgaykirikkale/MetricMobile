import {StyleSheet} from 'react-native';
import {FlexibleDesigns} from '../../../../Utils/FlexibleDesign';

const FlexibleDesign = FlexibleDesigns();
const windowWidth = FlexibleDesign.windowWidth;

export const styles = StyleSheet.create({
  mainContainer: {
    width: '95%',
    alignSelf: 'center',
    marginTop: 10,
    flexDirection: 'row',
    marginHorizontal: 10,
    shadowColor: FlexibleDesign.shadowColor,
    shadowOffset: {
      width: 5,
      height: 5,
    },
    shadowOpacity: 0.5,
    shadowRadius: 5,
    elevation: 20,
  },
  sliderButtonsContainer: {
    position: 'absolute',
    zIndex: 99,
    width: '100%',
    alignSelf: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    // borderWidth: 1,
    paddingHorizontal: 4,
  },
  NFTImageStyle: {
    width: '100%',
    height: windowWidth / 1.3,
    borderWidth: 4,
    borderRadius: 6,
  },
  rightTopButtonContainer: {
    width: 50,
    height: 50,
    backgroundColor: '#1150a3',
    position: 'absolute',
    right: 15,
    top: 15,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  rightBottomButtonContainer: {
    width: 50,
    height: 50,
    backgroundColor: '#841717',
    position: 'absolute',
    right: 15,
    bottom: 15,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  leftTopButtonContainer: {
    width: 50,
    height: 50,
    backgroundColor: '#4d7c10',
    position: 'absolute',
    left: 15,
    top: 15,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  leftBottomButtonContainer: {
    width: 50,
    height: 50,
    backgroundColor: '#666b75',
    position: 'absolute',
    left: 15,
    bottom: 15,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  allButtonTextStyle: {
    fontSize: FlexibleDesign.fontSize + 12,
    fontWeight: 'bold',
  },
});
