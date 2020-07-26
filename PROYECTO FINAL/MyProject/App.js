import React, { Component } from 'react';
import { View, Text } from 'react-native'; 
  
import {NavigationContainer} from '@react-navigation/native';
/*import LoginScreen from './src/components/Login/Login' 
import HomeScreen from './src/components/Home/Home' 
import PersonScreen from './src/components/Person/Person' 
import VoteScreen from './src/components/Vote/Vote' */
 
import MiEncabezado from './src/Share/customHeader';

import {createStackNavigator} from  '@react-navigation/stack';

import {connect} from 'react-redux';
import {getPerson,getUser} from './src/action';

 
 
import StackMenu from './src/menu/stackMenu'
class App extends Component { 
  
  render() {
    const Stack = createStackNavigator();
    return (   
      <NavigationContainer>
         <StackMenu/>
      </NavigationContainer>
    );
  }
}



const mapDispatchToProps = dispatch => {
  return { 
    cambiarNombreApp: pName => {
      dispatch(cambiarNombre(pName));
    },
    retornarListaUser: () => {
      dispatch(getUser());
    },
    retornarListaPerson: () => {
      dispatch(getPerson());
    },
  };
};

function mapStateToProps(state) {
  return {
    nombre: state.app.appName,
    listaUser: state.user.lista,
    listaPerson: state.person.lista, 
  };
}
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);
