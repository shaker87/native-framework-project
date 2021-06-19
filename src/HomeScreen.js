import React from 'react';
import {
  StyleSheet,
  View,
  FlatList,
  TouchableWithoutFeedback,
  Dimensions,
} from 'react-native';
import {Container} from 'native-base';

import {default as s} from './styles/GlobalStyles';
import {responsiveScreenHeight} from 'react-native-responsive-dimensions';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import BlueHeader from './components/BlueHeader/BlueHeader';

const HomeScreen = props => {
  return (
    <Container androidStatusBarColor="red">
      <BlueHeader onPress={props.navigation} leftnavigation="test" />
    </Container>
  );
};
export default HomeScreen;
