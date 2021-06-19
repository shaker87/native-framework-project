import React, {useState, useEffect} from 'react';
// Import required components
import {
  SafeAreaView,
  StyleSheet,
  Platform,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
import {Button} from 'native-base';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {
  createStackNavigator,
  TransitionPresets,
  CardStyleInterpolators,
} from '@react-navigation/stack';
import HomeScreen from './src/HomeScreen';
import {DrawerNavigation} from './src/navigations/DrawerNavigation';
import LoginScreen from './src/modules/auth/container/LoginScreen';
// import for network connection check
import CheckConnection from './src/components/NetInfo/NetConnectivity';
import ErrorCard from './src/components/NetInfo/ErrorCard';

const App = () => {
  let network = CheckConnection();
  if (network === false) {
    return <ErrorCard />;
  }
  const Drawer = createDrawerNavigator();
  const Tab = createBottomTabNavigator();
  const RootStack = createStackNavigator();
  const Stack = createStackNavigator();

  function DrawerStackScreen({navigation}) {
    return (
      <Drawer.Navigator>
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="Setting" component={HomeScreen} />
        <Drawer.Screen name="profile" component={HomeScreen} />
      </Drawer.Navigator>
    );
  }

  // tab stack screen is exis to project
  function TabStackScreen() {
    return (
      <Tab.Navigator>
        <Tab.Screen name="tab1" component={DrawerStackScreen} />
        <Tab.Screen name="tab2" component={DrawerStackScreen} />
        <Tab.Screen name="tab3" component={DrawerStackScreen} />
      </Tab.Navigator>
    );
  }

  return (
    <>
      {/* <OfflineNotice /> */}
      <NavigationContainer>
        <RootStack.Navigator>
          {/* <RootStack.Screen
          options={{
            headerShown: false,
          }}
          name="login"
          component={LoginScreen}
        /> */}
          <RootStack.Screen
            options={{
              headerShown: false,
            }}
            name="home"
            component={DrawerNavigation}
          />
        </RootStack.Navigator>
      </NavigationContainer>
    </>
  );
};

export default App;
