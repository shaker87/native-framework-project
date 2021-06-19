//core import
import React from 'react';
import {
  View,
  Text,
  TouchableWithoutFeedback,
  TextInput,
  StyleSheet,
} from 'react-native';

//third party import
import {useDispatch, useSelector} from 'react-redux';
import AntDesign from 'react-native-vector-icons/AntDesign';

//local import
import * as Types from '../types/type';
import {inputSet} from '../action/ScannerAction';

const ScanPage = props => {
  const dispatch = useDispatch();

  const {scannedItem} = useSelector(state => state.scanner);

  //get input from user by this handler

  const handleInputChange = (inputName, inputValue) => {
    dispatch(inputSet(inputName, inputValue));
  };

  // navigate to scanner and clear status
  const scannerNavigate = () => {
    props.navigation.navigate('scanner');
    dispatch({type: Types.CLEAR_SCANNED_ITEM_STATUS});
  };
  return (
    <View style={[styles.bgBox, styles.mt20]}>
      <View style={[styles.rowDirection]}>
        <View style={[styles.flexBasis90]}>
          <TextInput
            style={[styles.pl20]}
            onChangeText={e => handleInputChange('scannedItem', e)}
            placeholder="scan item"
            value={scannedItem}
          />
        </View>
        <View style={[styles.flexBasis10, {justifyContent: 'center'}]}>
          <TouchableWithoutFeedback onPress={() => scannerNavigate()}>
            <AntDesign name="scan1" size={20} color={'#0A84FF'} />
          </TouchableWithoutFeedback>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  rowDirection: {
    flexDirection: 'row',
  },
  flexBasis90: {
    flexBasis: '90%',
  },

  flexBasis10: {
    flexBasis: '10%',
  },

  backgroundColor: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F7F9FC',
    height: '100%',
  },

  bgBox: {
    backgroundColor: '#fff',
    borderRadius: 6,
    textAlign: 'center',
    margin: 10,
    padding: 15,
    shadowColor: '#00000060',
  },
  mt10: {
    marginTop: 20,
  },
  pl20: {
    paddingLeft: 20,
  },
});

export default ScanPage;
