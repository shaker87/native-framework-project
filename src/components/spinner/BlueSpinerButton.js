import React from 'react';
import {Container, Content, Spinner, Text, View} from 'native-base';
import {default as s} from '../../styles/GlobalStyles';
import { responsiveScreenHeight } from 'react-native-responsive-dimensions';
const BlueSpinerButton = (props) => {

  return (
    <View
      style={[
        s.rowDirection,
        s.button,
        {
          backgroundColor: props.bgColor  ? props.bgColor : '#0A84FF',
          height: responsiveScreenHeight(6),
          borderRadius: 6,
          alignItems: 'center',
          justifyContent: 'center',
        },
      ]}>
      <View style={[s.flexBasis40]}>
        <Text
          style={[
            s.textLg,
            s.textWhite,
            {textTransform: 'capitalize', textAlign: 'right'},
          ]}>
          {props.title}
        </Text>
      </View>
      <View style={[s.ml5]}>
        <Spinner color="white" />
      </View>
    </View>
  );
};

export default BlueSpinerButton;
