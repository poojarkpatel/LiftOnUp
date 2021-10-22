/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import React from 'react';
 // import type {Node} from 'react';
 import { createAppContainer } from 'react-navigation';
 import { createStackNavigator } from 'react-navigation-stack';
 import Login from './components/Login';
 import Register from './components/Register';
 import Home from './components/Home';
 import Reset from './components/Reset';
 import {
   SafeAreaView,
   ScrollView,
   StatusBar,
   StyleSheet,
   Text,
   useColorScheme,
   View,
 } from 'react-native';
 
 import {
   Colors,
   DebugInstructions,
   Header,
   LearnMoreLinks,
   ReloadInstructions,
 } from 'react-native/Libraries/NewAppScreen';
 
 const RootStack = createStackNavigator(
   {
     Login: Login,
     Register: Register,
     Home: Home,
     Reset: Reset,
   },
   {
     initialRouteName: 'Home',
     defaultNavigationOptions: {
       headerStyle: {
         backgroundColor: '#19AC52',
       },
       headerTintColor: '#fff',
       headerTitleStyle: {
         fontWeight: 'bold',
       },
     },
   },
 );
 const RootContainer = createAppContainer(RootStack);
 export default function App() {
   return (
     <RootContainer />
   )
 }