import React, { Component } from 'react';
import { View, Text,StyleSheet ,TextInput,TouchableOpacity,Button} from 'react-native'; 
import {getUser} from '../../../src/action';

import {connect} from 'react-redux';
class LoginForm extends Component {

    constructor(props){
        super(props)
        this.props.retornarListaUser() 
      }
      
      state=
      {
        username: 'Pedro',
        password:'207280231', 
        isFetch:true,
        persona:[]
      }  
      validate=()=>{ 
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
      userIsValid=()=>{
        if (this.validate()){
          if(!this.props.isFetch){ 
            console.log('loading...')  
          }else{
            console.log('CARGADOOOOOOOOOOOOOOOOO') 
           if(this.props.listaUser.data[0].name == this.state.username && this.props.listaUser.data[0].identity == this.state.password){
              alert('Autenticado')
              console.log('Autenticado')
              this.props.iniciaNavega() 
            }else{
              //alert('Error credenciales')
            }
            //console.log(this.state.persona.data[0].name)
          }
        } 
      }
    render() {  
    // this.userIsValid()
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
          onPress={() => this.userIsValid()}
          style={styles.buttonContainer}>
           <Text style={styles.buttonText}>Login</Text>   
          </TouchableOpacity> 
          
        </View>
      );
    }
  }

  const mapDispatchToProps = dispatch => {
    return {
      retornarListaUser: () => {
        dispatch(getUser());
      }
    };
  };
  
  
  function mapStateToProps(state) {
    return { 
      listaUser: state.user.lista,
      isFetch : state.user.isFetch 
    };
  }
  export default connect(
    mapStateToProps,
    mapDispatchToProps,
  )(LoginForm);

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