import React from 'react';
import {View, TouchableOpacity} from 'react-native';
import MMVectorIcon from '../MMVectorIcon';
import {styles} from './assets/styles';
import {FlexibleDesigns} from '../../../Utils/FlexibleDesign';

function MMComboCard(props) {
  const FlexibleDesign = FlexibleDesigns();
  const windowWidth = FlexibleDesign.windowWidth;

  const controlExtraClassCards = () => {
    let viewLoop = [];
    for (let index = 0; index < 5; index++) {
      viewLoop.push(
        <TouchableOpacity
          onPress={() => alert(index)}
          activeOpacity={0.7}
          style={styles.classCardItem}>
          <MMVectorIcon
            iconName={'plus-square'}
            color={'white'}
            size={windowWidth / 8}
          />
        </TouchableOpacity>,
      );
    }
    return viewLoop;
  };
  return (
    <View style={styles.mainContainer}>
      <View style={styles.classCardContainer}>{controlExtraClassCards()}</View>
    </View>
  );
}

export default MMComboCard;
