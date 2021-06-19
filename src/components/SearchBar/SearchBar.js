import React from 'react';
import {Text, View, StyleSheet, TouchableWithoutFeedback} from 'react-native';

// third party import
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as wh,
} from 'react-native-responsive-screen';
import AntDesign from 'react-native-vector-icons/AntDesign';

// local import

export const SearchBar = props => {
  const {placeholder, style, iconSize} = props;
  return (
    <View style={{...styles.srhContainer, ...style}}>
      <View style={{flexDirection: 'row'}}>
        <View style={styles.iconContainer}>
          <AntDesign name="search1" size={iconSize || 18} />
        </View>
        <Text style={styles.placeholder}>{placeholder}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  srhContainer: {
    backgroundColor: '#dfdfdf',
    justifyContent: 'center',
    borderRadius: 10,
    height: wh('5%'),
    width: wp('60%'),
    paddingHorizontal: wp('5%'),
  },
  iconContainer: {
    marginRight: wp('3%'),
  },
  placeholder: {
    color: '#333',
  },
});

export default SearchBar;
