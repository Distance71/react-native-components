import React from 'react';
import { Text } from 'react-native';
import PropTypes from 'prop-types';
import { withStyles } from 'styles/themeContext';

const getFontWeight = (weight = '400') => {
  switch (weight) {
    case '300':
      return 'OpenSans-Light';
    case '400':
      return 'OpenSans-Regular';
    case '500':
      return 'OpenSans-SemiBold';
    case '600':
      return 'OpenSans-Bold';
    case '700':
      return 'OpenSans-ExtraBold';
    default:
      return 'OpenSans-Regular';
  }
};

function StyledText({ style, children, theme, ...props }) {
  const font = getFontWeight(style.fontWeight);

  return (
    <Text
      {...props}
      style={[
        { color: theme.themeColors.text.primary },
        style,
        { fontFamily: font },
      ]}
      allowFontScaling={false}
    >
      {children}
    </Text>
  );
}

StyledText.propTypes = {
  style: Text.propTypes.style,
  children: PropTypes.node.isRequired,
};

StyledText.defaultProps = {
  style: {},
};

export default withStyles(StyledText);