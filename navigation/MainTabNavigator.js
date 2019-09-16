import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import LinksScreen from '../screens/LinksScreen';
import SettingsScreen from '../screens/SettingsScreen';

const config = Platform.select({
  web: { headerMode: 'screen' },
  default: {},
});

const LinksStack = createStackNavigator(
  {
    Links: LinksScreen,
  },
  config
);

LinksStack.navigationOptions = {
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      size={{width: 30, height: 30}}
      regularImage={require('../assets/icons/seethroughglobeicon.png')}
      invertedImage={require('../assets/icons/globeicon.png')}
    />
  ),
};

LinksStack.path = '';

const HomeStack = createStackNavigator(
  {
    Home: HomeScreen,
  },
  config
);

HomeStack.navigationOptions = {
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      size={{width: 50, height: 50}}
      regularImage={require('../assets/icons/profileicon.png')}
      invertedImage={require('../assets/icons/profileiconselected.png')}
    />
  ),
};

HomeStack.path = '';

const SettingsStack = createStackNavigator(
  {
    Settings: SettingsScreen,
  },
  config
);

SettingsStack.navigationOptions = {
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      size={{width: 20, height: 30}}
      regularImage={require('../assets/icons/seethroughblackbookicon.png')}
      invertedImage={require('../assets/icons/blackbookicon.png')}
    />
  ),
};

SettingsStack.path = '';

const tabNavigator = createBottomTabNavigator({
  LinksStack,
  HomeStack,
  SettingsStack,
},
{
  tabBarOptions: { showLabel: false }
});

tabNavigator.path = '';

export default tabNavigator;
