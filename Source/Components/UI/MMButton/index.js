import React from 'react';
import {TouchableOpacity, Text} from 'react-native';
import MMVectorIcon from '../MMVectorIcon';
const MMButton = props => {
  const {
    text,
    textStyle,
    containerStyle,
    onPress,
    disabled,
    iconName,
    iconSize,
    iconColor,
  } = props;
  return (
    <TouchableOpacity
      disabled={disabled}
      style={containerStyle}
      onPress={() => onPress && onPress()}>
      {text ? (
        <Text style={[{opacity: disabled ? 0.5 : null}, textStyle]}>
          {text}
        </Text>
      ) : null}
      {iconName ? (
        <MMVectorIcon iconName={iconName} color={iconColor} size={iconSize} />
      ) : null}
    </TouchableOpacity>
  );
};

export default MMButton;
