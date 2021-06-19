import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {Text} from 'native-base';
import {default as s} from '../../Master/styles/GlobalStyles';

const Badge = props => {
  let title = props.title == undefined ? 'Badge' : props.title;
  return (
    <View>
      <Text
        style={[
          s.textWhite,
          s.ml5,
          s.textExtraSm,
          {
            backgroundColor: '#D95149',
            borderRadius: 50,
            justifyContent: 'center',
            alignItems: 'center',
            paddingLeft: 8,
            paddingRight: 8,
            paddingTop: 1,
            paddingBottom: 2,
          },
        ]}>
        {title}
      </Text>
    </View>
  );
};

const style = StyleSheet.create({});
export default Badge;
