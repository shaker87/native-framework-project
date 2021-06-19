// core import
import React from 'react';

// third party import
import {createDrawerNavigator} from '@react-navigation/drawer';
import DrawerContent from '../navigations/DrawerContent';
import {Icon} from 'react-native-vector-icons/FontAwesome5';

// local Import
import PostsScreen from '../modules/post/screen/PostsScreen';
import PostScreen from '../modules/post/screen/PostScreen';
import ValidationScreen from '../modules/demoValidation/screen/ValidationScreen';
import TestScreen from '../TestScreen';
import HomeScreen from '../HomeScreen';
import SearchPage from '../components/SearchPage/SearchPage';
import Post from '../modules/post/screen/PostsScreen';
import AddPost from '../modules/post/screen/AddPost';
import UpdatePost from '../modules/post/screen/UpdatePost';
import Scanner from '../modules/Scanner/screen/Scanner';
import ScanPage from '../modules/Scanner/screen/ScanPage';

const Drawer = createDrawerNavigator();

export function DrawerNavigation(props) {
  return (
    <Drawer.Navigator drawerContent={props => <DrawerContent {...props} />}>
      <Drawer.Screen
        options={{
          headerShown: false,
        }}
        name="posts"
        component={PostsScreen}
      />
      <Drawer.Screen
        options={{
          headerShown: false,
        }}
        name="selectedPost"
        component={PostScreen}
      />
      <Drawer.Screen
        options={{
          headerShown: false,
        }}
        name="validation"
        component={ValidationScreen}
      />
      <Drawer.Screen
        options={{
          headerShown: false,
        }}
        name="scanner"
        component={Scanner}
      />
      <Drawer.Screen
        options={{
          headerShown: false,
        }}
        name="scanPage"
        component={ScanPage}
      />
      <Drawer.Screen
        options={{
          headerShown: false,
        }}
        name="test"
        component={TestScreen}
      />
      <Drawer.Screen
        options={{
          headerShown: false,
        }}
        name="searchPage"
        component={SearchPage}
      />
      <Drawer.Screen
        options={{
          headerShown: false,
        }}
        name="post"
        component={Post}
      />
      <Drawer.Screen
        options={{
          headerShown: false,
        }}
        name="addPost"
        component={AddPost}
      />
      <Drawer.Screen
        options={{
          headerShown: false,
        }}
        name="updatePost"
        component={UpdatePost}
      />
    </Drawer.Navigator>
  );
}
