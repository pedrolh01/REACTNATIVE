import React from 'react'
 import LoginScreen from '../components/Login/Login' 
import HomeScreen from '../components/Home/Home' 
import DetailScreen from '../components/Detail/Detail' 

import {createStackNavigator} from  '@react-navigation/stack';
import DrawerMenu from './drawerMenu'
 
const Stack = createStackNavigator();
const StackMenu = ({params}) => (
    <Stack.Navigator initialRouteName='Login'>
      <Stack.Screen 
      name="Login" 
      component ={LoginScreen}
      /> 
      <Stack.Screen
        name="Home"
        component={DrawerMenu}  
      /> 
      <Stack.Screen
        name="Detail"
        component={DetailScreen} 
      />  
    </Stack.Navigator>
) 
export default StackMenu; 