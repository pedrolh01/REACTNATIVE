import React, { Component } from 'react';
import { View, Text,StyleSheet ,Image,KeyboardAvoidingView,Button} from 'react-native';
import LoginForm from './LoginForm'
export default class Login extends Component {
  constructor(props){
    super(props) 
    this.state=
        {
          navigation: this.props.navigation 
        }
  }
    render() {
      return (
        <KeyboardAvoidingView behavior='padding' style={styles.container}>
          <View style={styles.logoContainer}> 
            <Image 
              style={styles.logo}
              source={require('../../images/voted.jpg')}/>
            <Text style={styles.title}> Socios App </Text>
            <Text style={styles.title}>  </Text>
          </View>
          <View style={styles.formContainer}>
            <LoginForm elNavigation={this.state.navigation} /> 
          </View>
        </KeyboardAvoidingView>
      );
    }
  } 
  const styles = StyleSheet.create({
    container: {
      flex:1,
      backgroundColor: '#3498db'
    },
    title:{
      color:'#FFF',
      marginTop:10,
      width:160,
      textAlign:'center',
      opacity:0.9
    },
    logoContainer:{
      alignItems:'center',
      flexGrow:1,
      justifyContent:'center'
    },
    logo:{
      width:100,
      height:100
    }
  })