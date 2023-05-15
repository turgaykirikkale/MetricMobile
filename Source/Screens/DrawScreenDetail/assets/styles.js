import {StyleSheet} from 'react-native';
import {FlexibleDesigns} from '../../../Utils/FlexibleDesign';
const FlexibleDesign = FlexibleDesigns();
const windowWidth = FlexibleDesign.windowWidth;

export const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  imageContainer: {
    marginHorizontal: 10,
    marginVertical: 15,
    shadowOffset: {
      width: 5,
      height: 4,
    },
    shadowOpacity: 0.5,
    shadowRadius: 3,
    elevation: 20,
  },
  imageStyle: {
    width: '100%',
    height: windowWidth / 2,
    borderRadius: 6,
  },
  boxInformationContainerStyle: {
    marginHorizontal: 10,
    shadowOffset: {
      width: 5,
      height: 4,
    },
    shadowOpacity: 0.5,
    shadowRadius: 3,
    elevation: 20,
  },
  barTotalJoinedCountTextStyle: {
    position: 'absolute',
    zIndex: 999,
    fontSize: 12,
    right: 0,
    marginRight: 6,
    fontWeight: 'bold',
    letterSpacing: 0.7,
  },
  joinedBarsContainerStyle: {flexDirection: 'row'},
  joinedBarLeftContainerStyle: {
    backgroundColor: '#238636',
    height: 15,
    borderBottomLeftRadius: 8,
    borderTopLeftRadius: 8,
  },
  joinedBarRightContainerStyle: {
    backgroundColor: '#c4c3c9',
    height: 15,
    borderBottomRightRadius: 8,
    borderTopRightRadius: 8,
  },
  itemTitleAndDescriptionContainer: {
    marginVertical: 15,
    // borderWidth: 1,
    borderRadius: 4,
    backgroundColor: 'white',
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  titleTextStyle: {
    letterSpacing: 0.7,
    fontWeight: 'bold',
    marginBottom: 6,
  },
  descriptionContainerStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 3,
  },
  descriptionNameTextStyle: {
    letterSpacing: 0.7,
    fontWeight: '400',
  },
  rulesContainerStyle: {
    paddingHorizontal: 10,
    paddingVertical: 10,
    // borderWidth: 1,
    borderRadius: 6,
    backgroundColor: 'white',
  },
  rulesTitleTextStyle: {
    fontSize: FlexibleDesign.fontSize,
    fontWeight: 'bold',
  },
  rulesItemTextStyle: {
    fontSize: FlexibleDesign.fontSize - 4,
    marginTop: 6,
  },
  priceTicketAndButtonContainer: {marginHorizontal: 10},
  priceAndTicketChildContainer: {
    // borderWidth: 2,
    borderRadius: 6,
    paddingVertical: 10,
    paddingHorizontal: 8,
    flexDirection: 'row',
    marginBottom: 10,
    backgroundColor: '#ced7ea',
  },
  priceContainerStyle: {
    flex: 1,
    borderWidth: 1,
    paddingHorizontal: 6,
    borderRadius: 6,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10,
    paddingVertical: 4,
    borderColor: '#7189ba',
  },
  priceAndTicketTextStyle: {
    fontWeight: 'bold',
    letterSpacing: 0.7,
    fontSize: 10,
    color: '#7189ba',
  },
  ticketContainerStyle: {
    marginLeft: 10,
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    borderWidth: 1,
    paddingHorizontal: 6,
    borderRadius: 6,
    paddingVertical: 4,
    borderColor: '#7189ba',
  },
  buttonContainerStyle: {
    marginBottom: 5,
    alignItems: 'center',
    paddingVertical: 8,
    borderRadius: 6,
    backgroundColor: '#238636',
  },
  buttonTextStyle: {color: 'white', fontWeight: '500', letterSpacing: 0.7},
});
