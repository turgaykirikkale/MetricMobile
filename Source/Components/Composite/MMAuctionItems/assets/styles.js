import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  mainContainer: {
    marginTop: 10,
    marginHorizontal: 10,
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderRadius: 6,
    borderWidth: 1,
    backgroundColor: 'white',
    shadowOffset: {
      width: 5,
      height: 4,
    },
    shadowOpacity: 0.5,
    shadowRadius: 3,
    elevation: 20,
  },
  headerContainer: {flexDirection: 'row', justifyContent: 'space-between'},
  NFTNameTypeContainer: {
    flex: 1,
    // borderWidth: 1,
    paddingVertical: 2,
    borderRadius: 6,
    marginLeft: 6,
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  NFTQualityContainer: {
    flex: 1,
    paddingVertical: 2,
    borderRadius: 6,
    marginLeft: 6,
    alignItems: 'center',
    justifyContent: 'center',
  },
  NFTChildTypeNameContainer: {
    flex: 1,
    paddingHorizontal: 8,
    // borderWidth: 1,
    paddingVertical: 2,
    borderRadius: 6,
    marginLeft: 6,
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  headerAllTextStyle: {
    fontSize: 11,
  },
  auctionDetailContainer: {marginVertical: 6, flexDirection: 'row'},
  flex1: {flex: 1},
  auctionDetailItemContainer: {
    flexDirection: 'row',
    borderBottomWidth: 0.167,
    marginHorizontal: 10,
    justifyContent: 'space-between',
    paddingBottom: 1,
  },
  auctionDetailItemTextStyle: {fontSize: 10, letterSpacing: 0.7},
  imageContainer: {justifyContent: 'center'},
  imageStyle: {
    marginLeft: 10,
    borderWidth: 3,
    width: 80,
    height: 80,
    borderRadius: 20,
  },
  buttonContainer: {
    borderRadius: 6,
    alignItems: 'center',
    paddingVertical: 6,
  },
  buttonTextStyle: {
    color: 'white',
    fontSize: 12,
    fontWeight: '600',
    letterSpacing: 0.5,
  },
});
