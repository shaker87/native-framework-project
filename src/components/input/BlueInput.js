import React, {useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  TouchableOpacity,
  useColorScheme,
  View,
} from 'react-native';
import {
  Container,
  Header,
  Content,
  Text,
  Item,
  Icon,
  Input,
  Button,
  ListItem,
  CheckBox,
  Body,
} from 'native-base';

const BlueInput = props => {
  let label = props.label == undefined || props.label ? true : false;
  let borderstyle = props.borderstyle == undefined ? false : true;
  let icon = props.icon == undefined ? false : true;
  return (
    <View>
      {label ? (
        <Text style={{paddingBottom: 5, color: '#8E8E93'}}>{props.label}</Text>
      ) : null}
      <View style={!borderstyle ? style.inputBorder : props.borderstyle}>
        <Item>
          <Input {...props} style={{borderBottomWidth: 0}} />
          {icon ? (
            <Icon
              name={props.icon}
              style={{color: '#4CD964'}}
              onPress={props.onEyeChange}
            />
          ) : null}
        </Item>
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  inputBorder: {
    borderWidth: 1,
    borderColor: '#C7C7CC',
    borderRadius: 6,
    marginBottom: 10,
  },
});
export default BlueInput;
