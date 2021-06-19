import React from 'react';
import {ActivityIndicator, Text, View} from 'react-native';
import {default as s} from '../../Master/styles/GlobalStyles';
const LoadingSpinner = props => {
  const loadingText =
    typeof props.text === 'undefined' || props.text === null
      ? 'Loading...'
      : props.text;
  return (
    <View style={[s.mt10]}>
      <Text style={[s.textCenter]} className="text-center">
        {loadingText}
      </Text>
      <View className="d-flex justify-content-center">
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    </View>
  );
};

export default LoadingSpinner;
