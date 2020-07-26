import React from 'react';
import { View, Text,Button } from 'react-native'; 
import { createDrawerNavigator } from '@react-navigation/drawer' 
import LoginScreen from './components/Login/Login' 
import HomeScreen from './components/Home/Home' 
import PersonScreen from './components/Person/Person' 
import VoteScreen from './components/Vote/Vote' 
const Drawer = createDrawerNavigator();

const DrawerMenu = ({params}) => (
    <Drawer.Navigator initialRouteName ='Home'>
        <Drawer.Screen name='Home' component={HomeScreen}/> 
    </Drawer.Navigator>
) 
export default DrawerMenu