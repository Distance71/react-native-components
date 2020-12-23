import { StyleSheet } from 'react-native';
import normalize from 'react-native-normalize'

export default createStyles = theme =>
  StyleSheet.create({
    mainContainer: {
      width: '90%', 
      backgroundColor: theme.colors.modalBackground, 
      height: normalize(200), 
      borderRadius: normalize(10),
      alignItems: 'center', 
      alignSelf: 'center',
      justifyContent: 'space-evenly'
    },
    mainTitle:{
      fontSize: theme.typography.h3,
      color: theme.colors.backgroundSecondaryText,
      textAlign: 'center',
      padding: theme.spacing.smallPadding,
      paddingVertical: theme.spacing.mediumPadding,
    },
    linkModal:{
      color: theme.colors.linkTextColor,
      marginBottom: theme.spacing.mediumMargin,
      fontSize: theme.typography.h3,
      shadowColor: theme.colors.linkShadowColor,
      shadowOpacity: 0.8,
      borderBottomColor: theme.colors.linkBorderColor,
      borderBottomWidth: 1
    },
    acceptButton: {
      height: normalize(50),
    },
    cancelText:{
      textDecorationLine: 'underline'
    },
  });

export default styles;
