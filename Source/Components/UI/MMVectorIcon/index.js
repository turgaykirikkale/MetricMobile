import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import PropTypes from 'prop-types';

const MMVectorIcon = props => {
  const {group, size, iconName, color} = props;
  switch (group) {
    case 'FontAwesome':
      return <Icon name={iconName || 'rocket'} size={size} color={color} />;

    default:
      return null;
  }
};

MMVectorIcon.propTypes = {
  group: PropTypes.oneOf(['FontAwesome']),
  size: PropTypes.number,
  iconName: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
};

MMVectorIcon.defaultProps = {
  group: 'FontAwesome',
  size: 14,
  color: 'black',
};

export default MMVectorIcon;
