import React from 'react';
import {
  Container,
  Header,
  Left,
  Body,
  Right,
  Button,
  Icon,
  Title,
  Text,
} from 'native-base';
import {TouchableOpacity} from 'react-native';

const BlueHeader = props => {
  return (
    <Header style={{backgroundColor: 'green'}} {...props}>
      <TouchableOpacity>
        <Left>
          <Button
            transparent
            onPress={() => props.onPress.navigate(props.leftnavigation)}>
            <Icon name="arrow-back" />
          </Button>
        </Left>
      </TouchableOpacity>

      <Body>
        <Title>Header</Title>
      </Body>
      <Right>
        <Button transparent>
          <Text>Cancel</Text>
        </Button>
      </Right>
    </Header>
  );
};
export default BlueHeader;
