import React, { Component } from 'react';
import { View, Text,TextInput,Button,StyleSheet,ScrollView,Alert } from 'react-native';

import {cambiarNombreEnPersona,getPerson} from '../../../src/action';

import {connect} from 'react-redux';
import { Dialog, ConfirmDialog  } from 'react-native-simple-dialogs';

import ListComponent from './List';
 
 class Person extends Component {
   
  constructor(props){ 
    super(props)  
    this.state=
        {
          dialogois: false 
        } 
  }
  elDetalle = (index,elemento) => { 
    this.setState({dialogVisible: true});
    console.log(elemento)
    this.props.navigation.navigate('Detail',{ elemento: elemento,index:index})
    
    /*Alert.alert('Detalle',
    '\n'+'*******************'+
    '\n'+'*Index: '+index+
    '\n'+'*Nombre: '+elemento.name+
    '\n'+'*Apellido: '+elemento.last_name+
    '\n'+'*Cedula: '+elemento.identity+
    '\n'+'*Telefono: '+elemento.phone+
    '\n'+'*******************')*/
  };
  setName = pname => {
    this.setState({name: pname});
  };  
    render() {  
      return ( 
        <View>
         <Text style={styles.mytabbar}>Socios</Text>
        <View> 
        <Button
          title="Cargar Socios"
          onPress={() =>  this.props.listaPerson.length > 0 ? alert("Datos ya Cargados"):this.props.retornarListaPerson()}
        /> 
        </View>
        <ScrollView style={styles.scrollStyle}>  
         <ListComponent lista={this.props.listaPerson} elDetalle={this.elDetalle} />  
        </ScrollView>
        </View>
      );
    }
  }

const mapDispatchToProps = dispatch => {
  return {
    cambiarNombreEnPersona: pName => {
      dispatch(cambiarNombreEnPersona(pName));
    },retornarListaPerson: () => {
      dispatch(getPerson());
    }
  };
};


function mapStateToProps(state) {
  return {
    nombre: state.person.personaName,
    listaPerson: state.person.lista, 
  };
}
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Person);

const styles = StyleSheet.create({ 
  scrollStyle: { 
    width: '100%' 
  },
  listContainer: {  
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