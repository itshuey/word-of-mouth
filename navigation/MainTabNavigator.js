import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import LinksScreen from '../screens/LinksScreen';
import BlackBookScreen from '../screens/BlackBookScreen';

const config = Platform.select({
  web: { headerMode: 'screen' },
  default: {},
});

const FeedStack = createStackNavigator(
  {
    Feed: HomeScreen,
  },
  config
);

FeedStack.navigationOptions = {
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      size={{width: 30, height: 30}}
      invertedImage={require('../assets/icons/globeicon.png')}
      regularImage={require('../assets/icons/seethroughglobeicon.png')}
    />
  ),
};

FeedStack.path = '';

const ProfileStack = createStackNavigator(
  {
    Profile: LinksScreen,
  },
  config
);

ProfileStack.navigationOptions = {
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      size={{width: 50, height: 50}}
      regularImage={require('../assets/icons/profileicon.png')}
      invertedImage={require('../assets/icons/profileiconselected.png')}
    />
  ),
};

ProfileStack.path = '';

const BookStack = createStackNavigator(
  {
    BlackBook: BlackBookScreen,
  },
  config
);

BookStack.navigationOptions = {
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      size={{width: 20, height: 30}}
      regularImage={require('../assets/icons/seethroughblackbookicon.png')}
      invertedImage={require('../assets/icons/blackbookiconwhite.png')}
    />
  ),
  tabBarOptions: {
    showLabel: false,
    style: {
      backgroundColor: 'black',
      height: 60,
    },
  }
};

BookStack.path = '';

const tabNavigator = createBottomTabNavigator({
  FeedStack,
  ProfileStack,
  BookStack,
},
{
  tabBarOptions: { showLabel: false, style: { height: 60 } }
});

tabNavigator.path = '';

export default tabNavigator;
