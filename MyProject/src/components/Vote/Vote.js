import React, { Component } from 'react';
import { View, Text,TextInput,Button,StyleSheet,ScrollView } from 'react-native';

import {getVote} from '../../../src/action';

import {connect} from 'react-redux';

import ListComponent from './List';

class Vote extends Component {
  
    render() {
      /*const el = this.props.listaVote.length > 0 ? this.props.listaVote.data[0].vote_name:0
      console.log(this.props.listaVote)
      */
      return (
        <View> 
        <Button
          title="Click para cargar Votos"
          onPress={() => this.props.retornarListaVote()}
        />
         <ScrollView style={styles.scrollStyle}> 
         <View style={styles.listContainer}>
          {/*<Text>{el}</Text> */}
         <ListComponent lista={this.props.listaVote}/>
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
  });