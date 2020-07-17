import React, { Component } from 'react';
import { View, Text,StyleSheet ,TextInput,TouchableOpacity,Button} from 'react-native'; 

export default class LoginForm extends Component {
    constructor(props){
        super(props)
        this.state=
        {
          username: 'Pedro',
          password:'207280231', 
          isFetch:true,
          persona:[]
        }
      }

      apiCall=()=>{
        //if(this.validate()){
          fetch('http://theldz.com/asv/api/getPerson')
          .then(response => response.json())
          .then(eljson => this.setState({persona:eljson,isFetch:false}))
            //alert('login')
            //console.log('login')
            //console.log(this.state.persona)
        //}
      }
      validate=()=>{
        //return true
          const {username,password} = this.state
          if(username==''){
            alert('fill username')
            return false
          }else if(password==''){
            alert('fill password')
            return false
          } 
          return true
      }
    render() {
      if(this.state.isFetch){
        console.log('loading...')  
      }else{
        console.log('cargado')
        if(this.state.persona.data[0].name == this.state.username && this.state.persona.data[0].identity == this.state.password){
          alert('Autenticado')
          this.props.elNavigation.navigate('Home')
        }else{
          //alert('Error credenciales')
        }
        //console.log(this.state.persona.data[0].name)
      }
      return (
        <View style={styles.container}>
          <TextInput 
          onChangeText={(value) => this.setState({username:value})}
          placeholder='username'
          returnKeyType='next'
          placeholderTextColor='rgba(255,255,255,0.7)'
          onSubmitEditing={() => this.passwordInput.focus()}
          style={styles.input}/>
          <TextInput 
          onChangeText={(value) => this.setState({password:value})}
          placeholder='password'
          secureTextEntry
          returnKeyType='go'
          ref={(input) => this.passwordInput = input}
          placeholderTextColor='rgba(255,255,255,0.7)'
          style={styles.input}/>
         
          <TouchableOpacity 
          onPress={() => this.apiCall()}
          style={styles.buttonContainer}>
           <Text style={styles.buttonText}>Login</Text>   
          </TouchableOpacity> 
          
        </View>
      );
    }
  }
  const styles = StyleSheet.create({
    container: { 
        padding:20
    },
    buttonContainer: { 
       paddingVertical:10,
       backgroundColor:'#2980b9'
    },
    buttonText: { 
        textAlign:'center',
        color:'#FFFFFF',
        fontWeight:'700'
    },
    input: {
        height:40,
        backgroundColor: 'rgba(255,255,255,0.2)',
        marginBottom:20,
        color:'#FFF',
        paddingHorizontal:10
      }
  })