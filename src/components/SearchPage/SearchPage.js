import React, {useRef, useEffect, useState} from 'react';
import {
  View,
  ScrollView,
  StyleSheet,
  TouchableWithoutFeedback,
} from 'react-native';

// third party import
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as wh,
} from 'react-native-responsive-screen';
import {Item, Input} from 'native-base';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {useNavigation} from '@react-navigation/native';

// local imports

// redux

/*
  Props type
    backNavigateHandler: fn,
    srhInputHandler: fn,
    data: arr,
    RenderItem: React Component
    style: obj
*/

const SearchPage = props => {
  const [input, setInput] = useState('');
  const srhInputRef = useRef(null);

  const {backNavigateHandler, srhInputHandler, data, RenderItem, style} = props;

  const inputHandler = value => {
    setInput(value);
    srhInputHandler(value);
  };

  useEffect(() => {
    setTimeout(() => {
      if (srhInputRef.current) {
        srhInputRef.current._root.focus();
      }
    }, 40);
  });

  return (
    <View style={{...styles.screen, ...style}}>
      <View style={{height: wh('5%')}}>
        <Item>
          <TouchableWithoutFeedback onPress={backNavigateHandler}>
            <MaterialIcons name="keyboard-backspace" size={30} color="#333" />
          </TouchableWithoutFeedback>
          <Input
            value={input}
            ref={input => (srhInputRef.current = input)}
            placeholder="Search here"
            onChangeText={inputHandler}
          />
        </Item>
      </View>
      <ScrollView style={styles.srhResultContainer}>
        {data.map((item, i) => (
          <RenderItem key={i} strProgramTypeName={item.strProgramTypeName} />
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#e5e5e5',
    paddingTop: 20,
    paddingHorizontal: 20,
  },
  srhResultContainer: {
    flex: 1,
    // backgroundColor: 'red',
    marginTop: wh('5%'),
  },
});

export default SearchPage;
