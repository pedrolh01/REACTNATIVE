import React, { Component,BackHandler } from 'react';
import { View, Text,Button ,StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
 
export default class Home extends Component { 
    render() { 
      console.log(this.props)
      return ( 
        <View style={styles.container}>
          <View><Text style={styles.mytabbar}>HOME</Text></View> 
         <View style={styles.dos}> 
         <Text style={styles.title}> BIENVENIDO </Text> 
       </View> 
      </View> 
      );
    }
  }
  const styles = StyleSheet.create({
    container: {
      flex:1,
      textAlign:'center',
      backgroundColor: '#3498db'
    },
    dos:{
      alignItems:'center',
      flexGrow:1,
      justifyContent:'center'
    },
    title:{
      color:'#FFF',
      marginTop:10,
      width:160,
      textAlign:'center',
      opacity:0.9
    },mytabbar: {
      paddingBottom:10,
      paddingTop:10,
      fontSize: 20,
      fontWeight: "bold",
      textAlign:"center",
      backgroundColor: '#ebedf0',
    }
  })