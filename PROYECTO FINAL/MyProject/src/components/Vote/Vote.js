import React, { Component } from 'react';
import { View, Text,TextInput,Button,StyleSheet,ScrollView,Alert } from 'react-native';

import {getVote} from '../../../src/action';

import {connect} from 'react-redux';

import ListComponent from './List';
import { Dialog, ConfirmDialog  } from 'react-native-simple-dialogs';

class Vote extends Component {
  constructor(props){
    super(props) 
    this.state=
        {
          dialogois: false 
        }
  }
  openConfirm = (show) => {
    this.setState({ showConfirm: show });
}
  optionYes = (opcionVoto) => {
    this.openConfirm(false); 
    setTimeout(
        () => {
            Alert.alert("Gracias por Votar");
            this.props.navigation.replace('Home')
        },
        300,
    );
}

optionNo = (opcionVoto) => {
    this.openConfirm(false); 
    setTimeout(
        () => {
            Alert.alert("Sin Votar");
        },
        300,
    );
}
    render() {
      /*const el = this.props.listaVote.length > 0 ? this.props.listaVote.data[0].vote_name:0
      console.log(this.props.listaVote)
      */
      return (
        <View>
        <Text style={styles.mytabbar}>Votos</Text>
        <View> 
        <Button
          title="Cargar Votos"
          onPress={() =>  this.props.listaVote.length > 0 ? alert("Datos ya Cargados"):this.props.retornarListaVote()} 
        /> 
        </View>
        <ScrollView style={styles.scrollStyle}> 
         <View style={styles.listContainer}>
          {/*<Text>{el}</Text> */}
         <ListComponent lista={this.props.listaVote} confirma={this.openConfirm}/>
         <ConfirmDialog
                    title="Votando"
                    message="Seguro de votar?"
                    onTouchOutside={() => this.openConfirm(false)}
                    visible={this.state.showConfirm}
                    negativeButton={{
                        title: "NO",
                        onPress: this.optionNo,
                        disabled: false,
                        titleStyle: {
                            color: "blue",
                            colorDisabled: "aqua",
                        },
                        style: {
                            backgroundColor: "transparent",
                            backgroundColorDisabled: "transparent",
                        },
                    }}
                    positiveButton={{
                        title: "YES",
                        onPress: this.optionYes,
                    }}
                />
         </View>
          
        </ScrollView>
        </View>
      );
    }
  }
  const mapDispatchToProps = dispatch => {
    return {
      retornarListaVote: () => {
        dispatch(getVote());
      }
    };
  };
  
  
  function mapStateToProps(state) {
    return { 
      listaVote: state.vote.lista 
    };
  }
  export default connect(
    mapStateToProps,
    mapDispatchToProps,
  )(Vote);
  
  const styles = StyleSheet.create({ 
    scrollStyle: { 
      width: '100%', 
    },
    listContainer: { 
      margin: 10, 
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