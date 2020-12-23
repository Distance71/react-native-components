// Lazy Class Modal component

import React, {Component} from 'react';
import {
  View,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Linking
} from 'react-native';
import Modal from 'react-native-modal';
import themedStyles from './styles';
import config from 'src/utils/config/config';
import strings from 'src/translations';
import { StyledText } from 'src/components/core';
import { Button } from 'src/components/atoms';
import { withStyles } from 'styles/themeContext';

const termsUrl = config.termsUrl;

class TermsAndConditionsModal extends Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    const {
      show, 
      onBackdropPress, 
      onAccept, 
      onCancel,
      theme,
    } = this.props;

    const styles = themedStyles(theme);
    const openTerms = () => Linking.openURL(termsUrl);
    
    return (
      <Modal
        isVisible={show}
        onBackdropPress={onBackdropPress}
      >
        <View style={styles.mainContainer}>
          <TouchableWithoutFeedback onPress={openTerms}>
            <StyledText style={styles.mainTitle}>
              {`${strings('accept')} `} 
              <StyledText style={styles.linkModal}>
                {strings('onBoardingScreenTermsAndConditions')}
              </StyledText>
            </StyledText> 
          </TouchableWithoutFeedback>
          <Button
            style={styles.acceptButton}
            onPress={onAccept}
            title={strings('accept')}
          /> 
          <TouchableOpacity onPress={onCancel} > 
            <StyledText style={[styles.cancelText, styles.linkModal]}>
              {strings('cancel')}
            </StyledText>
          </TouchableOpacity>
        </View>
      </Modal>
    );
  }
}

export default withStyles(TermsAndConditionsModal);
