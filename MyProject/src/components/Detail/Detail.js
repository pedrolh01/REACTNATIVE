import React, { Component,BackHandler } from 'react';
import { View, Text,Button } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
 
export default class Detail extends Component { 
    render() { 
      return (
        //BackHandler.exitApp();  
        <View>
          {/*<NavigationContainer>
        <DrawerMenu/>
        </NavigationContainer> */}
          <Text> Detail </Text>
           
        </View>
      );
    }
  }