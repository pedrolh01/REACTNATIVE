/*import React from 'react'
import {Platform,Dimension} from 'react-native'
import {createDrawerNavigator,createAppContainer} from 'react-navigation'
import Screen2 from '../screen/Screen2'

const WIDTH = Dimensions.get('window').WIDTH 
const DrawerNavigator = createDrawerNavigator({
    Home:{
        screen:HomeScreen
    }
})

export default createAppContainer(DrawerNavigator)*/
import React, { Component } from 'react';
import { View, Text } from 'react-native';

  
import {NavigationContainer} from '@react-navigation/native';
import LoginScreen from '../src/components/Login/Login' 
import HomeScreen from '../src/components/Home/Home' 
import PersonScreen from '../src/components/Person/Person' 

import MiEncabezado from '../src/Share/customHeader';

import {createStackNavigator} from  '@react-navigation/stack';

export default class App extends Component { 
  
  render() {
    const Stack = createStackNavigator();
    return (  
      <NavigationContainer>
        <Stack.Navigator initialRouteName='Login'>
          <Stack.Screen 
          name="Login" 
          component ={LoginScreen}
          /> 
           <Stack.Screen
            name="Home"
            component={HomeScreen} 
          /> 
          <Stack.Screen
            name="Person"
            component={PersonScreen} 
          /> 
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}
