import React from 'react';
import {Alert, StyleSheet, Text, Pressable, View, Button} from 'react-native';

import Modal from 'react-native-modal';
const BlueModal = props => {
  return (
    <Modal
      isVisible={props.isVisible}
      onBackdropPress={() => props.onBackdropPress()}
      animationType="slideOutDown"
      animationInTiming={1000}
      style={styles.view}
      boxBackgroundColor="lightyellow">
      {props.children}
    </Modal>
  );
};

const styles = StyleSheet.create({
  view: {
    flex: 1,
    justifyContent: 'flex-end',
    margin: 0,
  },
  content: {
    backgroundColor: 'white',
    borderRadius: 6,
    borderColor: 'rgba(0, 0, 0, 0.1)',
    margin: 0,
  },
  contentTitle: {
    fontSize: 20,
    marginBottom: 12,
  },
});

export default BlueModal;
