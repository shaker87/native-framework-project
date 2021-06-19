import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {
  DrawerContentScrollView,
  DrawerItem,
  Drawer,
} from '@react-navigation/drawer';
import {default as s} from '../styles/GlobalStyles';
import AsyncStorage from '@react-native-community/async-storage';

export default function DrawerContent(props) {
  return (
    <DrawerContentScrollView {...props} style={{marginLeft: 15}}>
      <View style={[styles.header]}>
        <View style={[s.rowDirection]}>
          <View style={[s.flexBasis35]}>
            <Image
              style={[styles.avatar]}
              source={require('../assets/images/avatar.png')}
            />
          </View>
          <View style={[s.flexBasis60, {paddingTop: 13}]}>
            {/* <Text style={[styles.name]}>{profileData.username}</Text> */}
            {/* <Text style={[styles.designation]}> {profileData.user_type} </Text> */}
          </View>
        </View>
        <View
          style={[
            {
              borderBottomColor: '#0000002E',
              borderBottomWidth: 1,
              marginTop: 25,
            },
          ]}></View>
      </View>
      {/* Draweer Iteam Starts  */}

      <DrawerItem
        icon={(color, size) => (
          <Image
            style={[styles.services]}
            source={require('../assets/images/service.png')}
          />
        )}
        label={(focused, color) => (
          <Text style={{color: 'black', fontSize: 16}}> Posts</Text>
        )}
        onPress={() => {
          props.navigation.navigate('posts');
        }}
      />

      <DrawerItem
        icon={(color, size) => (
          <Image
            style={[styles.services]}
            source={require('../assets/images/service.png')}
          />
        )}
        label={(focused, color) => (
          <Text style={{color: 'black', fontSize: 16}}> Validation</Text>
        )}
        onPress={() => {
          props.navigation.navigate('validation');
        }}
      />
      <DrawerItem
        icon={(color, size) => (
          <Image
            style={[styles.services]}
            source={require('../assets/images/service.png')}
          />
        )}
        label={(focused, color) => (
          <Text style={{color: 'black', fontSize: 16}}> Scan Page</Text>
        )}
        onPress={() => {
          props.navigation.navigate('scanPage');
        }}
      />
    </DrawerContentScrollView>
  );
}
const styles = StyleSheet.create({
  header: {
    marginTop: '15%',
  },

  services: {
    resizeMode: 'cover',
    height: 22,
    width: 22,
  },

  avatar: {
    resizeMode: 'cover',
    height: 70,
    width: 70,
  },
  leftStyle: {
    paddingTop: 20,
  },

  name: {
    fontWeight: 'bold',
    fontSize: 18,
  },
  designation: {
    color: 'gray',
    fontSize: 16,
  },
});
