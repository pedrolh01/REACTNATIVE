import React from 'react'
import DetailScreen from '../components/Detail/Detail'  
import {createStackNavigator} from  '@react-navigation/stack';
import DrawerMenu from './drawerMenu'

const Stack = createStackNavigator();
const stackDetailNavigate = ({params}) => (
    <Stack.Navigator initialRouteName='Detail'>
      <Stack.Screen 
      name="Detail" 
      component ={DetailScreen}
      />  
    </Stack.Navigator>
) 
export default stackDetailNavigate; 