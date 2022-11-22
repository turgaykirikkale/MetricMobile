import React from 'react';
import {SvgXml} from 'react-native-svg';
import * as Icons from './Assets/Icons';
import * as Flags from './Assets/Flags';

const MMGeneralIcon = props => {
  const {iconName, color, size} = props;
  const inComingIcon = Icons[iconName] || Flags[iconName];
  if (inComingIcon) {
    return (
      <SvgXml
        xml={inComingIcon}
        width={size || '100%'}
        height={size || '100%'}
        color={color}
      />
    );
  }
  return null;
};

export default MMGeneralIcon;
