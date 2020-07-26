import React, { Component,BackHandler } from 'react';
import { View, Text,Button,StyleSheet } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
 
export default class Detail extends Component { 
  
    render() { 
      return (
        //BackHandler.exitApp();  
        <View>
        <View><Text style={styles.mytabbar}>Detalle</Text></View>
        <View style={styles.container}> 
          {/*<NavigationContainer>
        <DrawerMenu/>
        </NavigationContainer> */}
          <Text style={styles.titleText}>ID {this.props.route.params.index}</Text>
          <Text>Nombre {this.props.route.params.elemento.name}</Text>
          <Text>Apellido {this.props.route.params.elemento.last_name}</Text>
          <Text>Cedula {this.props.route.params.elemento.identity}</Text>
          <Text>Telefono {this.props.route.params.elemento.phone}</Text> 
 
        </View>
           </View>
      );
    }
  }

  const styles = StyleSheet.create({ 
    container: {
      justifyContent: 'center', 
      padding: 15,
      backgroundColor: '#ffffff',
    },
    titleText: {
      fontSize: 15,
      fontWeight: "bold"
    },
    mytabbar: {
      paddingBottom:10,
      paddingTop:10,
      fontSize: 20,
      textAlign:"center",
      fontWeight: "bold",
      backgroundColor: '#ebedf0',
    }
  });