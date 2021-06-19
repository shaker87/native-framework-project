import React from 'react';
import {View, Text} from 'react-native';

const TextError = props => {
  return (
    <View style={{position: 'absolute', top: 58, left: 0}}>
      <Text style={{color: 'red'}}>{props.children}</Text>
    </View>
  );
};

export default TextError;
