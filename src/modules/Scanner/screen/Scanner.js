//core import
import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

//third party import
import QRCodeScanner from 'react-native-qrcode-scanner';
import {useDispatch, useSelector} from 'react-redux';

//local import
import {scanItem} from '../action/ScannerAction';

const Scanner = props => {
  const dispatch = useDispatch();

  const {scannedItemStatus} = useSelector(state => state.scanner);

  //qr code scanner on read function
  const onSuccess = response => {
    dispatch(scanItem(response.data));
    if (response.data) {
      setTimeout(() => {
        props.navigation.navigate('scanPage');
      });
    }
  };
  return (
    <QRCodeScanner
      reactivate
      reactivateTimeout={2000}
      showMarker
      onRead={e => onSuccess(e)}
      topContent={
        <View style={styles.topContainer}>
          {scannedItemStatus === '' && (
            <View style={styles.toastInit}>
              <View style={{alignItems: 'center'}}>
                <Text style={{color: 'white'}}>Please show QR code</Text>
              </View>
            </View>
          )}
          {scannedItemStatus === '1' && (
            <View style={styles.toast}>
              <View style={{alignItems: 'center'}}>
                <Text>Successfully scan item</Text>
              </View>
            </View>
          )}
          {scannedItemStatus === '0' && (
            <View style={[styles.toastDanger]}>
              <View style={{alignItems: 'center'}}>
                <Text>Item not found</Text>
              </View>
            </View>
          )}
        </View>
      }
      bottomContent={
        <View
          style={{
            // paddingTop: '10%',
            width: '100%',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <TouchableOpacity
            onPress={() => {
              props.navigation.navigate('scanPage');
            }}
            style={styles.buttonTouchable}>
            <Text style={styles.buttonText}>Back</Text>
          </TouchableOpacity>
        </View>
      }
    />
  );
};

const styles = StyleSheet.create({
  toast: {
    width: '100%',
    left: '-50%',
    // top: '20%',
    backgroundColor: '#42ba96',
    position: 'absolute',
    elevation: 2,
    borderRadius: 10,
    //paddingHorizontal: 15,
    paddingVertical: 15,
  },
  toastInit: {
    width: '100%',
    left: '-50%',
    // top: '20%',
    backgroundColor: 'gray',

    position: 'absolute',
    elevation: 2,
    borderRadius: 10,
    //paddingHorizontal: 15,
    paddingVertical: 15,
  },
  toastDanger: {
    width: '100%',
    // left: '10%',
    // top: '20%',
    backgroundColor: 'red',
    position: 'absolute',
    elevation: 2,
    borderRadius: 10,
    paddingHorizontal: 15,
    paddingVertical: 15,
  },
  topContainer: {
    flex: 1,
    margin: 32,
  },
  centerText: {
    fontSize: 18,
    color: '#777',
  },
  textBold: {
    fontWeight: '500',
    color: '#000',
  },
  buttonText: {
    fontSize: 21,
    color: 'rgb(0,122,255)',
  },
  buttonTouchable: {
    padding: 16,
    justifyContent: 'center',
  },
});

export default Scanner;
