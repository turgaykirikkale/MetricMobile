import {StyleSheet} from 'react-native';
import {FlexibleDesigns} from '../../../Utils/FlexibleDesign';

const FlexibleDesign = FlexibleDesigns();

export const styles = StyleSheet.create({
  LinearGradienStyle: {
    flex: 1,
  },
  marginTop: {marginTop: 5},
  buttonMainContainer: {
    flexDirection: 'row',
    marginVertical: 5,
  },
  buttonContainer: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#238636',
  },
  buttonTextStyle: {
    fontSize: FlexibleDesign.fontSize,
    color: 'white',
    fontWeight: 'bold',
    letterSpacing: 0.7,
    marginVertical: 10,
  },
});
