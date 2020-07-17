import React, { Component,BackHandler } from 'react';
import { View, Text,Button } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
 
export default class Home extends Component { 
    render() { 
      return (
        //BackHandler.exitApp();  
        <View>
          {/*<NavigationContainer>
        <DrawerMenu/>
        </NavigationContainer> */}
          <Text> Este es mi contenido </Text>
           
        </View>
      );
    }
  }