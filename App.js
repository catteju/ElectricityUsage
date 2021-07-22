import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import HomeScreen from './screens/HomeScreen';
import LoginScreen from './screens/LogInScreen';
import UsageScreen from './screens/UsageScreen';
import SaveScreen from './screens/SaveScreen';
import ShowScreen from './screens/ShowScreen';

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}

const switchNavigator = createSwitchNavigator({

  Login: { screen: LoginScreen },
  Home: { screen: HomeScreen },
  Usage: { screen: UsageScreen },
  Save: { screen: SaveScreen },
  Show: { screen: ShowScreen },
   
  
  
});

const AppContainer = createAppContainer(switchNavigator);
