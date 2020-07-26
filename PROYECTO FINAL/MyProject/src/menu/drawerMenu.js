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
     <Drawer.Navigator initialRouteName="Home" 
      screenOptions={{
        headerShown: false
      }}
      >
         <Drawer.Screen name="Inicio" 
         options= {{
            title: 'Inicio',
            headerLeft: null
          }}
          component={HomeScreen}>

         </Drawer.Screen>
         <Drawer.Screen name="Socios" 
         options= {{
            title: 'Socios',
            headerLeft: null
          }}
          component={stackDetailNavigate}>

         </Drawer.Screen>
         <Drawer.Screen name="Votos"  
         options= {{
            title: 'Votos',
            headerLeft: null
          }}
          component={VoteScreen} >

         </Drawer.Screen> 
         
     </Drawer.Navigator>
)

export default DrawerMenu;
