import React, {useState} from 'react';
import {View} from 'react-native';
import Modal from 'react-native-modal';

function FillViewModal({children, isModalVisible}) {
  return (
    <Modal
      isVisible={isModalVisible}
      backdropOpacity={1}
      style={{
        backgroundColor: 'white',
        margin: 0, // This is the important style you need to set
        alignItems: undefined,
        justifyContent: undefined,
      }}
      customBackdrop={
        <View
          style={{
            flex: 1,
            backgroundColor: '#fff',
          }}
        />
      }>
      <View style={{flex: 1}}>{children}</View>
    </Modal>
  );
}

export default FillViewModal;
