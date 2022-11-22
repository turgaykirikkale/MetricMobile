import {Dimensions} from 'react-native';

const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;
const generalValues = {
  buttonActiveOpacity: 0.5,
  shadowOpacity: 0.6,
  shadowColor: 'black',
};
const smallScreen = {
  headerIconWrapperHeight: 18,
  headerIconWrapperWidth: 18,
  headerIconWrapperRadius: 9,
  headerProfileIconWrapperHeight: 45,
  headerProfileIconWrapperWidht: 45,
  headerProfileIconWrapperRadius: 12.5,
  marketItemHeight: 100,
};

const mediumScreen = {
  headerIconWrapperHeight: 20,
  headerIconWrapperWidth: 20,
  headerIconWrapperRadius: 10,
  headerProfileIconWrapperHeight: 50,
  headerProfileIconWrapperWidht: 50,
  headerProfileIconWrapperRadius: 15,
  fontSize: 10,
  marketItemHeight: 120,
};
const mediumScreenPlus = {
  headerIconWrapperHeight: 22,
  headerIconWrapperWidth: 22,
  headerIconWrapperRadius: 11,
  headerProfileIconWrapperHeight: 55,
  headerProfileIconWrapperWidht: 55,
  headerProfileIconWrapperRadius: 17.5,
  fontSize: 12,
  marketItemHeight: 140,
};

const bigScreen = {
  headerIconWrapperHeight: 24,
  headerIconWrapperWidth: 24,
  headerIconWrapperRadius: 12,
  headerProfileIconWrapperHeight: 60,
  headerProfileIconWrapperWidht: 60,
  headerProfileIconWrapperRadius: 20,
  fontSize: 14,
  marketItemHeight: 160,
};

export const FlexibleDesigns = () => {
  if (windowHeight < 600) {
    let returnItems = {
      ...generalValues,
      ...smallScreen,
      windowHeight,
      windowWidth,
    };
    return returnItems;
  }

  if (windowHeight > 600 && windowHeight < 750) {
    let returnItems = {
      ...generalValues,
      ...mediumScreen,
      windowHeight,
      windowWidth,
    };
    return returnItems;
  }

  if (windowHeight > 750 && windowHeight < 900) {
    let returnItems = {
      ...generalValues,
      ...mediumScreenPlus,
      windowHeight,
      windowWidth,
    };
    return returnItems;
  }
  if (windowHeight > 900) {
    let returnItems = {
      ...generalValues,
      ...bigScreen,
      windowHeight,
      windowWidth,
    };
    return returnItems;
  }
};
