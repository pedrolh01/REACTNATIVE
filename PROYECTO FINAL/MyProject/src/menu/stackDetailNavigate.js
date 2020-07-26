import React from 'react'
import DetailScreen from '../components/Detail/Detail'  
import PersonScreen from '../components/Person/Person' 
import {createStackNavigator} from  '@react-navigation/stack';
import DrawerMenu from './drawerMenu'

const Stack = createStackNavigator();
const stackDetailNavigate = ({params}) => (
    <Stack.Navigator initialRouteName='Person' 
      screenOptions={{
        headerShown: false
      }}>
       <Stack.Screen 
        name="Person"
        options= {{
          title: 'Socios',
          headerLeft: null
        }}
      component ={PersonScreen}
      />  
      <Stack.Screen 
      name="Detalle " 
      options= {{
        title: 'Detalle',
        headerLeft: null
      }}
      component ={DetailScreen}
      />  
    </Stack.Navigator>
    
) 
export default stackDetailNavigate; 