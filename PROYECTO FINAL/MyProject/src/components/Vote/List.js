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
    console.log(props.lista)
    //let resul = <Text>EMPTY</Text>
    let resul =[]
    resul.push(<Text>DATOS</Text>)
    if(props.lista.length > 0){
      resul =[]  
      resul.push(<View style={styles.viewvhm} key='headervm' >{props.lista.length>0?<View style={styles.viewvh} key='headerv' >
            <TouchableHighlight  style={styles.btn}  >
                <Text style={styles.txtHeader}>{props.lista[0].vote_name}</Text>
            </TouchableHighlight   >
        </View> :null}</View> 
     ) 
      resul.push(props.lista.map((elemento,index)=>(
        <View style={styles.viewv} key={index} >
            <TouchableHighlight  style={styles.btn}  onPress={() => props.confirma(true)} >
                <Text style={styles.txt}>{elemento.vote_option_name}</Text>
            </TouchableHighlight   >
        </View> 
     )))  
    }
  return  resul;
} 
const styles = StyleSheet.create({
  btn: {
    backgroundColor: 'white',
    alignItems: 'center', 
    width: '100%',
  },
   txt: {
    fontSize:20,
    color: '#000000', 
  },
  txtHeader: {
    fontSize:30,
    textAlign:"center",
    color: 'white', 
    backgroundColor: '#3498db',
  },
  viewvhm: {
    borderColor:'#f2f2f2',borderBottomWidth:1,
    backgroundColor: '#3498db',
    alignItems: 'center', 
    width: '100%',
  },
  viewv: {
    borderColor:'#f2f2f2',borderBottomWidth:1,
    backgroundColor: '#3498db',
    alignItems: 'center', 
    width: '100%',
  },
});

export default List