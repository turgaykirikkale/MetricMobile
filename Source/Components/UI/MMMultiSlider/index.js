import React from 'react';
import {View, Text} from 'react-native';
import MultiSlider from '@ptomasroos/react-native-multi-slider';
import {FlexibleDesigns} from '../../../Utils/FlexibleDesign';

const MMMultiSlider = props => {
  const {min, max, sliderValues, multiSliderValues, type} = props;
  const FlexibleDesign = FlexibleDesigns();
  const windowWidth = FlexibleDesign.windowWidth;

  return (
    <View>
      <View
        style={{
          marginVertical: 6,
          marginBottom: -10,
          marginHorizontal: 2,
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}>
        <Text style={{fontWeight: 'bold', letterSpacing: 0.7, fontSize: 12}}>
          {type === 1
            ? `${multiSliderValues[0]}`
            : `${multiSliderValues[0]} SOL`}
        </Text>
        <Text style={{fontWeight: 'bold', letterSpacing: 0.7, fontSize: 12}}>
          {type === 1
            ? `${multiSliderValues[1]}`
            : `${multiSliderValues[1]} SOL`}
        </Text>
      </View>
      <View style={{alignItems: 'center', marginHorizontal: 10}}>
        <MultiSlider
          values={[multiSliderValues[0], multiSliderValues[1]]}
          sliderLength={windowWidth - 60}
          onValuesChange={e => sliderValues && sliderValues(e)}
          min={min}
          max={max}
          step={1}
          allowOverlap
          snapped
          trackStyle={{
            height: 10,
            borderRadius: 5,
          }}
          touchDimensions={{
            height: 20,
            width: 20,
            borderRadius: 10,
            slipDisplacement: 20,
          }}
          unselectedStyle={{
            backgroundColor: '#ced7ea',
          }}
          selectedStyle={{
            backgroundColor: '#238636',
          }}
          markerOffsetY={3.5}
          markerStyle={{
            width: 25,
            height: 25,
            borderRadius: 12.5,
          }}
        />
      </View>
    </View>
  );
};

export default MMMultiSlider;
