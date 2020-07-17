import React from 'react'
import {createDrawerNavigator} from '@react-navigation/drawer';
import LoginScreen from '../components/Login/Login' 
import HomeScreen from '../components/Home/Home' 
import PersonScreen from '../components/Person/Person' 
import VoteScreen from '../components/Vote/Vote' 
import DetailScreen from '../components/Detail/Detail'  

import stackDetailNavigate from './stackDetailNavigate'
const Drawer = createDrawerNavigator();
const juan='juanito'
const DrawerMenu = ({params}) => ( 
     <Drawer.Navigator initialRouteName="Home">
         <Drawer.Screen name="Home" component={HomeScreen}>

         </Drawer.Screen>
         <Drawer.Screen name="PersonScreen" component={PersonScreen}>

         </Drawer.Screen>
         <Drawer.Screen name="VoteScreen" component={VoteScreen} >

         </Drawer.Screen> 
         
     </Drawer.Navigator>
)

export default DrawerMenu;
