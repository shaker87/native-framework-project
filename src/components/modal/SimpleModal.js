import React from 'react';
import {
  View,
  Text,
  Modal,
  TouchableOpacity,
  ScrollView,
  TouchableWithoutFeedback,
  StyleSheet,
} from 'react-native';

const SimpleModal = props => {
  const {isVisible, onBackdropPress} = props;
  if (isVisible) {
    return (
      <Modal
        animationType="fade"
        transparent={true}
        visible={isVisible}
        onRequestClose={onBackdropPress}>
        <TouchableOpacity activeOpacity={1} onPressOut={onBackdropPress}>
          <View style={styles.container}>
            <ScrollView
              directionalLockEnabled={true}
              contentContainerStyle={styles.scrollModal}>
              <TouchableWithoutFeedback>
                <View style={styles.modalContainer}>{props.children}</View>
              </TouchableWithoutFeedback>
            </ScrollView>
          </View>
        </TouchableOpacity>
      </Modal>
    );
  }
  if (!isVisible) return null;
};

const styles = StyleSheet.create({
  container: {
    height: '100%',
    backgroundColor: 'rgba(0,0,0,0.2)',
  },
  scrollModal: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContainer: {
    width: '90%',
    backgroundColor: '#fff',
    justifyContent: 'center',
    borderRadius: 15,
  },
});

export default SimpleModal;
