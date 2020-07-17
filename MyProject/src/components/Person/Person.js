import React, { Component } from 'react';
import { View, Text,TextInput,Button,StyleSheet,ScrollView } from 'react-native';

import {cambiarNombreEnPersona,getPerson} from '../../../src/action';

import {connect} from 'react-redux';

import ListComponent from './List';
 
 class Person extends Component {

  
  setName = pname => {
    this.setState({name: pname});
  }; 
    render() {  
      
      console.log('El Nombre es '+this.props.itemId)
      console.log(this.props.elNavigation)
      return (
        <View> 
        <Button
          title="Click para cargar personas"
          onPress={() => this.props.retornarListaPerson()}
        />
         <ScrollView style={styles.scrollStyle}> 
         <View style={styles.listContainer}>
         <ListComponent lista={this.props.listaPerson} elNavigation={this.props.elNavigation}/>
         </View>
          
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
    width: '100%', 
  },
  listContainer: { 
    margin: 10, 
  },
});