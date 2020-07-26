import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Button,
  TouchableWithoutFeedback,
  TouchableHighlight ,
} from 'react-native'; 

const List = props =>{ 
    let resul = <Text>DATOS</Text>
    if(props.lista.length > 0){
        resul = props.lista.map((elemento,index)=>(
            <View style={styles.viewv} key={index} key={index}>
                <TouchableHighlight  style={styles.btn} 
                onPress={() => props.elDetalle(index,elemento)} >
                    <Text style={styles.txt}>{elemento.name}</Text>
                </TouchableHighlight   >
            </View> 
        ))
    } 
  return resul;
} 
const styles = StyleSheet.create({
  btn: {
    backgroundColor: 'white',
    alignItems: 'center', 
    width: '100%',
  },
   txt: {
    fontSize:30,
    color: '#000000', 
  },
  viewv: {
    borderColor:'#f2f2f2',borderBottomWidth:1,
    backgroundColor: 'orange',
    alignItems: 'center', 
    width: '100%',
  },
});

export default List