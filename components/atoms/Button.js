// Lazy Functional component with styles integrated with theme context

import React from 'react';
import PropTypes from 'prop-types';
import { TouchableOpacity, StyleSheet, ViewPropTypes } from 'react-native';
import { StyledText } from 'components/core';
import normalize from 'react-native-normalize';
import { withStyles } from 'styles/themeContext';

const createStyles = theme =>
  StyleSheet.create({
    button: {
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: theme.themeColors.background.action,
      marginTop: theme.sizes.margins.smallMargin,
      paddingHorizontal: theme.sizes.paddings.smallPadding,
      paddingVertical: theme.sizes.paddings.microPadding,
      borderRadius: normalize(30),
      flexDirection: 'row'
    },
    text: {
      color: theme.themeColors.text.secondary,
    },
  });

function Button({
  style,
  textStyle,
  title,
  rightChildren,
  leftChildren,
  theme,
  ...rest
}) {
  const styles = createStyles(theme);

  return (
    <TouchableOpacity {...rest} style={[styles.button, style]}>
      {leftChildren}
      <StyledText style={[TextStyles.fieldTitle, styles.text, textStyle]}>
        {title}
      </StyledText>
      {rightChildren}
    </TouchableOpacity>
  );
}

Button.propTypes = {
  style: ViewPropTypes.style,
  textStyle: ViewPropTypes.style,
  title: PropTypes.string,
};

Button.defaultProps = {
  style: {},
  textStyle: {},
  title: '',
};

export default withStyles(Button);